import json

# load a QB player JSON file
def load_player(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

# testing a single qb
def test_qb_name():
     # verify player name is correctly extracted
    player = load_player('scrapeddata/nfl/players/josh-allen.json')
    actual = player["player_name"]
    print("\nActual Player Name:", actual)
    assert actual == "Josh Allen"

def test_qb_meta_exists():
    # verify metadata exists in QB JSON
    player = load_player('scrapeddata/nfl/players/josh-allen.json')
    print("Actual Meta:", player.get("meta"))
    assert "meta" in player

def test_passing_stats_exist():
    # verify passing stats array exists and is not empty
    player = load_player('scrapeddata/nfl/players/josh-allen.json')
    passing = player.get("passing", [])
    print("Passing entries:", len(passing))
    assert len(passing) > 0

def test_passing_yards_exists():
    # verify a key stat passing yards exists
    player = load_player('scrapeddata/nfl/players/josh-allen.json')
    passing = player.get("passing", [])
    yds = passing[0].get("Yds") if passing else None
    print("Actual Passing Yards:", yds)
    assert yds is not None

# multiple qb test
def test_multiple_qbs():
    # test multiple QB JSON files for consistency
    players = [
        ("Justin Herbert", "scrapeddata/nfl/players/justin-herbert.json"),
        ("Patrick Mahomes", "scrapeddata/nfl/players/patrick-mahomes.json")
    ]

    for expected_name, path in players:
        player = load_player(path)
        actual_name = player.get("player_name")
        passing = player.get("passing", [])
        yds = passing[0].get("Yds") if passing else None

        # print for test plan documentation
        print("\n--- TEST OUTPUT ---")
        print(f"Expected Name: {expected_name}")
        print(f"Actual Name: {actual_name}")
        print(f"Passing Yards: {yds}")
        print("-------------------")

        # assertions to validate correctness
        assert actual_name == expected_name
        assert len(passing) > 0
        assert yds is not None