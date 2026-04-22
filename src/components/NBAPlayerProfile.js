import React from 'react';
import Header from './Header';

const NBAPlayerProfile = ({
  data,
  headshot,
  bio,
  auraClass = '',
  teamName = '',
  jerseyNumber = ''
}) => {
  // pulls needed data from JSON
  const {
    player_name,
    meta = {},
    per_game: perGameStats = []
  } = data || {};

  // filters out bad rows 
  const validRows = perGameStats.filter(
    (row) =>
      row &&
      row.Season &&
      row.Age &&

      // sometimes age can be confused with yrs played
      !String(row.Age).toLowerCase().includes('yr')
  );

  // tries to get the most accurate latest season
  const latestSeason =

    // prefer TOTAL row if player was on multiple teams
    [...validRows].reverse().find((row) => row.Tm === 'TOT') ||

    // otherwise just grab the most recent row
    [...validRows].reverse()[0] ||

    // fallback if nothing exists
    null;

  // player age based on latest season
  const age = latestSeason?.Age || null;

  // converts height format from "6-3" → 6'3"
  const formattedHeight = meta.height
    ? `${meta.height.replace('-', "'")}"`
    : null;

  // stat table creation
  return (
    <div>
      <Header />
      <main className={`profile-container ${auraClass}`}>
        <h1>{player_name}</h1>
        {jerseyNumber && <p>Number: {jerseyNumber}</p>}
        {teamName && <p>Team: {teamName}</p>}
        {formattedHeight && <p>Height: {formattedHeight}</p>}
        {meta.weight_lb && <p>Weight: {meta.weight_lb} lbs</p>}
        {age && <p>Age: {age}</p>}
        {meta.position && <p>Position: {meta.position}</p>}
        {meta.shoots && <p>Shoots: {meta.shoots}</p>}
        {meta.college && <p>College: {meta.college}</p>}
        {meta.draft && <p>Drafted: {meta.draft}</p>}
        {meta.birth_date_display && <p>Born: {meta.birth_date_display}</p>}

        <div className="player-image">
          <img src={headshot} alt={player_name} className="profile-img" />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>{bio}</p>
        </div>

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
                    <td>{row.Team}</td>
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
    </div>
  );
};

export default NBAPlayerProfile;