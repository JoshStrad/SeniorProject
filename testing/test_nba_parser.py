import json

# same concept as test_nfl_parser.py
def load_player(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def test_player_name():
    player = load_player('scrapeddata/nba/players/jayson-tatum.json')
    actual = player["player_name"]
    print("\nActual Player Name:", actual)
    assert actual == "Jayson Tatum"

def test_player_name_correct():
    player = load_player('scrapeddata/nba/players/jayson-tatum.json')
    assert player["player_name"] == "Jayson Tatum"

def test_meta_exists():
    player = load_player('scrapeddata/nba/players/jayson-tatum.json')
    assert "meta" in player

def test_stats():
    player = load_player('scrapeddata/nba/players/jayson-tatum.json')
    pts = player["per_game"][0].get("PTS", None)
    print("Actual PTS:", pts)
    assert pts is not None

def test_multiple_players():
    players = [
        ("Kevin Durant", "scrapeddata/nba/players/kevin-durant.json"),
        ("Stephen Curry", "scrapeddata/nba/players/stephen-curry.json")
    ]

    for expected_name, path in players:
        player = load_player(path)
        actual_name = player.get("player_name")
        pts = player.get("per_game", [{}])[0].get("PTS")

        print("\n--- TEST OUTPUT ---")
        print(f"Expected Name: {expected_name}")
        print(f"Actual Name: {actual_name}")
        print(f"PTS: {pts}")
        print("-------------------")

        assert actual_name == expected_name
        assert pts is not None