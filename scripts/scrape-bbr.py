# all python libraries
import os
import glob
import json
import re
import math

import pandas as pd
from bs4 import BeautifulSoup, Comment

# Build important folder paths based on where this script lives
# BASE_DIR = project root
# HTML_DIR = folder containing saved Basketball Reference HTML files
# OUT_DIR = folder where parsed JSON player files will be written
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_DIR = os.path.join(BASE_DIR, "bbr-html")
OUT_DIR = os.path.join(BASE_DIR, "scrapeddata", "nba", "players")

# Make sure the output folder exists before writing files
os.makedirs(OUT_DIR, exist_ok=True)

# Regex pattern to match any table id that starts with "per_game"
# This helps because Basketball Reference may use slightly different ids
PER_GAME_ID_PATTERN = re.compile(r"^per_game")  

# Map Basketball Reference team abbreviations to the slug used in site URLs
TEAM_MAP = {
    "ATL": "hawks",
    "BOS": "celtics",
    "BKN": "nets",
    "CHA": "hornets",
    "CHI": "bulls",
    "CLE": "cavaliers",
    "DAL": "mavericks",
    "DEN": "nuggets",
    "DET": "pistons",
    "GSW": "warriors",
    "HOU": "rockets",
    "IND": "pacers",
    "LAC": "clippers",
    "LAL": "lakers",
    "MEM": "grizzlies",
    "MIA": "heat",
    "MIL": "bucks",
    "MIN": "timberwolves",
    "NOP": "pelicans",
    "NYK": "knicks",
    "OKC": "thunder",
    "ORL": "magic",
    "PHI": "76ers",
    "PHX": "suns",
    "POR": "trail-blazers",
    "SAC": "kings",
    "SAS": "spurs",
    "TOR": "raptors",
    "UTA": "jazz",
    "WAS": "wizards"
}

# Convert a player's name into a file slug
# Example: "Jayson Tatum" -> "jayson-tatum"
def slugify(name: str) -> str:
   
   # Remove extra spaces and lowercase everything
    name = name.strip().lower()

    # Replace anything that is not a-z or 0-9 with a dash
    name = re.sub(r"[^a-z0-9]+", "-", name)

     # Collapse repeated dashes and strip dashes from the ends
    name = re.sub(r"-+", "-", name).strip("-")
    return name

# Try to locate the player's per-game stats table in the HTML
# Basketball Reference sometimes hides tables inside HTML comments
def extract_per_game_table_html(soup: BeautifulSoup) -> str:
    
     # First check if the table exists normally in the page
    table = soup.find("table", id=PER_GAME_ID_PATTERN)
    if table:
        return str(table)

     # If not found, Basketball Reference may have placed it inside comments
    for comment in soup.find_all(string=lambda t: isinstance(t, Comment)):
        comment_soup = BeautifulSoup(comment, "lxml")
        table = comment_soup.find("table", id=PER_GAME_ID_PATTERN)
        if table:
            return str(table)

    # If still not found, raise an error so the script reports the failed file
    raise ValueError("Could not find any per-game table (id starting with 'per_game') in page")

# Pull text out of blocks like:
# <p><strong>College:</strong> Duke</p>
# Returns the text after the colon
def extract_label_block_text(soup: BeautifulSoup, label: str):
    
    # Find a <strong> tag whose text contains the requested label
    strong = soup.find("strong", string=lambda s: s and label in s)
    if not strong or not strong.parent:
        return None
    
    # Get the full text of the parent element
    parent_text = strong.parent.get_text(" ", strip=True)

    # Split once at the colon to separate label from value
    parts = parent_text.split(":", 1)
    if len(parts) < 2:
        return None

    # Return the value portion, or None if empty
    value = parts[1].strip()
    return value or None

# Parse the player bio/meta section from the Basketball Reference page
def parse_meta_block(soup: BeautifulSoup) -> dict:
    """
    Extract meta info:
      - position
      - shoots
      - height
      - weight
      - birth date
      - birth place
      - college
      - draft
    """
    meta = {}

    # Get the position line, it also include "Shoots:"
    position_block = extract_label_block_text(soup, "Position:")
    if position_block:
        if "Shoots:" in position_block:
            # Split one line into position and shooting hand
            pos_part, shoots_part = position_block.split("Shoots:", 1)
            meta["position"] = pos_part.strip(" ▪").strip() or None
            meta["shoots"] = shoots_part.strip() or None
        else:
            meta["position"] = position_block

    # Extract college if present
    college = extract_label_block_text(soup, "College:")
    if college:
        meta["college"] = college

    # Extract draft info if present
    draft = extract_label_block_text(soup, "Draft:")
    if draft:
        meta["draft"] = draft

    # Extract birth date text 
    birth_span = soup.find("span", itemprop="birthDate")
    if birth_span:
        meta["birth_date_display"] = birth_span.get_text(strip=True) or None
        meta["birth_date_iso"] = birth_span.get("data-birth") or None

    # Extract birthplace if available
    birth_place_span = soup.find("span", itemprop="birthPlace")
    if birth_place_span:
        meta["birth_place"] = birth_place_span.get_text(" ", strip=True) or None

    # Extract height text exactly as shown on the page
    height_span = soup.find("span", itemprop="height")
    if height_span:
        meta["height"] = height_span.get_text(strip=True) or None

    # Extract weight and convert it to an integer pound value if possible
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

# Replace pandas NaN values with Python None to keep JSON clean
def clean_record_nan(record: dict) -> dict:
    
    cleaned = {}
    for k, v in record.items():
        if isinstance(v, float) and math.isnan(v):
            cleaned[k] = None
        else:
            cleaned[k] = v
    return cleaned

# Find the latest real NBA team abbreviation from the per-game rows
# This skips summary rows like "TOT" or "8 Yrs"
def get_latest_team_abbr(records: list) -> str | None:

    # Walk backward so the first valid team found is the latest one
    for record in reversed(records):
        team = record.get("Team")

        if not isinstance(team, str):
            continue

        team = team.strip()

        if not team:
            continue

        # Skip total rows for players traded during a season
        if team == "TOT":
            continue

        # Only return real NBA abbreviations that exist in TEAM_MAP
        if team in TEAM_MAP:
            return team

    return None

# Parse one saved Basketball Reference HTML file into a player JSON structure
def parse_player_file(html_path: str) -> dict:
    
    # Open the saved HTML file
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Parse the HTML with BeautifulSoup
    soup = BeautifulSoup(html, "lxml")

    # Try to get the player name from the breadcrumb area first
    name_tag = soup.select_one("div.breadcrumbs strong")

    # If not found there, fall back to the main h1 heading
    if not name_tag:
        name_tag = soup.find("h1")

    # If still not found, stop and report an error
    if not name_tag:
        raise ValueError(f"Could not find player name in {html_path}")

    player_name = name_tag.get_text(strip=True)

    # Parse the player's bio/meta info
    meta = parse_meta_block(soup)

    # Extract the per-game stats table HTML
    per_game_html = extract_per_game_table_html(soup)

    # Let pandas parse the HTML table into a DataFrame
    df_list = pd.read_html(per_game_html)

    if not df_list:
        raise ValueError(f"Could not parse per-game table in {html_path}")

    df = df_list[0]

    # Remove the "Career" summary row if it exists
    if "Season" in df.columns:
        df = df[df["Season"] != "Career"]

    # Convert each row to a dictionary
    raw_records = df.to_dict(orient="records")

    # Clean NaN values so JSON output uses None/null instead
    records = [clean_record_nan(r) for r in raw_records]

    # Figure out the player's latest actual team abbreviation
    team_abbr = get_latest_team_abbr(records)

    # Convert team abbreviation into the site folder slug
    team_slug = TEAM_MAP.get(team_abbr, "unknown")

    # Create a clean player slug for URLs and output file names
    player_slug = slugify(player_name)

    # Build the final JSON structure used by the site
    player_data = {
        "player_name": player_name,
        "team": team_abbr,
        "team_slug": team_slug,
        "league": "NBA",
        "slug": f"/nba/{team_slug}/{player_slug}",
        "source_file": os.path.basename(html_path),
        "meta": meta,
        "per_game": records,
    }

    return player_data

# Main driver function
# Finds all saved Basketball Reference HTML files, parses them,
# and writes each player's JSON file into scrapeddata/nba/players
def main():
    # Search all subfolders under bbr-html for files starting with bbr-
    pattern = os.path.join(HTML_DIR, "**", "bbr-*.html")
    html_files = sorted(glob.glob(pattern, recursive=True))

    # Stop early if no files were found
    if not html_files:
        print(f"No HTML files found under {HTML_DIR}")
        return

    print(f"Found {len(html_files)} HTML files under {HTML_DIR}")

    # Parse each player HTML file one by one
    for path in html_files:
        try:
            data = parse_player_file(path)
        except Exception as e:
            # Report file-specific errors then continue with the rest
            print(f"[ERROR] {path}: {e}")
            continue

        # Use the player's name as the output JSON filename
        output_slug = slugify(data["player_name"])
        out_path = os.path.join(OUT_DIR, f"{output_slug}.json")

        # Write the parsed player data to JSON
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)

        print(f"[OK] {data['player_name']} -> {out_path}")

# Run the parser only when this script is executed directly
if __name__ == "__main__":
    main()