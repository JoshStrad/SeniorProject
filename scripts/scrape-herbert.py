#!/usr/bin/env python3
import time, random, json
import requests
import pandas as pd
from bs4 import BeautifulSoup, Comment
from io import StringIO
from pathlib import Path

PFR_URL = "https://www.pro-football-reference.com/players/H/HerbJu00.htm"
PASSING_ID = "passing"
RUSHREC_ID = "rushing_and_receiving"
USER_AGENT = "GameWinningStatsBot/1.0 (+contact: you@example.com) Python/requests"

def fetch_html(url: str) -> BeautifulSoup:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }
    time.sleep(random.uniform(1.0, 2.0))  # polite delay
    r = requests.get(url, headers=headers, timeout=30)
    r.raise_for_status()
    return BeautifulSoup(r.text, "lxml")

def extract_table_html(soup: BeautifulSoup, table_id: str) -> str:
    t = soup.find("table", id=table_id)
    if t:
        return str(t)
    for c in soup.find_all(string=lambda s: isinstance(s, Comment)):
        if c and f'id="{table_id}"' in c:
            return str(c)
    raise RuntimeError(f"Table #{table_id} not found (direct or commented).")

def _join_levels(col_tuple):
    """Join multiindex levels into a single readable column name."""
    if not isinstance(col_tuple, tuple):
        return str(col_tuple)
    parts = [p for p in col_tuple if p and not str(p).startswith("Unnamed")]
    name = " ".join(parts).strip()
    return name or "Column"

def read_table(soup: BeautifulSoup, table_id: str) -> pd.DataFrame:
    html = extract_table_html(soup, table_id)
    dfs = pd.read_html(StringIO(html), attrs={"id": table_id})
    if not dfs:
        raise RuntimeError(f"Couldn't parse table {table_id}")
    df = dfs[0]
    # If MultiIndex, join levels -> unique names like "Rushing Yds", "Receiving Yds"
    if isinstance(df.columns, pd.MultiIndex):
        df.columns = [_join_levels(c) for c in df.columns]
    return df

def detect_season_col(df: pd.DataFrame) -> str:
    # Prefer exact matches
    for cand in ("Season", "Year"):
        if cand in df.columns:
            return cand
    # Otherwise look for something that ends/starts with year/season
    for c in df.columns:
        lc = str(c).lower()
        if lc.endswith("year") or lc.endswith("season") or lc in ("yr",):
            return c
    # Fallback: first column
    return df.columns[0]

def coerce_numeric_cols(df: pd.DataFrame, exclude: list[str]) -> pd.DataFrame:
    for c in df.columns:
        if c in exclude:
            continue
        s = (
            df[c].astype(str)
                 .str.replace(r"[*+]", "", regex=True)
                 .replace({"": None, "nan": None})
        )
        coerced = pd.to_numeric(s, errors="coerce")
        if coerced.notna().any():
            df[c] = coerced
    return df

def clean_season_table(df: pd.DataFrame) -> pd.DataFrame:
    season_col = detect_season_col(df)
    # Drop in-body header repeats
    df = df[df[season_col] != season_col]
    # Keep rows where season looks like 4-digit year
    df = df[df[season_col].astype(str).str.match(r"^\d{4}$", na=False)].copy()
    df = coerce_numeric_cols(df, exclude=[season_col, "Tm", "Pos", "Lg"])
    return df.reset_index(drop=True)

def main() -> None:
    soup = fetch_html(PFR_URL)

    # --- Passing ---
    passing = read_table(soup, PASSING_ID)
    passing = clean_season_table(passing)
    if "Lg" not in passing.columns: passing["Lg"] = "NFL"
    if "Pos" not in passing.columns: passing["Pos"] = "QB"

    pass_keep = [
        "Season","Age","Tm","Lg","Pos","G","GS","Cmp","Att","Cmp%","Yds","TD","Int",
        "Rate","Sk","Y/A","AY/A","Y/G"
    ]
    p = passing[[c for c in pass_keep if c in passing.columns]].copy()

    # --- Rushing & Receiving ---
    rushrecv = read_table(soup, RUSHREC_ID)
    rushrecv = clean_season_table(rushrecv)

    # Normalize season column name
    rush_season_col = detect_season_col(rushrecv)
    if rush_season_col != "Season":
        rushrecv = rushrecv.rename(columns={rush_season_col: "Season"})

    # After joining headers, rushing columns should be "Rushing Att", "Rushing Yds", "Rushing TD"
    rush_att_col = next((c for c in rushrecv.columns if c.lower() == "rushing att"), None)
    rush_yds_col = next((c for c in rushrecv.columns if c.lower() == "rushing yds"), None)
    rush_td_col  = next((c for c in rushrecv.columns if c.lower() == "rushing td"),  None)

    # Fallback if site structure slightly different
    if rush_att_col is None:
        rush_att_col = "Att" if "Att" in rushrecv.columns else None
    if rush_yds_col is None:
        # prefer rushing yds; if both exist as duplicates we already disambiguated
        rush_yds_col = "Yds" if "Yds" in rushrecv.columns else None
    if rush_td_col is None:
        rush_td_col = "TD"  if "TD"  in rushrecv.columns else None

    if not all([rush_att_col, rush_yds_col, rush_td_col]):
        # If we can't find rushing cols, make an empty frame with Season only
        rush = pd.DataFrame({"Season": rushrecv["Season"], "Rush": None, "RuYds": None, "RuTD": None})
    else:
        rush = rushrecv[["Season", rush_att_col, rush_yds_col, rush_td_col]].rename(
            columns={rush_att_col: "Rush", rush_yds_col: "RuYds", rush_td_col: "RuTD"}
        )

    # Merge passing + rushing
    merged = p.merge(rush, on="Season", how="left")
    merged["Awards"] = ""

    final_cols = [
        "Season","Age","Tm","Lg","Pos","G","GS","Cmp","Att","Cmp%","Yds","TD","Int",
        "Rate","Sk","Y/A","AY/A","Y/G","Rush","RuYds","RuTD","Awards"
    ]
    for c in final_cols:
        if c not in merged.columns:
            merged[c] = None
    merged = merged[final_cols].sort_values("Season").reset_index(drop=True)

    payload = {
        "player": "Justin Herbert",
        "number": 10,
        "height": "6'6\"",
        "age": int(merged.iloc[-1]["Age"]) if not merged.empty and pd.notna(merged.iloc[-1]["Age"]) else None,
        "position": "QB",
        "college": "Oregon",
        "draft": "6th overall in the 2020 NFL Draft by the Los Angeles Chargers",
        "image": "https://static.www.nfl.com/image/upload/t_headshot_desktop/league/s1oelyaroiaalgilbeqk",
        "source": PFR_URL,
        "bio": "Justin Herbert is a strong-armed, high-IQ quarterback for the Los Angeles Chargers...",
        "per_season": merged.to_dict(orient="records"),
    }

    out = Path("scrapeddata"); out.mkdir(exist_ok=True)
    (out / "justin-herbert.json").write_text(json.dumps(payload, indent=2))
    print("✅  Wrote scrapeddata/justin-herbert.json")

if __name__ == "__main__":
    main()
