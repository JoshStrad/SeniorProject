import json
from pathlib import Path

# creating separte JSON of players for stats-comparison page


INPUT_DIR = Path("/home/joshstrad/SeniorProject/scrapeddata/mlb/pitchers")
OUTPUT_FILE = Path("/home/joshstrad/SeniorProject/scrapeddata/mlb-pitcher-comparison-data.json")

def clean_row(row):
    return {
        "season": row.get("Season"),
        "wins": row.get("W"),
        "losses": row.get("L"),
        "era": row.get("ERA"),
        "ip": row.get("IP"),
        "so": row.get("SO"),
        "bb": row.get("BB"),
        "whip": row.get("WHIP"),
        "fip": row.get("FIP"),
        "era_plus": row.get("ERA+"),
        "war": row.get("WAR"),
        "h9": row.get("H9"),
        "hr9": row.get("HR9"),
        "bb9": row.get("BB9"),
        "so9": row.get("SO9"),
        "so_per_bb": row.get("SO/BB"),
    }

players = []

for file_path in sorted(INPUT_DIR.glob("*.json")):
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    cleaned_rows = [
        clean_row(row)
        for row in data.get("pitching", [])
        if isinstance(row, dict)
    ]

    players.append({
        "player_name": data.get("player_name"),
        "team": data.get("team"),
        "league": data.get("league"),
        "seasons": cleaned_rows,
    })

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(players, f, indent=2)

print(f"Wrote {len(players)} pitchers")