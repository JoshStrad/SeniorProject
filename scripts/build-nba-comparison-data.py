import json
import os
from pathlib import Path


# creating separte JSON of players for stats-comparison page


INPUT_DIR = Path("/home/joshstrad/SeniorProject/scrapeddata/nba/players")
OUTPUT_FILE = Path("/home/joshstrad/SeniorProject/scrapeddata/nba-comparison-data.json")

def clean_row(row):
    return {
        "season": row.get("Season"),
        "age": row.get("Age"),
        "team": row.get("Team"),
        "pos": row.get("Pos"),
        "g": row.get("G"),
        "gs": row.get("GS"),
        "mp": row.get("MP"),
        "fg": row.get("FG"),
        "fga": row.get("FGA"),
        "fg_pct": row.get("FG%"),
        "three_p": row.get("3P"),
        "three_pa": row.get("3PA"),
        "three_p_pct": row.get("3P%"),
        "two_p": row.get("2P"),
        "two_pa": row.get("2PA"),
        "two_p_pct": row.get("2P%"),
        "efg_pct": row.get("eFG%"),
        "ft": row.get("FT"),
        "fta": row.get("FTA"),
        "ft_pct": row.get("FT%"),
        "orb": row.get("ORB"),
        "drb": row.get("DRB"),
        "trb": row.get("TRB"),
        "ast": row.get("AST"),
        "stl": row.get("STL"),
        "blk": row.get("BLK"),
        "tov": row.get("TOV"),
        "pf": row.get("PF"),
        "pts": row.get("PTS"),
        "awards": row.get("Awards"),
    }

players = []

for file_path in sorted(INPUT_DIR.glob("*.json")):
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    players.append({
        "player_name": data.get("player_name"),
        "team": data.get("team"),
        "team_slug": data.get("team_slug"),
        "league": data.get("league"),
        "slug": data.get("slug"),
        "source_file": data.get("source_file"),
        "meta": {
            "position": data.get("meta", {}).get("position"),
            "shoots": data.get("meta", {}).get("shoots"),
            "draft": data.get("meta", {}).get("draft"),
        },
        "per_game": [clean_row(row) for row in data.get("per_game", [])],
    })

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(players, f, indent=2)

print(f"Wrote {len(players)} players to {OUTPUT_FILE}")