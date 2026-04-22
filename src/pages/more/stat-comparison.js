import React, { useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './stat-comparison.css';

// helper to safely convert values to numbers
function toNumber(value) {
  // if value is null treat it as 0
  if (value === null || value === undefined || value === '') return 0;

  const num = Number(value);

  // If conversion fails, return 0 
  return Number.isNaN(num) ? 0 : num;
}

// formats stats deping on type
function formatValue(value, key) {
  const num = toNumber(value);

// if its a perecentage add % and keep 1 decimal point
  if (key.includes('pct')) {
    return `${num.toFixed(1)}%`;
  }

  // integers stay the same and decimals get 1 decimal point
  return Number.isInteger(num) ? `${num}` : num.toFixed(1);
}

// controls how wide each stat bar is
function getBarWidth(value, maxValue) {
  if (maxValue <= 0) return '0%';
  return `${(value / maxValue) * 100}%`;
}

// gets all the availiable saesons for a player
function getAvailableSeasons(player) {
  return (player?.stats || [])

    // maps season field
    .map((row) => row.season)
    .filter(Boolean)
    .filter((season, i, arr) => arr.indexOf(season) === i)
    .reverse();
}

// finds the current stat row based on selected season
function getStatRow(player, selectedSeason) {
  const rows = player?.stats || [];

  // if there is no data
  if (!rows.length) return null;

  // if latest is selected, map the last row
  if (selectedSeason === 'Latest') {
    return rows[rows.length - 1];
  }

  // otherwise find the matching season
  return rows.find((r) => String(r.season) === String(selectedSeason)) || rows[rows.length - 1];
}

// config object that goes through all stat categories for each sport
const sportConfig = {
  nba: {
    label: 'NBA Players',
    categories: {
    // categories show up as tabs
      'Per Game': [
        { label: 'Points', key: 'pts', short: 'PPG' },
        { label: 'Assists', key: 'ast', short: 'APG' },
        { label: 'Rebounds', key: 'trb', short: 'RPG' },
        { label: 'Steals', key: 'stl', short: 'SPG' },
        { label: 'Blocks', key: 'blk', short: 'BPG' },
        { label: 'FG%', key: 'fg_pct', short: 'FG%' },
        { label: '3P%', key: 'three_p_pct', short: '3P%' },
        { label: 'FT%', key: 'ft_pct', short: 'FT%' },
      ],
      Scoring: [
        { label: 'Points', key: 'pts', short: 'PPG' },
        { label: 'FG Made', key: 'fg', short: 'FGM' },
        { label: 'FG Attempts', key: 'fga', short: 'FGA' },
        { label: '3PT Made', key: 'three_p', short: '3PM' },
        { label: '3PT Attempts', key: 'three_pa', short: '3PA' },
        { label: 'eFG%', key: 'efg_pct', short: 'eFG%' },
      ],
    },
  },

  nfl: {
    label: 'NFL QBs',
    categories: {
      Passing: [
        { label: 'Passing Yards', key: 'pass_yds', short: 'YDS' },
        { label: 'Passing TD', key: 'pass_td', short: 'TD' },
        { label: 'Interceptions', key: 'pass_int', short: 'INT' },
        { label: 'Completions', key: 'cmp', short: 'CMP' },
        { label: 'Attempts', key: 'att', short: 'ATT' },
        { label: 'Completion %', key: 'cmp_pct', short: 'CMP%' },
      ],
      Efficiency: [
        { label: 'Yards / Attempt', key: 'yards_per_attempt', short: 'Y/A' },
        { label: 'Passer Rating', key: 'passer_rating', short: 'RTG' },
        { label: 'QBR', key: 'qbr', short: 'QBR' },
        { label: 'Sacks', key: 'sacks', short: 'SACK' },
      ],
    },
  },

  mlb: {
    label: 'MLB Pitchers',
    categories: {
      Traditional: [
        { label: 'Wins', key: 'wins', short: 'W' },
        { label: 'Losses', key: 'losses', short: 'L' },
        { label: 'ERA', key: 'era', short: 'ERA' },
        { label: 'Innings Pitched', key: 'ip', short: 'IP' },
        { label: 'Strikeouts', key: 'so', short: 'SO' },
        { label: 'Walks', key: 'bb', short: 'BB' },
      ],
      Advanced: [
        { label: 'WHIP', key: 'whip', short: 'WHIP' },
        { label: 'FIP', key: 'fip', short: 'FIP' },
        { label: 'ERA+', key: 'era_plus', short: 'ERA+' },
        { label: 'WAR', key: 'war', short: 'WAR' },
      ],
      Rates: [
        { label: 'H/9', key: 'h9', short: 'H/9' },
        { label: 'HR/9', key: 'hr9', short: 'HR/9' },
        { label: 'BB/9', key: 'bb9', short: 'BB/9' },
        { label: 'SO/9', key: 'so9', short: 'SO/9' },
        { label: 'SO/BB', key: 'so_per_bb', short: 'SO/BB' },
      ],
    },
  },
};

// main component
const StatComparisonPage = ({ data }) => {

  // build NBA player list from GraphSQL data
  const nbaPlayers = useMemo(() => {
    return data.allNbaComparisonDataJson.nodes.map((node) => ({
      id: `nba-${node.player_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: node.player_name,
      team: node.team,
      position: node.meta?.position,
      headshot: null,
      stats: node.per_game || [],
    }));
  }, [data]);

   // same idea as nba
  const nflPlayers = useMemo(() => {
    return data.allNflQbComparisonDataJson.nodes.map((node) => ({
      id: `nfl-${node.player_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: node.player_name,
      team: node.team,
      position: node.meta?.position || 'QB',
      headshot: node.headshot,
      stats: node.seasons || [],
    }));
  }, [data]);

  // same idea again
  const mlbPlayers = useMemo(() => {
    return data.allMlbPitcherComparisonDataJson.nodes.map((node) => ({
      id: `mlb-${node.player_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: node.player_name,
      team: node.team,
      position: 'Pitcher',
      headshot: null,
      stats: node.seasons || [],
    }));
  }, [data]);

  // sports toggle between sports
  const [sportType, setSportType] = useState('nba');

  // pick current player from list
  const players =
    sportType === 'nba'
      ? nbaPlayers
      : sportType === 'nfl'
      ? nflPlayers
      : mlbPlayers;

  // selected player and filters for stats used
  const [player1Id, setPlayer1Id] = useState('');
  const [player2Id, setPlayer2Id] = useState('');
  const [category, setCategory] = useState('Per Game');
  const [season, setSeason] = useState('Latest');

  // resets to default when sport changes
  useEffect(() => {
    if (!players.length) return;

    setPlayer1Id(players[0]?.id);
    setPlayer2Id(players[1]?.id || players[0]?.id);
    setCategory(Object.keys(sportConfig[sportType].categories)[0]);
    setSeason('Latest');
  }, [sportType, players]);

   // get actual player objects
  const player1 = players.find((p) => p.id === player1Id);
  const player2 = players.find((p) => p.id === player2Id);

  // this is buiulding season dropdown
  const allSeasons = useMemo(() => {
    return [
      'Latest',
      ...new Set([...getAvailableSeasons(player1), ...getAvailableSeasons(player2)]),
    ];
  }, [player1, player2]);

   // maps stat rows from selected season
  const stats1 = getStatRow(player1, season);
  const stats2 = getStatRow(player2, season);

  // which stats to show
  const statList = sportConfig[sportType].categories[category] || [];

  return (
    <>
      <Header />
      <main className="comparison-page">
        <section className="comparison-hero aura-card">
          <h1>Stat Comparison</h1>
          <p>Compare NBA players, NFL quarterbacks, and MLB pitchers</p>
        </section>

        <section className="comparison-top aura-card">
          <div className="sport-block">
            <h3>SPORT</h3>
            <select
              value={sportType}
              onChange={(e) => setSportType(e.target.value)}
              className="comparison-select"
            >
              <option value="nba">NBA Players</option>
              <option value="nfl">NFL QBs</option>
              <option value="mlb">MLB Pitchers</option>
            </select>
          </div>

          <div className="player-select-block">
            <h3>PLAYER 1</h3>
            <select
              value={player1Id}
              onChange={(e) => setPlayer1Id(e.target.value)}
              className="comparison-select"
            >
              {players.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <div className="player-summary">
              {player1?.headshot && (
                <img
                  src={player1.headshot}
                  alt={player1.name}
                  className="comparison-headshot"
                />
              )}
              <div>
                <p className="player-name">{player1?.name}</p>
                <p className="player-meta">
                  {player1?.team}
                  {player1?.position ? ` | ${player1.position}` : ''}
                </p>
              </div>
            </div>
          </div>

          <div className="vs-divider">VS</div>

          <div className="player-select-block">
            <h3>PLAYER 2</h3>
            <select
              value={player2Id}
              onChange={(e) => setPlayer2Id(e.target.value)}
              className="comparison-select"
            >
              {players.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <div className="player-summary">
              {player2?.headshot && (
                <img
                  src={player2.headshot}
                  alt={player2.name}
                  className="comparison-headshot"
                />
              )}
              <div>
                <p className="player-name">{player2?.name}</p>
                <p className="player-meta">
                  {player2?.team}
                  {player2?.position ? ` | ${player2.position}` : ''}
                </p>
              </div>
            </div>
          </div>

          <div className="season-block">
            <h3>SELECT SEASON</h3>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="comparison-select"
            >
              {allSeasons.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="comparison-tabs">
          {Object.keys(sportConfig[sportType].categories).map((cat) => (
            <button
              key={cat}
              className={`comparison-tab ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="comparison-stats aura-card">
          <div className="comparison-legend">
            <span className="legend-item">
              <span className="legend-color blue"></span>
              {player1?.name}
            </span>
            <span className="legend-item">
              <span className="legend-color gold"></span>
              {player2?.name}
            </span>
          </div>

          {statList.map((stat) => {
            const v1 = toNumber(stats1?.[stat.key]);
            const v2 = toNumber(stats2?.[stat.key]);
            const max = Math.max(v1, v2, 1);

            return (
              <div className="stat-row" key={stat.key}>
                <div className="stat-side left">
                  <div className="stat-value">{formatValue(v1, stat.key)}</div>
                  <div className="bar-track">
                    <div
                      className="bar-fill blue"
                      style={{ width: getBarWidth(v1, max) }}
                    ></div>
                  </div>
                </div>

                <div className="stat-center">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-short">{stat.short}</div>
                </div>

                <div className="stat-side right">
                  <div className="bar-track">
                    <div
                      className="bar-fill gold"
                      style={{ width: getBarWidth(v2, max) }}
                    ></div>
                  </div>
                  <div className="stat-value">{formatValue(v2, stat.key)}</div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StatComparisonPage;

export const query = graphql`
  query {
    allNbaComparisonDataJson {
      nodes {
        player_name
        team
        meta {
          position
        }
        per_game {
          season
          pts
          ast
          trb
          stl
          blk
          fg
          fga
          fg_pct
          three_p
          three_pa
          three_p_pct
          ft_pct
          efg_pct
        }
      }
    }

    allNflQbComparisonDataJson {
      nodes {
        player_name
        team
        headshot
        meta {
          position
        }
        seasons {
          season
          cmp
          att
          cmp_pct
          pass_yds
          pass_td
          pass_int
          yards_per_attempt
          passer_rating
          qbr
          sacks
        }
      }
    }

    allMlbPitcherComparisonDataJson {
      nodes {
        player_name
        team
        seasons {
          season
          wins
          losses
          era
          ip
          so
          bb
          whip
          fip
          era_plus
          war
          h9
          hr9
          bb9
          so9
          so_per_bb
        }
      }
    }
  }
`;