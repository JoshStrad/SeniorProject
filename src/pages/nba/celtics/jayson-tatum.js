// src/pages/nba/celtics/jayson-tatum.js

import React from 'react';
import Header from '../../../components/Header';
import './celtics-player.css';

// ⚠️ Adjust this path if needed depending on your folder structure
import tatumData from '../../../../scrapeddata/nba/players/jayson-tatum.json';

const JaysonTatum = () => {
  const { 
    player_name,
    number,
    position,
    shoots,
    height,
    weight,
    born,
    college,
    draft,
    per_game: perGameStats = []
  } = tatumData;

  // Use latest season for age (from per-game table)
  const latestSeason = perGameStats.length > 0
    ? perGameStats[perGameStats.length - 1]
    : null;

  const age = latestSeason?.Age || null;

  // Format height like 6-8 -> 6'8"
  const formattedHeight = height ? `${height.replace('-', '\'')}\"` : null;

  return (
    <>
      <Header />
      <main className="profile-container celtics-aura">
        <h1>{player_name}</h1>

        {/* Basic info from scraped JSON */}
        <p>Number: {number || 'N/A'}</p>
        {formattedHeight && <p>Height: {formattedHeight}</p>}
        {weight && <p>Weight: {weight} lbs</p>}
        {age && <p>Age (latest season): {age}</p>}
        {position && <p>Position: {position}</p>}
        {shoots && <p>Shoots: {shoots}</p>}
        {college && <p>College: {college}</p>}
        {draft && <p>Drafted: {draft}</p>}
        {born && <p>Born: {born}</p>}

        {/* Player Image (still manual) */}
        <div className="player-image">
          <img 
            src="https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png" 
            alt={player_name} 
            className="profile-img" 
          />
        </div>

        {/* Player Bio (still manual) */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Jayson Tatum is a dynamic and versatile forward for the Boston Celtics, known for his exceptional
            scoring ability, athleticism, and leadership on the court. Since being drafted in 2017, he has become
            one of the NBA’s brightest stars, consistently averaging over 20 points per game and earning multiple
            All-Star selections. Tatum is celebrated for his smooth shooting touch from beyond the arc, as well as
            his ability to drive to the basket and finish in traffic. His basketball IQ and work ethic make him a
            key player for the Celtics as they contend for championships and as he contends for MVP awards.
          </p>
        </div>

        {/* Dynamic Stats Table */}
        <div className="stats">
          <h2>{player_name} Per-Game Stats</h2>

          {perGameStats.length === 0 ? (
            <p>No stats available.</p>
          ) : (
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Age</th>
                  <th>Team</th>
                  <th>Lg</th>
                  <th>Pos</th>
                  <th>G</th>
                  <th>GS</th>
                  <th>MP</th>
                  <th>FG</th>
                  <th>FGA</th>
                  <th>FG%</th>
                  <th>3P</th>
                  <th>3PA</th>
                  <th>3P%</th>
                  <th>2P</th>
                  <th>2PA</th>
                  <th>2P%</th>
                  <th>eFG%</th>
                  <th>FT</th>
                  <th>FTA</th>
                  <th>FT%</th>
                  <th>ORB</th>
                  <th>DRB</th>
                  <th>TRB</th>
                  <th>AST</th>
                  <th>STL</th>
                  <th>BLK</th>
                  <th>TOV</th>
                  <th>PF</th>
                  <th>PTS</th>
                  <th>Awards</th>
                </tr>
              </thead>
              <tbody>
                {perGameStats.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.Season}</td>
                    <td>{row.Age}</td>
                    <td>{row.Tm}</td>
                    <td>{row.Lg}</td>
                    <td>{row.Pos}</td>
                    <td>{row.G}</td>
                    <td>{row.GS}</td>
                    <td>{row.MP}</td>
                    <td>{row.FG}</td>
                    <td>{row.FGA}</td>
                    <td>{row['FG%']}</td>
                    <td>{row['3P']}</td>
                    <td>{row['3PA']}</td>
                    <td>{row['3P%']}</td>
                    <td>{row['2P']}</td>
                    <td>{row['2PA']}</td>
                    <td>{row['2P%']}</td>
                    <td>{row['eFG%']}</td>
                    <td>{row.FT}</td>
                    <td>{row.FTA}</td>
                    <td>{row['FT%']}</td>
                    <td>{row.ORB}</td>
                    <td>{row.DRB}</td>
                    <td>{row.TRB}</td>
                    <td>{row.AST}</td>
                    <td>{row.STL}</td>
                    <td>{row.BLK}</td>
                    <td>{row.TOV}</td>
                    <td>{row.PF}</td>
                    <td>{row.PTS}</td>
                    <td>{row.Awards || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
};

export default JaysonTatum;
