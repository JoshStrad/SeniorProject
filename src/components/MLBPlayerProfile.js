import React from 'react';
import Header from './Header';

const MLBPlayerProfile = ({
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
    pitching: pitchingStats = []
  } = data || {};

  // filters out bad rows 
  const validRows = pitchingStats.filter(
    (row) =>
      row &&
      row.Year &&
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
        {meta.bats && <p>Bats: {meta.bats}</p>}
        {meta.throws && <p>Throws: {meta.throws}</p>}
        {meta.school && <p>School: {meta.school}</p>}
        {meta.high_school && <p>High School: {meta.high_school}</p>}
        {meta.draft && <p>Drafted: {meta.draft}</p>}
        {meta.debut && <p>MLB Debut: {meta.debut}</p>}
        {meta.rookie_status && <p>Rookie Status: {meta.rookie_status}</p>}
        {meta.birth_date_display && <p>Born: {meta.birth_date_display}</p>}
        {meta.birth_place && <p>Birthplace: {meta.birth_place}</p>}

        <div className="player-image">
          <img src={headshot} alt={player_name} className="profile-img" />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>{bio}</p>
        </div>

        <div className="stats">
          <h2>{player_name} Pitching Stats</h2>

          {pitchingStats.length === 0 ? (
            <p>No stats available.</p>
          ) : (
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Age</th>
                  <th>Team</th>
                  <th>Lg</th>
                  <th>W</th>
                  <th>L</th>
                  <th>W-L%</th>
                  <th>ERA</th>
                  <th>G</th>
                  <th>GS</th>
                  <th>GF</th>
                  <th>CG</th>
                  <th>SHO</th>
                  <th>SV</th>
                  <th>IP</th>
                  <th>H</th>
                  <th>R</th>
                  <th>ER</th>
                  <th>HR</th>
                  <th>BB</th>
                  <th>IBB</th>
                  <th>SO</th>
                  <th>HBP</th>
                  <th>BK</th>
                  <th>WP</th>
                  <th>BF</th>
                  <th>ERA+</th>
                  <th>FIP</th>
                  <th>WHIP</th>
                  <th>H9</th>
                  <th>HR9</th>
                  <th>BB9</th>
                  <th>SO9</th>
                  <th>SO/BB</th>
                  <th>Awards</th>
                </tr>
              </thead>
              <tbody>
                {pitchingStats.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.Season}</td>
                    <td>{row.Age}</td>
                    <td>{row.Team}</td>
                    <td>{row.Lg}</td>
                    <td>{row.W}</td>
                    <td>{row.L}</td>
                    <td>{row['W-L%']}</td>
                    <td>{row.ERA}</td>
                    <td>{row.G}</td>
                    <td>{row.GS}</td>
                    <td>{row.GF}</td>
                    <td>{row.CG}</td>
                    <td>{row.SHO}</td>
                    <td>{row.SV}</td>
                    <td>{row.IP}</td>
                    <td>{row.H}</td>
                    <td>{row.R}</td>
                    <td>{row.ER}</td>
                    <td>{row.HR}</td>
                    <td>{row.BB}</td>
                    <td>{row.IBB}</td>
                    <td>{row.SO}</td>
                    <td>{row.HBP}</td>
                    <td>{row.BK}</td>
                    <td>{row.WP}</td>
                    <td>{row.BF}</td>
                    <td>{row['ERA+']}</td>
                    <td>{row.FIP}</td>
                    <td>{row.WHIP}</td>
                    <td>{row.H9}</td>
                    <td>{row.HR9}</td>
                    <td>{row.BB9}</td>
                    <td>{row.SO9}</td>
                    <td>{row['SO/BB']}</td>
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

export default MLBPlayerProfile;