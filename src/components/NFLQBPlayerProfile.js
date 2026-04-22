import React from 'react';
import Header from './Header';

const QBPlayerProfile = ({
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
    passing = []
  } = data || {};

  // sort passing stats by year so we know what the latest season is
  const sortedPassing = [...passing].sort((a, b) => {
    const yearA = a?.Year ?? 0;
    const yearB = b?.Year ?? 0;
    return yearA - yearB;
  });

  // latest season is just the last one after sorting
  const latestSeason =
    sortedPassing.length > 0 ? sortedPassing[sortedPassing.length - 1] : null;

  // prefer passed-in props with fall back to scraped meta if needed 
  const displayHeadshot = headshot || meta.headshot || '';
  const displayTeam = teamName || meta.team || '';

   // height already formatted from scraper, so just use it
  const formattedHeight = meta.height || null;

  // helper to render stats cleanly
  const renderStat = (label, value) => {
    if (value === undefined || value === null || value === '') return null;
    return (
      <p>
        <strong>{label}:</strong> {value}
      </p>
    );
  };

  // stat table creation
  return (
    <div>
      <Header />
      <main className={`profile-container ${auraClass}`}>
        <h1>{player_name}</h1>

        {jerseyNumber && <p>Number: {jerseyNumber}</p>}
        {displayTeam && <p>Team: {displayTeam}</p>}
        {meta.position && <p>Position: {meta.position}</p>}
        {meta.throws && <p>Throws: {meta.throws}</p>}
        {formattedHeight && <p>Height: {formattedHeight}</p>}
        {meta.weight && <p>Weight: {meta.weight}</p>}

        {displayHeadshot && (
          <div className="player-image">
            <img
              src={displayHeadshot}
              alt={player_name}
              className="profile-img"
            />
          </div>
        )}

        {bio && (
          <div className="bio">
            <h2>Bio</h2>
            <p>{bio}</p>
          </div>
        )}

        {latestSeason && (
          <div className="latest-season-box">
            <h2>Latest Season Passing Stats</h2>
            <div className="stats-grid">
              {renderStat('Season', latestSeason.Year)}
              {renderStat('Team', latestSeason.Tm || displayTeam)}
              {renderStat('Completions', latestSeason.Cmp)}
              {renderStat('Attempts', latestSeason.Att)}
              {renderStat('Completion %', latestSeason['Cmp%'])}
              {renderStat('Pass Yards', latestSeason.Yds)}
              {renderStat('Pass TD', latestSeason.TD)}
              {renderStat('Interceptions', latestSeason.Int)}
              {renderStat('Yards/Attempt', latestSeason['Y/A'])}
              {renderStat('Yards/Game', latestSeason['Y/G'])}
              {renderStat('Passer Rating', latestSeason.Rate)}
              {renderStat('QBR', latestSeason.QBR)}
              {renderStat('Sacks', latestSeason.Sk)}
            </div>
          </div>
        )}

        {sortedPassing.length > 0 && (
          <div className="stats-section">
            <h2>Full Career Passing Stats</h2>
            <div className="table-wrapper">
              <table className="stats-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Team</th>
                    <th>Cmp</th>
                    <th>Att</th>
                    <th>Cmp%</th>
                    <th>Yds</th>
                    <th>TD</th>
                    <th>Int</th>
                    <th>Y/A</th>
                    <th>Y/G</th>
                    <th>Rate</th>
                    <th>QBR</th>
                    <th>Sk</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPassing.map((season, index) => (
                    <tr key={index}>
                      <td>{season.Year ?? ''}</td>
                      <td>{season.Tm || displayTeam || ''}</td>
                      <td>{season.Cmp ?? ''}</td>
                      <td>{season.Att ?? ''}</td>
                      <td>{season['Cmp%'] ?? ''}</td>
                      <td>{season.Yds ?? ''}</td>
                      <td>{season.TD ?? ''}</td>
                      <td>{season.Int ?? ''}</td>
                      <td>{season['Y/A'] ?? ''}</td>
                      <td>{season['Y/G'] ?? ''}</td>
                      <td>{season.Rate ?? ''}</td>
                      <td>{season.QBR ?? ''}</td>
                      <td>{season.Sk ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="player-meta">
          <h2>Player Info</h2>
          {meta.born && <p><strong>Born:</strong> {meta.born}</p>}
          {meta.college && <p><strong>College:</strong> {meta.college}</p>}
          {meta.high_school && <p><strong>High School:</strong> {meta.high_school}</p>}
          {meta.draft && <p><strong>Draft:</strong> {meta.draft}</p>}
        </div>
      </main>
    </div>
  );
};

export default QBPlayerProfile;