import json
from pathlib import Path

# creating separte JSON of players for stats-comparison page


INPUT_DIR = Path("/home/joshstrad/SeniorProject/scrapeddata/nfl/players")
OUTPUT_FILE = Path("/home/joshstrad/SeniorProject/scrapeddata/nfl-qb-comparison-data.json")

def clean_row(row):
    return {
        "season": row.get("Year"),
        "cmp": row.get("Cmp"),
        "att": row.get("Att"),
        "cmp_pct": row.get("Cmp%"),
        "pass_yds": row.get("Yds"),
        "pass_td": row.get("TD"),
        "pass_int": row.get("Int"),
        "yards_per_attempt": row.get("Y/A"),
        "passer_rating": row.get("Rate"),
        "qbr": row.get("QBR"),
        "sacks": row.get("Sk"),
    }

players = []

for file_path in sorted(INPUT_DIR.glob("*.json")):
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    cleaned_rows = [
        clean_row(row)
        for row in data.get("passing", [])
        if isinstance(row, dict)
    ]

    players.append({
        "player_name": data.get("player_name"),
        "team": data.get("team"),
        "league": data.get("league"),
        "headshot": data.get("meta", {}).get("headshot"),
        "meta": {
            "position": data.get("meta", {}).get("position"),
        },
        "seasons": cleaned_rows,
    })

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(players, f, indent=2)

print(f"Wrote {len(players)} QB players")