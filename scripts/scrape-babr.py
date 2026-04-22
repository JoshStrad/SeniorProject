# all python libraries
import os
import glob
import json
import re
import math

import pandas as pd
from bs4 import BeautifulSoup, Comment

# Build important project paths
# BASE_DIR = project root
# HTML_DIR = folder with saved Baseball Reference HTML files
# OUT_DIR = folder where parsed pitcher JSON files will be saved
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_DIR = os.path.join(BASE_DIR, "babr-html")
OUT_DIR = os.path.join(BASE_DIR, "scrapeddata", "mlb", "pitchers")

# Make sure the output folder exists before writing JSON files
os.makedirs(OUT_DIR, exist_ok=True)

# Common Baseball-Reference pitching table ids
PITCHING_TABLE_IDS = [
    "players_standard_pitching",
    "standard_pitching",
]

# Map Baseball Reference team abbreviations to the site slug used in URLs
MLB_TEAM_MAP = {
    "ARI": "diamondbacks",
    "ATL": "braves",
    "BAL": "orioles",
    "BOS": "red-sox",
    "CHC": "cubs",
    "CHW": "white-sox",
    "CIN": "reds",
    "CLE": "guardians",
    "COL": "rockies",
    "DET": "tigers",
    "HOU": "astros",
    "KC": "royals",
    "LAA": "angels",
    "LAD": "dodgers",
    "MIA": "marlins",
    "MIL": "brewers",
    "MIN": "twins",
    "NYM": "mets",
    "NYY": "yankees",
    "OAK": "athletics",
    "PHI": "phillies",
    "PIT": "pirates",
    "SD": "padres",
    "SEA": "mariners",
    "SF": "giants",
    "STL": "cardinals",
    "TB": "rays",
    "TEX": "rangers",
    "TOR": "blue-jays",
    "WSH": "nationals",
}

# Convert a player name into a clean slug for file names and URLs
# Example: "Paul Skenes" -> "paul-skenes"
def slugify(name: str) -> str:
    name = name.strip().lower()
    name = re.sub(r"[^a-z0-9]+", "-", name)
    name = re.sub(r"-+", "-", name).strip("-")
    return name

# Try to find the pitching stats table in the HTML
# Baseball Reference sometimes hides tables inside HTML comments
def extract_pitching_table_html(soup: BeautifulSoup) -> str:

    # First try to find the table directly in the normal page HTML
    for table_id in PITCHING_TABLE_IDS:
        table = soup.find("table", id=table_id)
        if table:
            return str(table)

    # If not found, search inside HTML comments
    for comment in soup.find_all(string=lambda t: isinstance(t, Comment)):
        comment_soup = BeautifulSoup(comment, "lxml")
        for table_id in PITCHING_TABLE_IDS:
            table = comment_soup.find("table", id=table_id)
            if table:
                return str(table)

    # Raise an error if no valid pitching table could be found
    raise ValueError("Could not find pitching table in page")

# Extract text from a labeled block like:
# <p><strong>Team:</strong> Pittsburgh Pirates</p>
# Returns the text after the colon
def extract_label_block_text(soup: BeautifulSoup, label: str):
   
   # Find the bold label tag
    strong = soup.find("strong", string=lambda s: s and label in s)
    if not strong or not strong.parent:
        return None

    # Get the full parent text
    parent_text = strong.parent.get_text(" ", strip=True)

    # Split into label and value at the first colon
    parts = parent_text.split(":", 1)
    if len(parts) < 2:
        return None
    
    # Return only the value portion
    value = parts[1].strip()
    return value or None

# Parse the meta and bio block from the pitcher page
def parse_meta_block(soup: BeautifulSoup) -> dict:
    """
    Extracts meta info about the pitcher:
      - bats
      - throws
      - height
      - weight
      - birth date
      - birth place
      - school / high school
      - draft
      - debut
      - rookie status
    """
    meta = {}

    # Extract bats and throws, they appear on the same line
    bats_block = extract_label_block_text(soup, "Bats:")
    if bats_block:
        if "Throws:" in bats_block:
            bats_part, throws_part = bats_block.split("Throws:", 1)
            meta["bats"] = bats_part.strip(" ▪").strip() or None
            meta["throws"] = throws_part.strip() or None
        else:
            meta["bats"] = bats_block.strip()

    # Extract school if present
    school = extract_label_block_text(soup, "School:")
    if school:
        meta["school"] = school

    # Extract high school if present
    high_school = extract_label_block_text(soup, "High School:")
    if high_school:
        meta["high_school"] = high_school

    # Extract draft info if present
    draft = extract_label_block_text(soup, "Draft:")
    if draft:
        meta["draft"] = draft

    # Extract MLB debut info if present
    debut = extract_label_block_text(soup, "Debut:")
    if debut:
        meta["debut"] = debut

    # Extract rookie status if present
    rookie_status = extract_label_block_text(soup, "Rookie Status:")
    if rookie_status:
        meta["rookie_status"] = rookie_status

    # Extract birth date display text and ISO date if available
    birth_span = soup.find("span", itemprop="birthDate")
    if birth_span:
        meta["birth_date_display"] = birth_span.get_text(strip=True) or None
        meta["birth_date_iso"] = birth_span.get("data-birth") or None

    # Extract birthplace if present
    birth_place_span = soup.find("span", itemprop="birthPlace")
    if birth_place_span:
        meta["birth_place"] = birth_place_span.get_text(" ", strip=True) or None

    # Extract height exactly as shown on the page
    height_span = soup.find("span", itemprop="height")
    if height_span:
        meta["height"] = height_span.get_text(strip=True) or None

    # Extract weight and convert to an integer pound value
    weight_span = soup.find("span", itemprop="weight")
    if weight_span:
        wtext = weight_span.get_text(strip=True)
        m = re.search(r"(\d+)\s*lb", wtext)
        if m:
            try:
                meta["weight_lb"] = int(m.group(1))
            except ValueError:
                meta["weight_lb"] = None
        else:
            meta["weight_lb"] = None

    return meta

# Replace any pandas NaN values with None
# This makes the JSON output cleaner
def clean_record_nan(record: dict) -> dict:
    
    cleaned = {}
    for k, v in record.items():
        if isinstance(v, float) and math.isnan(v):
            cleaned[k] = None
        else:
            cleaned[k] = v
    return cleaned

# Baseball Reference tables sometimes come back with MultiIndex columns
# This flattens them into single string column names
def flatten_multiindex_columns(df: pd.DataFrame) -> pd.DataFrame:
    
    if isinstance(df.columns, pd.MultiIndex):
        flat_cols = []
        for col in df.columns:
            parts = [str(x).strip() for x in col if str(x).strip() and str(x) != "nan"]
            flat_cols.append("_".join(parts) if parts else "")
        df.columns = flat_cols
    return df

# Check whether a season/year value is actually a real season
# This filters out blanks or weird non-year rows
def is_valid_season_value(value) -> bool:
    
    if value is None:
        return False

    text = str(value).strip()
    if not text:
        return False

    # Accept values like 2018, 2024, etc.
    if re.fullmatch(r"\d{4}", text):
        return True

    return False

# Keep only real year-by-year pitching rows
def filter_pitching_records(records: list) -> list:

    filtered = []

    for record in records:
        season_value = record.get("Season") if "Season" in record else record.get("Year")
        if is_valid_season_value(season_value):
            filtered.append(record)

    return filtered

# Find the most recent real MLB team abbreviation in the records
def get_latest_team_abbr(records: list) -> str | None:
   
    # Walk backward so the first valid team found is the latest one
    for record in reversed(records):
        team = record.get("Team")

        if not isinstance(team, str):
            continue

        team = team.strip()
        if not team:
            continue

        if team in MLB_TEAM_MAP:
            return team

    return None

# Parse one saved Baseball Reference pitcher HTML file into a JSON-style dict
def parse_pitcher_file(html_path: str) -> dict:
    
    # Read the saved HTML file
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Parse the HTML with BeautifulSoup
    soup = BeautifulSoup(html, "lxml")

    # Try to get the player name from breadcrumbs first
    name_tag = soup.select_one("div.breadcrumbs strong")
    if not name_tag:
        name_tag = soup.find("h1")
    if not name_tag:
        raise ValueError(f"Could not find player name in {html_path}")

    # Some Baseball Reference h1 values include extra text like "Statistics"
    # Remove that so only the player name remains
    raw_name = name_tag.get_text(strip=True)
    player_name = re.sub(r"\s+Statistics.*$", "", raw_name).strip()

    # Parse all bio and meta data
    meta = parse_meta_block(soup)

    # Extract the pitching table HTML and parse it with pandas
    pitching_html = extract_pitching_table_html(soup)
    df_list = pd.read_html(pitching_html)
    if not df_list:
        raise ValueError(f"Could not parse pitching table in {html_path}")

    df = df_list[0]

    # Flatten column names in case pandas created a MultiIndex
    df = flatten_multiindex_columns(df)

    # Remove repeated header rows and summary rows before converting to records
    if "Year" in df.columns:
        df = df[df["Year"] != "Year"]
        df = df[df["Year"] != "Career"]

    if "Season" in df.columns:
        df = df[df["Season"] != "Season"]
        df = df[df["Season"] != "Career"]

    # Convert DataFrame rows to dictionaries
    raw_records = df.to_dict(orient="records")

    # Replace NaN values with None
    records = [clean_record_nan(r) for r in raw_records]

    # Keep only actual season rows
    records = filter_pitching_records(records)

    # Build player and team slugs for site routing
    player_slug = slugify(player_name)
    team_abbr = get_latest_team_abbr(records)
    team_slug = MLB_TEAM_MAP.get(team_abbr, "unknown")

    # Build final pitcher JSON structure
    player_data = {
        "player_name": player_name,
        "team": team_abbr,
        "team_slug": team_slug,
        "league": "MLB",
        "slug": f"/mlb/{team_slug}/{player_slug}",
        "source_file": os.path.basename(html_path),
        "meta": meta,
        "pitching": records,
    }
    return player_data

# Main function
# Finds all saved BABR HTML files, parses them,
# and writes each pitcher JSON file to scrapeddata/mlb/pitchers
def main():
    # Search all HTML files inside babr-html and its subfolders
    pattern = os.path.join(HTML_DIR, "**", "*.html")
    html_files = sorted(glob.glob(pattern, recursive=True))

    # Stop if no files were found
    if not html_files:
        print(f"No HTML files found under {HTML_DIR}")
        return

    print(f"Found {len(html_files)} HTML files under {HTML_DIR}")

    # Parse each HTML file one at a time
    for path in html_files:
        try:
            data = parse_pitcher_file(path)
        except Exception as e:

            # Report the bad file and continue with the rest
            print(f"[ERROR] {path}: {e}")
            continue

        # Use the player's slug as the JSON output file name
        file_slug = slugify(data["player_name"])
        out_path = os.path.join(OUT_DIR, f"{file_slug}.json")

        # Write parsed pitcher data to JSON
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)

        print(f"[OK] {data['player_name']} -> {out_path}")

# Run the script only if executed directly
if __name__ == "__main__":
    main()