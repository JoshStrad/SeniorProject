import React, { useMemo, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './ranking-quiz.css';


const STORAGE_KEY = "gws_rankings_quiz_v1";

const CATEGORIES = [
  { key: "NFL_QB", label: "NFL Quarterbacks", short: "QB" },
  { key: "NBA", label: "NBA Players", short: "NBA" },
  { key: "MLB_SP", label: "MLB Starting Pitchers", short: "SP" },
];

const DATA = {

NFL_QB: [
  { id: "patrick-mahomes", name: "Patrick Mahomes", team: "KC", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png&w=350&h=254", elo: 1550 },
  { id: "josh-allen", name: "Josh Allen", team: "BUF", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png&w=350&h=254", elo: 1540 },
  { id: "joe-burrow", name: "Joe Burrow", team: "CIN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png&w=350&h=254", elo: 1530 },
  { id: "lamar-jackson", name: "Lamar Jackson", team: "BAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3916387.png&w=350&h=254", elo: 1530 },
  { id: "justin-herbert", name: "Justin Herbert", team: "LAC", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038941.png&w=350&h=254", elo: 1520 },
  { id: "trevor-lawrence", name: "Trevor Lawrence", team: "JAX", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360310.png&w=350&h=254", elo: 1515 },
  { id: "cj-stroud", name: "C.J. Stroud", team: "HOU", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432577.png&w=350&h=254", elo: 1510 },
  { id: "aaron-rodgers", name: "Aaron Rodgers", team: "PIT", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png&w=350&h=254", elo: 1505 },
  { id: "dak-prescott", name: "Dak Prescott", team: "DAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2577417.png&w=350&h=254", elo: 1500 },
  { id: "jalen-hurts", name: "Jalen Hurts", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4040715.png&w=350&h=254", elo: 1500 },
  { id: "kirk-cousins", name: "Kirk Cousins", team: "LV", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14880.png&w=350&h=254", elo: 1495 },
  { id: "tua-tagovailoa", name: "Tua Tagovailoa", team: "ATL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241479.png&w=350&h=254", elo: 1490 },
  { id: "baker-mayfield", name: "Baker Mayfield", team: "TB", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3052587.png&w=350&h=254", elo: 1485 },
  { id: "matthew-stafford", name: "Matthew Stafford", team: "LAR", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12483.png&w=350&h=254", elo: 1485 },
  { id: "jordan-love", name: "Jordan Love", team: "GB", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png&w=350&h=254", elo: 1480 },
  { id: "brock-purdy", name: "Brock Purdy", team: "SF", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361741.png&w=350&h=254", elo: 1480 },
  { id: "jayden-daniels", name: "Jayden Daniels", team: "WAS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426348.png&w=350&h=254", elo: 1475 },
  { id: "caleb-williams", name: "Caleb Williams", team: "CHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431611.png&w=350&h=254", elo: 1470 },
  { id: "daniel-jones", name: "Daniel Jones", team: "IND", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917792.png&w=350&h=254", elo: 1465 },
  { id: "bo-nix", name: "Bo Nix", team: "DEN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426338.png&w=350&h=254", elo: 1460 },
  { id: "geno-smith", name: "Geno Smith", team: "LV", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15864.png&w=350&h=254", elo: 1460 },
  { id: "cam-ward", name: "Cam Ward", team: "TEN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4688380.png&w=350&h=254", elo: 1455 },
  { id: "spencer-rattler", name: "Spencer Rattler", team: "NO", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426339.png&w=350&h=254", elo: 1450 },
  { id: "drake-maye", name: "Drake Maye", team: "NE", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431452.png&w=350&h=254", elo: 1450 },
  { id: "sam-darnold", name: "Sam Darnold", team: "SEA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3912547.png&w=350&h=254", elo: 1445 },
  { id: "jj-mccarthy", name: "J.J. McCarthy", team: "MIN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4433970.png&w=350&h=254", elo: 1445 },
  { id: "jared-goff", name: "Jared Goff", team: "DET", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3046779.png&w=350&h=254", elo: 1440 },
  { id: "jaxson-dart", name: "Jaxson Dart", team: "NYG", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4689114.png&w=350&h=254", elo: 1435 },
  { id: "bryce-young", name: "Bryce Young", team: "CAR", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685720.png&w=350&h=254", elo: 1430 },
  { id: "dillon-gabriel", name: "Dillon Gabriel", team: "CLE", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4427238.png&w=350&h=254", elo: 1430 },
  ],
  NBA: [
  { id: "nikola-jokic", name: "Nikola Jokic", team: "DEN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png&w=350&h=254", elo: 1600 },
  { id: "luka-doncic", name: "Luka Doncic", team: "DAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254", elo: 1590 },
  { id: "giannis-antetokounmpo", name: "Giannis Antetokounmpo", team: "MIL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&w=350&h=254", elo: 1580 },
  { id: "shai-gilgeous-alexander", name: "Shai Gilgeous-Alexander", team: "OKC", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png&w=350&h=254", elo: 1575 },
  { id: "jayson-tatum", name: "Jayson Tatum", team: "BOS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254", elo: 1570 },
  { id: "victor-wembanyama", name: "Victor Wembanyama", team: "SAS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5104157.png&w=350&h=254", elo: 1560 },
  { id: "cade-cunningham", name: "Cade Cunningham", team: "DET", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432166.png&w=350&h=254", elo: 1550 },
  { id: "joel-embiid", name: "Joel Embiid", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254", elo: 1545 },
  { id: "anthony-edwards", name: "Anthony Edwards", team: "MIN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4594268.png&w=350&h=254", elo: 1540 },
  { id: "devin-booker", name: "Devin Booker", team: "PHX", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136193.png&w=350&h=254", elo: 1535 },
  { id: "jalen-brunson", name: "Jalen Brunson", team: "NYK", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934672.png&w=350&h=254", elo: 1530 },
  { id: "stephen-curry", name: "Stephen Curry", team: "GSW", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254", elo: 1525 },
  { id: "kevin-durant", name: "Kevin Durant", team: "PHX", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254", elo: 1520 },
  { id: "lebron-james", name: "LeBron James", team: "LAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254", elo: 1515 },
  { id: "donovan-mitchell", name: "Donovan Mitchell", team: "CLE", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3908809.png&w=350&h=254", elo: 1510 },
  { id: "tyrese-maxey", name: "Tyrese Maxey", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431678.png&w=350&h=254", elo: 1505 },
  { id: "anthony-davis", name: "Anthony Davis", team: "WSH", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254", elo: 1500 },
  { id: "jaylen-brown", name: "Jaylen Brown", team: "BOS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254", elo: 1495 },
  { id: "evan-mobley", name: "Evan Mobley", team: "CLE", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432158.png&w=350&h=254", elo: 1490 },
  { id: "franz-wagner", name: "Franz Wagner", team: "ORL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4566434.png&w=350&h=254", elo: 1485 },
  { id: "paolo-banchero", name: "Paolo Banchero", team: "ORL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432573.png&w=350&h=254", elo: 1480 },
  { id: "austin-reaves", name: "Austin Reaves", team: "LAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066457.png&w=350&h=254", elo: 1475 },
  { id: "jimmy-butler", name: "Jimmy Butler", team: "MIA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254", elo: 1470 },
  { id: "trae-young", name: "Trae Young", team: "ATL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png&w=350&h=254", elo: 1465 },
  { id: "lamelo-ball", name: "LaMelo Ball", team: "CHA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432816.png&w=350&h=254", elo: 1460 },
  { id: "deaaron-fox", name: "De'Aaron Fox", team: "SAC", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066259.png&w=350&h=254", elo: 1455 },
],

  MLB_SP: [
  { id: "gerrit-cole", name: "Gerrit Cole", team: "NYY", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32081.png&w=350&h=254", elo: 1580 },
  { id: "spencer-strider", name: "Spencer Strider", team: "ATL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4307825.png&w=350&h=254", elo: 1560 },
  { id: "zac-gallen", name: "Zac Gallen", team: "ARI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39910.png&w=350&h=254", elo: 1530 },
  { id: "blake-snell", name: "Blake Snell", team: "SF", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33748.png&w=350&h=254", elo: 1510 },
  { id: "tarik-skubal", name: "Tarik Skubal", team: "DET", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42409.png&w=350&h=254", elo: 1570 },
  { id: "garrett-crochet", name: "Garrett Crochet", team: "BOS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4297835.png&w=350&h=254", elo: 1560 },
  { id: "paul-skenes", name: "Paul Skenes", team: "PIT", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4719507.png&w=350&h=254", elo: 1550 },
  { id: "yoshinobu-yamamoto", name: "Yoshinobu Yamamoto", team: "LAD", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4872587.png&w=350&h=254", elo: 1545 },
  { id: "cole-ragans", name: "Cole Ragans", team: "KC", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41054.png&w=350&h=254", elo: 1540 },
  { id: "hunter-greene", name: "Hunter Greene", team: "CIN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39635.png&w=350&h=254", elo: 1535 },
  { id: "logan-gilbert", name: "Logan Gilbert", team: "SEA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41221.png&w=350&h=254", elo: 1530 },
  { id: "bryan-woo", name: "Bryan Woo", team: "SEA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4629089.png&w=350&h=254", elo: 1525 },
  { id: "max-fried", name: "Max Fried", team: "NYY", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32685.png&w=350&h=254", elo: 1520 },
  { id: "george-kirby", name: "George Kirby", team: "SEA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42406.png&w=350&h=254", elo: 1515 },
  { id: "jacob-degrom", name: "Jacob deGrom", team: "TEX", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32796.png&w=350&h=254", elo: 1510 },
  { id: "joe-ryan", name: "Joe Ryan", team: "MIN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42450.png&w=350&h=254", elo: 1505 },
  { id: "shohei-ohtani", name: "Shohei Ohtani", team: "LAD", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png&w=350&h=254", elo: 1500 },
  { id: "sandy-alcantara", name: "Sandy Alcantara", team: "MIA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35241.png&w=350&h=254", elo: 1495 },
  { id: "logan-webb", name: "Logan Webb", team: "SF", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41216.png&w=350&h=254", elo: 1490 },
  { id: "freddy-peralta", name: "Freddy Paralta", team: "NYM", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39825.png&w=350&h=254", elo: 1485 },
  { id: "jose-soriano", name: "Jose Soriano", team: "LAA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40973.png&w=350&h=254", elo: 1480 },
  { id: "cristopher-sanchez", name: "Cristopher Sanchez", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42359.png&w=350&h=254", elo: 1475 },
  { id: "hunter-brown", name: "Hunter Brown", team: "HOU", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4717803.png&w=350&h=254", elo: 1470 },
  { id: "dylan-cease", name: "Dylan Cease", team: "TOR", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34943.png&w=350&h=254", elo: 1465 },
  { id: "chris-sale", name: "Chris Sale", team: "ATL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30948.png&w=350&h=254", elo: 1460 },
  { id: "zack-wheeler", name: "Zack Wheeler", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31267.png&w=350&h=254", elo: 1455 },
  ],
};


// gets fault player list for whatever category is selected
function getSeed(category) { return DATA[category] || []; }

// picks to players to compare
function pickPair(players, lastPairIds) {
  // if there are less than 2 players, just return the same one twice
  if (players.length < 2) return [players[0], players[0]];

  // sort by elo so matchups stay close
  const sorted = [...players].sort((a, b) => a.elo - b.elo);

  // choose a random middle spot. then compare neighboring players
  const mid = Math.floor(Math.random() * (sorted.length - 1));
  const options = [sorted[mid], sorted[mid + 1]];

  // randomly flip the left/right so same player does not always show
  if (Math.random() > 0.5) options.reverse();

  // does not repeat the same matchup back to back
  if (lastPairIds) {
    const a = options[0].id, b = options[1].id;
    const lastSet = new Set(lastPairIds);

    // if both players were just shown, swap one out
    if (lastSet.has(a) && lastSet.has(b)) {
      const distant = sorted.find(p => p.id !== a && p.id !== b && Math.abs(p.elo - options[0].elo) > 25) || sorted.find(p => p.id !== a && p.id !== b);
      if (distant) options[1] = distant;
    }
  }
  return options;
}

// update elo ratings after a winner is chosen
function updateElo(winner, loser, k = 32) {
  const expectedWin = 1 / (1 + Math.pow(10, (loser.elo - winner.elo) / 400));
  const expectedLose = 1 - expectedWin;

  // winner gains elo points, loser loses points
  const wNew = { ...winner, elo: Math.round(winner.elo + k * (1 - expectedWin)) };
  const lNew = { ...loser, elo: Math.round(loser.elo + k * (0 - expectedLose)) };
  return [wNew, lNew];
}

// custom hook so rankings stay saved in local storage
function usePersistentState(key, initialValue) {
  const [state, setState] = useState(() => {

    // avoids errors during build
    if (typeof window === "undefined") return initialValue;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // saves updated state wheneevr it changes
  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(state)); } catch {}
  }, [key, state]);
  return [state, setState];
}

export default function RankingQuiz() {
  
  // starting category being ranked
  const [category, setCategory] = useState("NFL_QB");

  // saved player rankings
  const [players, setPlayers] = usePersistentState(STORAGE_KEY, getSeed("NFL_QB"));

  // tracks how many comparisons have been done
  const [round, setRound] = useState(0);

  // whether the user has agreed with consensus rankings
  const [consentConsensus, setConsentConsensus] = useState(false);

  // stores the last matchup to avoid repeats
  const [lastPair, setLastPair] = useState(null);

  // total numbers of comparisons fore a full run
  const comparisonsTarget = 120;

  // once round hits target game is done
  const isComplete = round >= comparisonsTarget;

  useEffect(() => {

    // reset rankings and progress whenever category changes
    setPlayers(getSeed(category));
    setRound(0);
    setLastPair(null);
  }, [category]);

  // gets the next matchup
  const [left, right] = useMemo(() => pickPair(players, lastPair), [players, lastPair, round]);

  // progress bar percent
  const progressPct = Math.min(100, Math.round((round / comparisonsTarget) * 100));

  const handleChoice = (winnerId, loserId) => {
    const winner = players.find((p) => p.id === winnerId);
    const loser = players.find((p) => p.id === loserId);
    if (!winner || !loser) return;

    // updates rankings after user user picks a winner
    const [wNew, lNew] = updateElo(winner, loser);
    const updated = players.map((p) => (p.id === wNew.id ? wNew : p.id === lNew.id ? lNew : p));
    setPlayers(updated);
    setLastPair([winnerId, loserId]);
    setRound((r) => r + 1);
  };

  const handleSkip = () => {

    // skip moves to the next round, but doesnt change elo
    setLastPair([left.id, right.id]);
    setRound((r) => r + 1);
  };

  // scorebroad sorted from highest elo to lowest
  const ordered = useMemo(() => [...players].sort((a, b) => b.elo - a.elo), [players]);

  return (
    <>
      <Header />
<main className="quiz-container">
  <h1 className="quiz-title">
    {CATEGORIES.find(c => c.key === category)?.short} Ranking Game
  </h1>

  <div className="category-picker">
    <label htmlFor="sport-select">Choose a sport:</label>
    <select
      id="sport-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {CATEGORIES.map((c) => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </select>
  </div>

  <div className="progress-bar">
    <div
      className="progress-bar-fill"
      style={{ width: `${progressPct}%` }}
    />
  </div>

  {!isComplete ? (
    <>
      <div className="quiz-matchup">
        <PlayerCard player={left} onChoose={() => handleChoice(left.id, right.id)} />
        <PlayerCard player={right} onChoose={() => handleChoice(right.id, left.id)} />
      </div>

      <button onClick={handleSkip} className="skip-button">
        Skip matchup
      </button>
    </>
  ) : (
    <section className="final-rankings">
      <h2>Your Final Rankings</h2>
      <ol>
        {ordered.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ol>
    </section>
  )}
</main>
<Footer />
  </>
  );
}

function PlayerCard({ player, onChoose }) {
  return (
    <div className="player-card" onClick={onChoose}>
      <img src={player.image} alt={player.name} />
      <h3>{player.name}</h3>
      <p>{player.team}</p>
    </div>
  );
}

function initials(name = "?") {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
}
