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
  { id: "kirk-cousins", name: "Kirk Cousins", team: "ATL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360423.png&w=350&h=254", elo: 1495 },
  { id: "tua-tagovailoa", name: "Tua Tagovailoa", team: "MIA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241479.png&w=350&h=254", elo: 1490 },
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
  { id: "victor-wembanyama", name: "Victor Wembanyama", team: "SAS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4567137.png&w=350&h=254", elo: 1560 },
  { id: "cade-cunningham", name: "Cade Cunningham", team: "DET", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432821.png&w=350&h=254", elo: 1550 },
  { id: "joel-embiid", name: "Joel Embiid", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254", elo: 1545 },
  { id: "anthony-edwards", name: "Anthony Edwards", team: "MIN", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395628.png&w=350&h=254", elo: 1540 },
  { id: "devin-booker", name: "Devin Booker", team: "PHX", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136193.png&w=350&h=254", elo: 1535 },
  { id: "jalen-brunson", name: "Jalen Brunson", team: "NYK", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066331.png&w=350&h=254", elo: 1530 },
  { id: "stephen-curry", name: "Stephen Curry", team: "GSW", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254", elo: 1525 },
  { id: "kevin-durant", name: "Kevin Durant", team: "PHX", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254", elo: 1520 },
  { id: "lebron-james", name: "LeBron James", team: "LAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254", elo: 1515 },
  { id: "donovan-mitchell", name: "Donovan Mitchell", team: "CLE", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3908809.png&w=350&h=254", elo: 1510 },
  { id: "tyrese-maxey", name: "Tyrese Maxey", team: "PHI", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396993.png&w=350&h=254", elo: 1505 },
  { id: "anthony-davis", name: "Anthony Davis", team: "LAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254", elo: 1500 },
  { id: "jaylen-brown", name: "Jaylen Brown", team: "BOS", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155526.png&w=350&h=254", elo: 1495 },
  { id: "evan-mobley", name: "Evan Mobley", team: "CLE", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432808.png&w=350&h=254", elo: 1490 },
  { id: "franz-wagner", name: "Franz Wagner", team: "ORL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4566434.png&w=350&h=254", elo: 1485 },
  { id: "paolo-banchero", name: "Paolo Banchero", team: "ORL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433136.png&w=350&h=254", elo: 1480 },
  { id: "austin-reaves", name: "Austin Reaves", team: "LAL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065731.png&w=350&h=254", elo: 1475 },
  { id: "jimmy-butler", name: "Jimmy Butler", team: "MIA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&w=350&h=254", elo: 1470 },
  { id: "trae-young", name: "Trae Young", team: "ATL", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png&w=350&h=254", elo: 1465 },
  { id: "lamelo-ball", name: "LaMelo Ball", team: "CHA", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395625.png&w=350&h=254", elo: 1460 },
  { id: "deaaron-fox", name: "De'Aaron Fox", team: "SAC", image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065732.png&w=350&h=254", elo: 1455 },
],

  MLB_SP: [
    { id: "gerrit-cole", name: "Gerrit Cole", team: "NYY", image: "https://a.espncdn.com/i/headshots/mlb/players/full/32081.png", elo: 1580 },
    { id: "spencer-strider", name: "Spencer Strider", team: "ATL", image: "https://a.espncdn.com/i/headshots/mlb/players/full/3948316.png", elo: 1560 },
    { id: "zac-gallen", name: "Zac Gallen", team: "ARI", image: "https://a.espncdn.com/i/headshots/mlb/players/full/36739.png", elo: 1530 },
    { id: "blake-snell", name: "Blake Snell", team: "SF", image: "https://a.espncdn.com/i/headshots/mlb/players/full/33039.png", elo: 1510 },
  ],
};



function getSeed(category) { return DATA[category] || []; }
function pickPair(players, lastPairIds) {
  if (players.length < 2) return [players[0], players[0]];
  const sorted = [...players].sort((a, b) => a.elo - b.elo);
  const mid = Math.floor(Math.random() * (sorted.length - 1));
  const options = [sorted[mid], sorted[mid + 1]];
  if (Math.random() > 0.5) options.reverse();
  if (lastPairIds) {
    const a = options[0].id, b = options[1].id;
    const lastSet = new Set(lastPairIds);
    if (lastSet.has(a) && lastSet.has(b)) {
      const distant = sorted.find(p => p.id !== a && p.id !== b && Math.abs(p.elo - options[0].elo) > 25) || sorted.find(p => p.id !== a && p.id !== b);
      if (distant) options[1] = distant;
    }
  }
  return options;
}
function updateElo(winner, loser, k = 32) {
  const expectedWin = 1 / (1 + Math.pow(10, (loser.elo - winner.elo) / 400));
  const expectedLose = 1 - expectedWin;
  const wNew = { ...winner, elo: Math.round(winner.elo + k * (1 - expectedWin)) };
  const lNew = { ...loser, elo: Math.round(loser.elo + k * (0 - expectedLose)) };
  return [wNew, lNew];
}
function usePersistentState(key, initialValue) {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(state)); } catch {}
  }, [key, state]);
  return [state, setState];
}

export default function RankingQuiz() {
  const [category, setCategory] = useState("NFL_QB");
  const [players, setPlayers] = usePersistentState(STORAGE_KEY, getSeed("NFL_QB"));
  const [round, setRound] = useState(0);
  const [consentConsensus, setConsentConsensus] = useState(false);
  const [lastPair, setLastPair] = useState(null);

  // Back to 120 rounds for all categories
  const comparisonsTarget = 120;
  const isComplete = round >= comparisonsTarget;

  useEffect(() => {
    setPlayers(getSeed(category));
    setRound(0);
    setLastPair(null);
  }, [category]);

  const [left, right] = useMemo(() => pickPair(players, lastPair), [players, lastPair, round]);
  const progressPct = Math.min(100, Math.round((round / comparisonsTarget) * 100));

  const handleChoice = (winnerId, loserId) => {
    const winner = players.find((p) => p.id === winnerId);
    const loser = players.find((p) => p.id === loserId);
    if (!winner || !loser) return;
    const [wNew, lNew] = updateElo(winner, loser);
    const updated = players.map((p) => (p.id === wNew.id ? wNew : p.id === lNew.id ? lNew : p));
    setPlayers(updated);
    setLastPair([winnerId, loserId]);
    setRound((r) => r + 1);
  };

  const handleSkip = () => {
    setLastPair([left.id, right.id]);
    setRound((r) => r + 1);
  };

  const ordered = useMemo(() => [...players].sort((a, b) => b.elo - a.elo), [players]);

  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex flex-col items-center bg-black text-gray-100">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-6">
        <header className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-red-500">{CATEGORIES.find(c => c.key === category)?.short}</span> Ranking Quiz
          </h1>
          <div className="flex items-center gap-3">
            <select
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Select category"
            >
              {CATEGORIES.map(c => (
                <option key={c.key} value={c.key}>{c.label}</option>
              ))}
            </select>
          </div>
        </header>

        <div className="w-full mb-6">
          <div
            className="relative h-3 bg-zinc-800 rounded-xl overflow-hidden"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="absolute inset-y-0 left-0 bg-cyan-400"
              style={{ width: `${progressPct}%`, transition: "width 300ms linear" }}
            />
          </div>
          <div className="mt-2 flex justify-end">
            <span className="text-[11px] text-zinc-400">{progressPct}%</span>
          </div>
        </div>

        {!isComplete ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <PlayerCard key={left.id} player={left} onChoose={() => handleChoice(left.id, right.id)} />
              <PlayerCard key={right.id} player={right} onChoose={() => handleChoice(right.id, left.id)} />
            </div>

            <div className="flex items-center justify-start mt-6">
              <button onClick={handleSkip} className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-sm">Skip matchup</button>
            </div>
          </>
        ) : (
          <section className="mt-10 text-center">
            <h2 className="text-xl font-bold mb-3">Your Final Rankings</h2>
            <ol className="inline-block text-left bg-zinc-900/70 rounded-xl px-6 py-4 space-y-2">
              {ordered.map((p, i) => (
                <li key={p.id} className="text-lg font-semibold">{p.name}</li>
              ))}
            </ol>
            <p className="text-sm text-zinc-400 mt-4">Screenshot and share your rankings!</p>
          </section>
        )}
      </div>
    </main>
    <Footer />
  </>
  );
}

function PlayerCard({ player, onChoose }) {
  return (
    <button
      onClick={onChoose}
      className="group relative w-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-900/30 transition"
    >
      <div className="aspect-[4/3] w-full bg-gradient-to-b from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
        {player.image ? (
          <img src={player.image} alt={player.name} className="h-full w-full object-cover group-hover:scale-[1.02] transition" onError={(e) => (e.currentTarget.style.display = "none")} />
        ) : null}
        {!player.image && (
          <div className="text-6xl font-black opacity-20 select-none">{initials(player.name)}</div>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <div className="text-lg sm:text-xl font-bold leading-tight">{player.name}</div>
        <div className="text-sm text-zinc-400">{player.team}</div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </button>
  );
}

function initials(name = "?") {
  return name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
}
