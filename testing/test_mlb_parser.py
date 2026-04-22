import json


# same unit testing proccess as test_nfl_parser.py and test_nba_parser.py


def load_player(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def test_pitcher_name():
    player = load_player('scrapeddata/mlb/pitchers/shohei-ohtani.json')
    actual = player["player_name"]
    print("\nActual Player Name:", actual)
    assert actual == "Shohei Ohtani"

def test_pitcher_meta_exists():
    player = load_player('scrapeddata/mlb/pitchers/shohei-ohtani.json')
    print("Actual Meta:", player.get("meta"))
    assert "meta" in player

def test_pitching_stats_exist():
    player = load_player('scrapeddata/mlb/pitchers/shohei-ohtani.json')
    pitching = player.get("pitching", [])
    print("Pitching entries:", len(pitching))
    assert len(pitching) > 0

def test_era_exists():
    player = load_player('scrapeddata/mlb/pitchers/shohei-ohtani.json')
    pitching = player.get("pitching", [])
    era = pitching[0].get("ERA") if pitching else None
    print("Actual ERA:", era)
    assert era is not None

def test_multiple_pitchers():
    players = [
        ("Zac Gallen", "scrapeddata/mlb/pitchers/zac-gallen.json"),
        ("Chase Burns", "scrapeddata/mlb/pitchers/chase-burns.json")
    ]

    for expected_name, path in players:
        player = load_player(path)
        actual_name = player.get("player_name")
        pitching = player.get("pitching", [])
        era = pitching[0].get("ERA") if pitching else None

        print("\n--- TEST OUTPUT ---")
        print(f"Expected Name: {expected_name}")
        print(f"Actual Name: {actual_name}")
        print(f"ERA: {era}")
        print("-------------------")

        assert actual_name == expected_name
        assert len(pitching) > 0
        assert era is not None