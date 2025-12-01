#!/usr/bin/env python3
import json
from pathlib import Path
from io import StringIO

import pandas as pd
from bs4 import BeautifulSoup, Comment

HTML_PATH = Path("raw/pfr-josh-allen.html")
OUT_PATH = Path("scrapeddata/josh-allen.json")
PASSING_ID = "passing"
RUSHREC_ID = "rushing_and_receiving"

def load_soup_from_file(path: Path) -> BeautifulSoup:
    """Load saved HTML from disk and parse with BeautifulSoup."""
    if not path.exists():
        raise FileNotFoundError(
            f"HTML file not found: {path}. Save the page from your browser first."
        )
    text = path.read_text(encoding="utf-8", errors="ignore")
    return BeautifulSoup(text, "lxml")

def extract_table_html(soup: BeautifulSoup, table_id: str) -> str:
    """
    Find and return the HTML for a table with id=<table_id>.
    Handles both normal tables and ones hidden inside HTML comments.
    """
    t = soup.find("table", id=table_id)
    if t:
        return str(t)
    for c in soup.find_all(string=lambda t: isinstance(t, Comment)):
        if c and f'id="{table_id}"' in c:
            return str(c)
    raise RuntimeError(f"Table {table_id} not found in HTML.")

def read_table(soup: BeautifulSoup, table_id: str) -> pd.DataFrame:
    html = extract_table_html(soup, table_id)
    dfs = pd.read_html(StringIO(html), attrs={"id": table_id})
    if not dfs:
        raise RuntimeError(f"pandas could not parse table {table_id}")
    df = dfs[0]
    # Flatten MultiIndex columns if present
    if isinstance(df.columns, pd.MultiIndex):
        def join_levels(col_tuple):
            parts = [p for p in col_tuple if p and not str(p).startswith("Unnamed")]
            name = " ".join(map(str, parts)).strip()
            return name or "Column"
        df.columns = [join_levels(c) for c in df.columns]
    return df

def detect_season_col(df: pd.DataFrame) -> str:
    for cand in ("Season", "Year"):
        if cand in df.columns:
            return cand
    # fallback: first column
    return df.columns[0]

def coerce_numeric_cols(df: pd.DataFrame, exclude: list[str]) -> pd.DataFrame:
    for c in df.columns:
        if c in exclude:
            continue
        s = (
            df[c]
            .astype(str)
            .str.replace(r"[*+]", "", regex=True)
            .replace({"": None, "nan": None})
        )
        coerced = pd.to_numeric(s, errors="coerce")
        if coerced.notna().any():
            df[c] = coerced
    return df

def clean_season_table(df: pd.DataFrame) -> pd.DataFrame:
    season_col = detect_season_col(df)
    # drop repeated header rows
    df = df[df[season_col] != season_col]
    # keep only rows where Season looks like a 4-digit year
    df = df[df[season_col].astype(str).str.match(r"^\d{4}$", na=False)].copy()
    df = coerce_numeric_cols(df, exclude=[season_col, "Tm", "Pos", "Lg"])
    return df.reset_index(drop=True)

def main() -> None:
    soup = load_soup_from_file(HTML_PATH)

    # ----- Passing table -----
    passing = read_table(soup, PASSING_ID)
    passing = clean_season_table(passing)
    if "Lg" not in passing.columns:
        passing["Lg"] = "NFL"
    if "Pos" not in passing.columns:
        passing["Pos"] = "QB"

    pass_keep = [
        "Season","Age","Tm","Lg","Pos","G","GS",
        "Cmp","Att","Cmp%","Yds","TD","Int",
        "Rate","Sk","Y/A","AY/A","Y/G"
    ]
    p = passing[[c for c in pass_keep if c in passing.columns]].copy()

    # ----- Rushing & receiving table (for Rush/RuYds/RuTD) -----
    try:
        rushrecv = read_table(soup, RUSHREC_ID)
        rushrecv = clean_season_table(rushrecv)

        rush_season_col = detect_season_col(rushrecv)
        if rush_season_col != "Season":
            rushrecv = rushrecv.rename(columns={rush_season_col: "Season"})

        # PFR labels can vary; try to find sane columns
        rush_att_col = next((c for c in rushrecv.columns if c.lower() == "rushing att"), None)
        rush_yds_col = next((c for c in rushrecv.columns if c.lower() == "rushing yds"), None)
        rush_td_col  = next((c for c in rushrecv.columns if c.lower() == "rushing td"),  None)

        if rush_att_col is None and "Att" in rushrecv.columns:
            rush_att_col = "Att"
        if rush_yds_col is None and "Yds" in rushrecv.columns:
            rush_yds_col = "Yds"
        if rush_td_col is None  and "TD"  in rushrecv.columns:
            rush_td_col  = "TD"

        if not all([rush_att_col, rush_yds_col, rush_td_col]):
            raise RuntimeError("Could not find rushing columns")

        rush = rushrecv[["Season", rush_att_col, rush_yds_col, rush_td_col]].rename(
            columns={rush_att_col: "Rush", rush_yds_col: "RuYds", rush_td_col: "RuTD"}
        )
    except Exception as e:
        print(f"⚠️ Rushing table issue for Josh Allen: {e}. Using empty rushing stats.")
        rush = pd.DataFrame({
            "Season": p["Season"],
            "Rush": None,
            "RuYds": None,
            "RuTD": None,
        })

    # ----- Merge passing + rushing -----
    merged = p.merge(rush, on="Season", how="left")
    merged["Awards"] = ""   # you can fill manually later if you want

    final_cols = [
        "Season","Age","Tm","Lg","Pos","G","GS",
        "Cmp","Att","Cmp%","Yds","TD","Int",
        "Rate","Sk","Y/A","AY/A","Y/G",
        "Rush","RuYds","RuTD","Awards"
    ]
    for c in final_cols:
        if c not in merged.columns:
            merged[c] = None
    merged = merged[final_cols].sort_values("Season").reset_index(drop=True)

    payload = {
        "player": "Josh Allen",
        "number": 17,
        "height": "6'5\"",
        "age": int(merged.iloc[-1]["Age"]) if not merged.empty and pd.notna(merged.iloc[-1]["Age"]) else None,
        "position": "QB",
        "college": "Wyoming",
        "draft": "7th overall in the 2018 NFL Draft by the Buffalo Bills",
        "image": "https://static.www.nfl.com/image/upload/t_headshot_desktop/league/xnxmpydylm0phz0fvrfq",
        "source": str(HTML_PATH),
        "bio": "Josh Allen is a dual-threat quarterback for the Buffalo Bills, known for his big arm and rushing ability.",
        "per_season": merged.to_dict(orient="records"),
    }

    OUT_PATH.parent.mkdir(exist_ok=True)
    OUT_PATH.write_text(json.dumps(payload, indent=2))
    print(f"✅ Wrote {OUT_PATH} with {len(merged)} seasons")

if __name__ == "__main__":
    main()
