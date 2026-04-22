import os
import json
import time
from datetime import datetime

import requests

# Output folder where QB JSON files will be saved
OUTPUT_DIR = "scrapeddata/nfl/players"

# Basic headers to avoid request blocking
HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

# ESPN API endpoint for all NFL teams
NFL_TEAMS_URL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams"

# Used to determine current season range
CURRENT_YEAR = datetime.now().year

# Map full team names to URL slugs used on the site
NFL_TEAM_MAP = {
    "Arizona Cardinals": "cardinals",
    "Atlanta Falcons": "falcons",
    "Baltimore Ravens": "ravens",
    "Buffalo Bills": "bills",
    "Carolina Panthers": "panthers",
    "Chicago Bears": "bears",
    "Cincinnati Bengals": "bengals",
    "Cleveland Browns": "browns",
    "Dallas Cowboys": "cowboys",
    "Denver Broncos": "broncos",
    "Detroit Lions": "lions",
    "Green Bay Packers": "packers",
    "Houston Texans": "texans",
    "Indianapolis Colts": "colts",
    "Jacksonville Jaguars": "jaguars",
    "Kansas City Chiefs": "chiefs",
    "Las Vegas Raiders": "raiders",
    "Los Angeles Chargers": "chargers",
    "Los Angeles Rams": "rams",
    "Miami Dolphins": "dolphins",
    "Minnesota Vikings": "vikings",
    "New England Patriots": "patriots",
    "New Orleans Saints": "saints",
    "New York Giants": "giants",
    "New York Jets": "jets",
    "Philadelphia Eagles": "eagles",
    "Pittsburgh Steelers": "steelers",
    "San Francisco 49ers": "49ers",
    "Seattle Seahawks": "seahawks",
    "Tampa Bay Buccaneers": "buccaneers",
    "Tennessee Titans": "titans",
    "Washington Commanders": "commanders"
}

# Ensure output directory exists
def ensure_output_dir():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

# Convert player name into slug format for filenames and URLs
def slugify(name):
    return (
        name.lower()
        .strip()
        .replace(".", "")
        .replace("'", "")
        .replace(",", "")
        .replace(" ", "-")
    )

# Clean up text by removing extra whitespace
def clean_text(value):
    if value is None:
        return None
    return " ".join(str(value).split()).strip()

# Safe GET request wrapper and raises error if request fails
def safe_get(url, params=None):
    response = requests.get(url, headers=HEADERS, params=params, timeout=20)
    response.raise_for_status()
    return response.json()

# Safe GET that returns None instead of crashing
def safe_get_or_none(url, params=None):
    try:
        return safe_get(url, params=params)
    except Exception:
        return None

# Convert value into integer safely
# Handles strings, floats, and other API formats
def parse_int(value):
    if value is None:
        return None
    if isinstance(value, bool):
        return int(value)
    if isinstance(value, int):
        return value
    if isinstance(value, float):
        return int(value)

    # Clean up string values like "1,234"
    text = str(value).replace(",", "").strip()
    if text == "":
        return None

    try:
        return int(float(text))
    except Exception:
        return None

# Convert value into float safely
def parse_float(value):
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return float(value)

    # Clean up string formatting before conversion
    text = str(value).replace(",", "").strip()
    if text == "":
        return None

    try:
        return float(text)
    except Exception:
        return None

# Format birth info into readable string
# Ex. "May 21, 1996 in Firebaugh, CA"
def format_birth(date_of_birth, birth_place):
    if not date_of_birth and not birth_place:
        return None

    # Try to convert ISO date into readable format
    pretty_date = None
    if date_of_birth:
        try:
            dt = datetime.fromisoformat(date_of_birth.replace("Z", "+00:00"))
            pretty_date = dt.strftime("%B %d, %Y").replace(" 0", " ")
        except Exception:
            # Fallback if formatting fails
            pretty_date = str(date_of_birth)[:10]

    # Extract location pieces if available
    city = birth_place.get("city") if isinstance(birth_place, dict) else None
    state = birth_place.get("state") if isinstance(birth_place, dict) else None
    country = birth_place.get("country") if isinstance(birth_place, dict) else None

    location_parts = [x for x in [city, state] if x]
    location = ", ".join(location_parts)

    # Build final string depending on what data exists
    if pretty_date and location:
        return f"{pretty_date} in {location}"
    if pretty_date and country and not location:
        return f"{pretty_date} in {country}"
    if pretty_date:
        return pretty_date
    if location:
        return location
    return country

# Get all NFL teams from ESPN API
def get_all_teams():
    data = safe_get(NFL_TEAMS_URL)
    teams = []

    # Following ESPN nest of teams inside sports -> leagues -> teams
    for sport in data.get("sports", []):
        for league in sport.get("leagues", []):
            for team_obj in league.get("teams", []):
                team = team_obj.get("team", {})
                if team:
                    teams.append(team)

    return teams

# Get roster for a specific team
def get_team_roster(team_id):
    url = f"https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/{team_id}/roster"
    return safe_get(url)

# Extract only quarterbacks from roster
def extract_qbs_from_roster(roster_data, team_name):
    qbs = []

    # Roster is grouped by position groups, so we loop through each
    for group in roster_data.get("athletes", []):
        for athlete in group.get("items", []):
            position = athlete.get("position", {})

            # Only keep QBs
            if clean_text(position.get("abbreviation")) == "QB":
                athlete["team_display_name"] = team_name
                qbs.append(athlete)

    return qbs

# Get core player data
def get_athlete_core(athlete_id):
    url = f"https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/{athlete_id}"
    return safe_get(url)

# Get player bio info
def get_athlete_bio(athlete_id):
    url = f"https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/{athlete_id}/bio"
    return safe_get_or_none(url)

# Get season stats
def get_season_stats(athlete_id, season_year):
    url = (
        f"https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/"
        f"seasons/{season_year}/types/2/athletes/{athlete_id}/statistics/0"
    )
    return safe_get_or_none(url)

# Get every season game logs from qb
def get_season_gamelog(athlete_id, season_year):

    # Try multiple endpoints because ESPN can be inconsistent
    candidate_urls = [
        f"https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/{season_year}/athletes/{athlete_id}/eventlog",
        f"https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/{athlete_id}/gamelog?season={season_year}",
        f"https://site.api.espn.com/apis/site/v2/sports/football/nfl/athletes/{athlete_id}/gamelog?season={season_year}",
    ]

    for url in candidate_urls:
        data = safe_get_or_none(url)
        if data:
            return data

    return None

# Determine all possible career years
def get_player_career_years(core_data):
    years = set()

    experience = core_data.get("experience", {})
    rookie_year = experience.get("year") if isinstance(experience, dict) else None

    # If rookie year is known, use that range
    if rookie_year:
        for year in range(int(rookie_year), CURRENT_YEAR + 1):
            years.add(year)
    else:
        # Fallback otherwise assume a wide range
        for year in range(2000, CURRENT_YEAR + 1):
            years.add(year)

    return [y for y in sorted(years) if y <= CURRENT_YEAR]

# Extract stat value from ESPN stat object
def parse_stat_value(stat):
    if not isinstance(stat, dict):
        return None

    # Prefer displayValue, fallback to raw value
    for key in ["displayValue", "value"]:
        if key in stat and stat.get(key) not in (None, ""):
            return stat.get(key)

    return None

# Map our stat column names to ESPN API keys
def stat_aliases():
    return {
        "G": ["gamesPlayed", "games"],
        "GS": ["gamesStarted", "started"],
        "Tm": ["teamAbbreviation", "team"],
        "Cmp": ["completions", "CMP"],
        "Att": ["passingAttempts", "attempts", "ATT"],
        "Cmp%": ["completionPct", "completionPercentage", "PCT"],
        "Yds": ["passingYards", "YDS"],
        "TD": ["passingTouchdowns", "TD"],
        "Int": ["interceptions", "INT"],
        "Y/A": ["yardsPerPassAttempt", "YPA"],
        "AY/A": ["adjustedYardsPerPassAttempt", "AYPA"],
        "Y/G": ["passingYardsPerGame", "YPG"],
        "Rate": ["passingRating", "passerRating", "QBRating", "RTG"],
        "QBR": ["totalQBR", "QBR"],
        "Sk": ["sacks", "SACKS"],
        "QBrec": ["record", "QBrec"],
        "4QC": ["fourthQuarterComebacks", "4QC"],
        "GWD": ["gameWinningDrives", "GWD"],
    }

# Find first valid stat value from a list of possible keys
def find_stat(indexed, keys):
    for key in keys:
        if key in indexed and indexed[key] not in (None, "", "null"):
            return indexed[key]
    return None

# Check if a stat category relates to passing stats
def is_passing_category(category):
    name = str(category.get("name", "")).lower()
    display_name = str(category.get("displayName", "")).lower()
    text = f"{name} {display_name}"

    passing_keywords = [
        "passing",
        "pass",
        "quarterback",
        "qb"
    ]

    return any(keyword in text for keyword in passing_keywords)

# Flatten ESPN stats response into a simple dictionary
def index_stats_block(stats_data):
    indexed = {}

    if not isinstance(stats_data, dict):
        return indexed

    # Helper to extract stats from a category
    def add_stats_from_category(category):
        if not is_passing_category(category):
            return

        for stat in category.get("stats", []):
            name = stat.get("name")
            value = parse_stat_value(stat)
            if name:
                indexed[name] = value

    # Handle nested structures ESPN likes to use
    splits = stats_data.get("splits")
    if isinstance(splits, dict):
        for category in splits.get("categories", []):
            add_stats_from_category(category)

    for category in stats_data.get("categories", []):
        add_stats_from_category(category)

    for stat in stats_data.get("statistics", []):
        name = stat.get("name")
        value = parse_stat_value(stat)
        if name:
            indexed[name] = value

    for stat in stats_data.get("stats", []):
        name = stat.get("name")
        value = parse_stat_value(stat)
        if name:
            indexed[name] = value

    return indexed

# Build a season row from game logs if stats endpoint is incomplete
def aggregate_gamelog_to_season(gamelog_data, season_year, fallback_team_abbr=None):
    if not gamelog_data:
        return None

    # Initialize row with defaults
    row = {
        "Year": season_year,
        "G": 0,
        "GS": None,
        "Tm": fallback_team_abbr,
        "Cmp": 0,
        "Att": 0,
        "Cmp%": None,
        "Yds": 0,
        "TD": 0,
        "Int": None,
        "Y/A": None,
        "AY/A": None,
        "Y/G": None,
        "Rate": None,
        "QBR": None,
        "Sk": None,
        "QBrec": None,
        "4QC": None,
        "GWD": None
    }

    found_any = False
    found_int = False
    found_sk = False

    # Loop through each game event
    events = gamelog_data.get("events", [])
    for event in events:
        stat_groups = event.get("statistics", [])

        # Some events nest stats differently
        if not stat_groups:
            competitions = event.get("competitions", [])
            for comp in competitions:
                if comp.get("statistics"):
                    stat_groups.extend(comp.get("statistics", []))

        event_stats = {}

        # Extract passing stats only
        for group in stat_groups:
            if not is_passing_category(group):
                continue

            for stat in group.get("stats", []):
                name = stat.get("name")
                value = stat.get("value") if "value" in stat else stat.get("displayValue")
                if name:
                    event_stats[name] = value

        if not event_stats:
            continue

        found_any = True

        # Aggregate totals across games
        row["G"] += 1
        row["Cmp"] += parse_int(event_stats.get("completions")) or 0
        row["Att"] += parse_int(event_stats.get("passingAttempts")) or 0
        row["Yds"] += parse_int(event_stats.get("passingYards")) or 0
        row["TD"] += parse_int(event_stats.get("passingTouchdowns")) or 0

        # Track Intereceptions
        if event_stats.get("interceptions") is not None:
            if row["Int"] is None:
                row["Int"] = 0
            row["Int"] += parse_int(event_stats.get("interceptions")) or 0
            found_int = True

        # Track sacks
        if event_stats.get("sacks") is not None:
            if row["Sk"] is None:
                row["Sk"] = 0
            row["Sk"] += parse_int(event_stats.get("sacks")) or 0
            found_sk = True

    # If no valid data found return nothing
    if not found_any:
        return None

    # Clean up missing values
    if not found_int:
        row["Int"] = None

    if not found_sk:
        row["Sk"] = None

    # Calculate stats
    if row["Att"] and row["Att"] > 0:
        row["Cmp%"] = round((row["Cmp"] / row["Att"]) * 100, 1)
        row["Y/A"] = round(row["Yds"] / row["Att"], 1)

    if row["G"] and row["G"] > 0:
        row["Y/G"] = round(row["Yds"] / row["G"], 1)

    return row

# Build normalized season row from stats API
def normalize_season_row_from_stats(stats_data, season_year, fallback_team_abbr=None):
    indexed = index_stats_block(stats_data)
    if not indexed:
        return None

    aliases = stat_aliases()

    # Find raw interception and sack values because it could be overwritten by defensive stats
    int_raw = find_stat(indexed, aliases["Int"])
    sk_raw = find_stat(indexed, aliases["Sk"])

    # Build the main stat row
    row = {
        "Year": season_year,
        "G": parse_int(find_stat(indexed, aliases["G"])),
        "GS": parse_int(find_stat(indexed, aliases["GS"])),
        "Tm": clean_text(find_stat(indexed, aliases["Tm"]) or fallback_team_abbr),
        "Cmp": parse_int(find_stat(indexed, aliases["Cmp"])),
        "Att": parse_int(find_stat(indexed, aliases["Att"])),
        "Cmp%": parse_float(find_stat(indexed, aliases["Cmp%"])),
        "Yds": parse_int(find_stat(indexed, aliases["Yds"])),
        "TD": parse_int(find_stat(indexed, aliases["TD"])),
        "Int": parse_int(int_raw) if int_raw is not None else None,
        "Y/A": parse_float(find_stat(indexed, aliases["Y/A"])),
        "AY/A": parse_float(find_stat(indexed, aliases["AY/A"])),
        "Y/G": parse_float(find_stat(indexed, aliases["Y/G"])),
        "Rate": parse_float(find_stat(indexed, aliases["Rate"])),
        "QBR": parse_float(find_stat(indexed, aliases["QBR"])),
        "Sk": parse_int(sk_raw) if sk_raw is not None else None,
        "QBrec": clean_text(find_stat(indexed, aliases["QBrec"])),
        "4QC": parse_int(find_stat(indexed, aliases["4QC"])),
        "GWD": parse_int(find_stat(indexed, aliases["GWD"])),
    }


    # Fill in missing stats if needed
    if row["Cmp%"] is None and row["Cmp"] is not None and row["Att"]:
        row["Cmp%"] = round((row["Cmp"] / row["Att"]) * 100, 1)

    if row["Y/A"] is None and row["Yds"] is not None and row["Att"]:
        row["Y/A"] = round(row["Yds"] / row["Att"], 1)

    if row["Y/G"] is None and row["Yds"] is not None and row["G"]:
        row["Y/G"] = round(row["Yds"] / row["G"], 1)

    meaningful_keys = ["Cmp", "Att", "Yds", "TD", "Int", "Rate", "G"]
    if not any(row.get(key) is not None for key in meaningful_keys):
        return None

    return row

# Pull the team abbreviation from the roster athlete object
# Tries abbreviation first, then falls back to short or full display name
def get_team_abbr_from_roster_athlete(roster_athlete):
    team_obj = roster_athlete.get("team", {}) or {}
    return clean_text(
        team_obj.get("abbreviation")
        or team_obj.get("shortDisplayName")
        or team_obj.get("displayName")
    )

# Build the player's meta dictionary by combining data
# from the roster endpoint, core athlete endpoint, and bio endpoint
def parse_meta_from_sources(roster_athlete, core_data, bio_data):

    # Pull draft and birth place data from the core response if available
    draft = core_data.get("draft", {}) if isinstance(core_data, dict) else {}
    birth_place = core_data.get("birthPlace", {}) if isinstance(core_data, dict) else {}

    # Draft pick may sometimes be a nested object instead of a plain value
    draft_pick = draft.get("pick")
    if isinstance(draft_pick, dict):
        draft_pick = (
            draft_pick.get("number")
            or draft_pick.get("overall")
            or draft_pick.get("id")
        )

    # If the main core data did not provide the pick, try the bio endpoint
    if draft_pick is None and isinstance(bio_data, dict):
        bio_draft = bio_data.get("draft")
        if isinstance(bio_draft, dict):
            draft_pick = bio_draft.get("pick")

    # Build a readable draft string piece by piece
    draft_parts = []
    if draft.get("year"):
        draft_parts.append(f"Year {draft['year']}")
    if draft.get("round"):
        draft_parts.append(f"Round {draft['round']}")
    if draft_pick:
        draft_parts.append(f"Pick {draft_pick}")

    # Try to find college name from the core data first
    college_name = None
    college = core_data.get("college")
    if isinstance(college, dict):
        college_name = college.get("name")

    # If not found in core data, fall back to bio data
    if not college_name and isinstance(bio_data, dict):
        college_name = bio_data.get("college")

    # Pull team abbreviation from the roster object
    team_abbr = get_team_abbr_from_roster_athlete(roster_athlete)

    # Return all cleaned meta fields in one dictionary
    return {
        "position": clean_text((roster_athlete.get("position") or {}).get("abbreviation")),
        "team": clean_text(roster_athlete.get("team_display_name")),
        "height": clean_text(
            roster_athlete.get("displayHeight")
            or core_data.get("displayHeight")
            or core_data.get("height")
        ),
        "weight": clean_text(
            roster_athlete.get("displayWeight")
            or core_data.get("displayWeight")
            or core_data.get("weight")
        ),
        "born": clean_text(format_birth(core_data.get("dateOfBirth"), birth_place)),
        "college": clean_text(college_name),
        "draft": clean_text(", ".join(draft_parts) if draft_parts else None),
        "espn_id": roster_athlete.get("id"),
        "headshot": (roster_athlete.get("headshot") or {}).get("href")
        or (core_data.get("headshot") or {}).get("href"),
        "team_abbreviation": team_abbr
    }

# Build yearly passing rows for a quarterback's career
# Uses season stats first, then falls back to gamelog data when needed
def get_career_passing_rows(athlete_id, roster_athlete, core_data):
    
    # Determine which years to check for this player
    years = get_player_career_years(core_data)

    # Get the player's team abbreviation from roster data
    team_abbr = get_team_abbr_from_roster_athlete(roster_athlete)
    rows = []

    # Loop through each possible career year
    for year in years:

        # Try to get season-level passing stats first
        stats_data = get_season_stats(athlete_id, year)
        row = normalize_season_row_from_stats(
            stats_data,
            year,
            fallback_team_abbr=team_abbr
        )

        # If the season row is missing, or interceptions/sacks are missing,
        # try rebuilding those values from the gamelog endpoint
        gamelog_row = None
        if row is None or row.get("Int") is None or row.get("Sk") is None:
            gamelog_data = get_season_gamelog(athlete_id, year)
            gamelog_row = aggregate_gamelog_to_season(
                gamelog_data,
                year,
                fallback_team_abbr=team_abbr
            )

        # If no season row was built from stats, use the gamelog row instead
        if row is None:
            row = gamelog_row

        # If both exist, use the gamelog only to fill missing fields
        elif gamelog_row is not None:
            if row.get("Int") is None:
                row["Int"] = gamelog_row.get("Int")
            if row.get("Sk") is None:
                row["Sk"] = gamelog_row.get("Sk")
            if row.get("Tm") is None:
                row["Tm"] = gamelog_row.get("Tm")

        # Only keep rows that actually produced data
        if row:
            rows.append(row)

        # Small delay to avoid hitting the API too aggressively
        time.sleep(0.15)

    # Sort final rows by year from oldest to newest
    rows.sort(key=lambda x: x.get("Year", 0))
    return rows

# Build the final JSON structure for a player using all collected data
def build_player_json(roster_athlete, core_data, bio_data, passing_rows):

    # Try to get the player's name from multiple possible sources
    player_name = clean_text(
        roster_athlete.get("displayName")
        or core_data.get("displayName")
        or core_data.get("fullName")
    )

    # Build the meta dictionary using helper function
    meta = parse_meta_from_sources(roster_athlete, core_data, bio_data)

    # Create URL and file-friendly slugs
    player_slug = slugify(player_name)
    team_name = meta.get("team")
    team_slug = NFL_TEAM_MAP.get(team_name, "unknown")

    # Return the full player object used by the site
    return {
        "player_name": player_name,
        "team": team_name,
        "team_slug": team_slug,
        "league": "NFL",
        "slug": f"/nfl/{team_slug}/{player_slug}",
        "meta": meta,
        "passing": passing_rows
    }

# Save player JSON file
def save_player_json(player_data):
     
    # Build filename using the player's slug
    filename = f"{slugify(player_data['player_name'])}.json"
    output_path = os.path.join(OUTPUT_DIR, filename)

    # Write JSON file with indentation for readability
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(player_data, f, indent=2)

    # Print confirmation so we know it worked
    print(f"Saved: {output_path}")

# Main driver function
def main():

    # Make sure output directory exists
    ensure_output_dir()

    # Get all NFL teams from ESPN API
    teams = get_all_teams()
    print(f"Found {len(teams)} teams")

    # Loop through each team
    for team in teams:
        team_id = team.get("id")
        team_name = team.get("displayName")
        print(f"\nTeam: {team_name}")

        try:
            # Get roster data and filter for quarterbacks only
            roster_data = get_team_roster(team_id)
            qbs = extract_qbs_from_roster(roster_data, team_name)
        except Exception as e:

            # Skip team if roster request fails
            print(f"Failed roster for {team_name}: {e}")
            continue

        print(f"Found {len(qbs)} QB(s)")

        # Loop through each QB on the team
        for qb in qbs:
            athlete_id = qb.get("id")
            athlete_name = qb.get("displayName")
            print(f"  Scraping QB: {athlete_name}")

            try:
                # Get all data sources for the player
                core_data = get_athlete_core(athlete_id)
                bio_data = get_athlete_bio(athlete_id)

                # Build career passing stats (year-by-year)
                passing_rows = get_career_passing_rows(athlete_id, qb, core_data)


                # Combine everything into final JSON structure
                player_data = build_player_json(
                    roster_athlete=qb,
                    core_data=core_data,
                    bio_data=bio_data,
                    passing_rows=passing_rows
                )

                # Save the player JSON file
                save_player_json(player_data)

                # Small delay to avoid API rate limiting
                time.sleep(0.25)

            except Exception as e:
                print(f"  Failed on {athlete_name}: {e}")

# Run the parser only when this script is executed directly
if __name__ == "__main__":
    main()