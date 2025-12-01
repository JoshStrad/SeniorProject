#!/usr/bin/env python3
import time, random, json
import requests
import pandas as pd
from bs4 import BeautifulSoup, Comment
from io import StringIO
from pathlib import Path

PFR_URL = "https://www.pro-football-reference.com/players/M/MahoPa00.htm"
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
    if isinstance(df.columns, pd.MultiIndex):
        df.columns = [_join_levels(c) for c in df.columns]
    return df

def detect_season_col(df: pd.DataFrame) -> str:
    for cand in ("Season", "Year"):
        if cand in df.columns:
            return cand
    for c in df.columns:
        lc = str(c).lower()
        if lc.endswith("year") or lc.endswith("season") or lc in ("yr",):
            return c
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
    df = df[df[season_col] != season_col]
    df = df[df[season_col].astype(str).str.match(r"^\d{4}$", na=False)].copy()
    df = coerce_numeric_cols(df, exclude=[season_col, "Tm", "Pos", "Lg"])
    return df.reset_index(drop=True)

def build_placeholder_payload() -> dict:
    return {
        "player": "Patrick Mahomes",
        "number": 15,
        "height": "6'3\"",
        "age": 30,
        "position": "QB",
        "college": "Texas Tech",
        "draft": "10th overall in the 2017 NFL Draft by the Kansas City Chiefs",
        "image": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png",
        "source": PFR_URL,
        "bio": "Patrick Mahomes is the face of the Kansas City Chiefs and one of the most dynamic quarterbacks in NFL history.",
        "per_season": []  # we’ll show static fallback rows in React if this is empty
    }

def main() -> None:
    out = Path("scrapeddata")
    out.mkdir(exist_ok=True)
    out_file = out / "patrick-mahomes.json"

    try:
        soup = fetch_html(PFR_URL)
    except requests.HTTPError as e:
        print(f"⚠️ Could not fetch Mahomes page ({e}). Writing placeholder JSON.")
        out_file.write_text(json.dumps(build_placeholder_payload(), indent=2))
        print(f"✅  Wrote placeholder scrapeddata/patrick-mahomes.json")
        return

    # If we get here, we actually have HTML and can try to scrape
    passing = read_table(soup, PASSING_ID)
    passing = clean_season_table(passing)
    if "Lg" not in passing.columns: passing["Lg"] = "NFL"
    if "Pos" not in passing.columns: passing["Pos"] = "QB"

    pass_keep = [
        "Season","Age","Tm","Lg","Pos","G","GS","Cmp","Att","Cmp%","Yds","TD","Int",
        "Rate","Sk","Y/A","AY/A","Y/G"
    ]
    p = passing[[c for c in pass_keep if c in passing.columns]].copy()

    # Try rushing+receiving; if anything fails, just skip rushing
    try:
        rushrecv = read_table(soup, RUSHREC_ID)
        rushrecv = clean_season_table(rushrecv)

        rush_season_col = detect_season_col(rushrecv)
        if rush_season_col != "Season":
            rushrecv = rushrecv.rename(columns={rush_season_col: "Season"})

        rush_att_col = next((c for c in rushrecv.columns if c.lower() == "rushing att"), None)
        rush_yds_col = next((c for c in rushrecv.columns if c.lower() == "rushing yds"), None)
        rush_td_col  = next((c for c in rushrecv.columns if c.lower() == "rushing td"),  None)

        if rush_att_col is None:
            rush_att_col = "Att" if "Att" in rushrecv.columns else None
        if rush_yds_col is None:
            rush_yds_col = "Yds" if "Yds" in rushrecv.columns else None
        if rush_td_col is None:
            rush_td_col = "TD"  if "TD"  in rushrecv.columns else None

        if not all([rush_att_col, rush_yds_col, rush_td_col]):
            raise RuntimeError("Could not find rushing columns")

        rush = rushrecv[["Season", rush_att_col, rush_yds_col, rush_td_col]].rename(
            columns={rush_att_col: "Rush", rush_yds_col: "RuYds", rush_td_col: "RuTD"}
        )
    except Exception as e:
        print(f"⚠️ Rushing table issue for Mahomes: {e}. Using empty rushing stats.")
        rush = pd.DataFrame({"Season": p["Season"], "Rush": None, "RuYds": None, "RuTD": None})

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

    payload = build_placeholder_payload()
    payload["age"] = int(merged.iloc[-1]["Age"]) if not merged.empty and pd.notna(merged.iloc[-1]["Age"]) else payload["age"]
    payload["per_season"] = merged.to_dict(orient="records")

    out_file.write_text(json.dumps(payload, indent=2))
    print("✅  Wrote scrapeddata/patrick-mahomes.json (scraped)")

if __name__ == "__main__":
    main()
