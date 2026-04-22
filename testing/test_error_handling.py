import json

# Load a player JSON file
def load_player(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)
    
# Safely retrieve a value from a record
# If the value is missing, None, or empty, return a default ("N/A")
def safe_value(record, key, default="N/A"):
    value = record.get(key, default)
    return default if value in [None, ""] else value

# QB missing value test
def test_missing_values_error_handling_qb():
    # Load QB player data
    player = load_player('scrapeddata/nfl/players/josh-allen.json')

    # Access passing stats 
    passing = player.get("passing", [])

    # Use first season if available, otherwise fallback to empty dict
    first_season = passing[0] if passing else {}

    # Safely retrieve values that may be missing
    interceptions = safe_value(first_season, "Int")
    sacks = safe_value(first_season, "Sk")
    fourth_q_comebacks = safe_value(first_season, "4QC")

    # Print outputs for test plan documentation
    print("\n--- QB MISSING VALUE TEST ---")
    print("Interceptions:", interceptions)
    print("Sacks:", sacks)
    print("4QC:", fourth_q_comebacks)
    print("--------------------------------")

    # Assertions to ensure no crashes and values are not None
    assert interceptions is not None
    assert sacks is not None
    assert fourth_q_comebacks is not None

# NBA missing value test
def test_missing_values_error_handling_nba():
    # Load NBA player data
    player = load_player('scrapeddata/nba/players/jayson-tatum.json')

    # Access per_game stats
    stats = player.get("per_game", [])

    # Use first season if available, otherwise fallback to empty dict
    first = stats[0] if stats else {}

    # Safely retrieve values that may be missing
    assists = safe_value(first, "AST")
    blocks = safe_value(first, "BLK")

    # Print outputs for test plan documentation
    print("\n--- NBA MISSING VALUE TEST ---")
    print("AST:", assists)
    print("BLK:", blocks)
    print("--------------------------------")

    # Assertions to ensure no crashes and values are not None
    assert assists is not None
    assert blocks is not None

# MLB missing value test
def test_missing_values_error_handling_mlb():
    # Load MLB player data
    player = load_player('scrapeddata/mlb/pitchers/shohei-ohtani.json')

    # Access pitching stats
    pitching = player.get("pitching", [])
    first = pitching[0] if pitching else {}

    # Safely retrieve pitching stats
    era = safe_value(first, "ERA")
    strikeouts = safe_value(first, "SO")

    # Print outputs for test plan documentation
    print("\n--- MLB MISSING VALUE TEST ---")
    print("ERA:", era)
    print("SO:", strikeouts)
    print("--------------------------------")

    # Assertions to ensure safe handling of missing values
    assert era is not None
    assert strikeouts is not None