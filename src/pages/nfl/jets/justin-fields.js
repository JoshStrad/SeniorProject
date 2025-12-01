import React from 'react';
import Header from '../../../components/Header';
import './jets.css'; // Player-specific CSS

const JustinFields = () => {
  const seasons = ['2021', '2022', '2023', '2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container jets-aura">
        <h1>Justin Fields</h1>
        <p>Number: 2</p>
        <p>Height: 6'3"</p>
        <p>Age: 26</p>
        <p>Position: Quarterback</p>
        <p>College: Ohio State</p>
        <p>Drafted: 11th overall in the 2021 NFL Draft by the Chicago Bears</p>
        <p>Traded: Acquired by the New York Jets in 2024</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362887.png&w=350&h=254"
            alt="Justin Fields"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Justin Fields brings dynamic athleticism and arm strength to the New York Jets. 
            After beginning his career in Chicago, Fields joined New York looking to thrive 
            in a new offensive system. His dual-threat ability makes him a nightmare for defenses, 
            capable of creating explosive plays with both his legs and his deep ball.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Justin Fields Stats</h2>
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
                <th>Cmp</th>
                <th>Att</th>
                <th>Cmp%</th>
                <th>Yds</th>
                <th>TD</th>
                <th>Int</th>
                <th>Rate</th>
                <th>Sk</th>
                <th>Y/A</th>
                <th>AY/A</th>
                <th>Y/G</th>
                <th>Rush</th>
                <th>RuYds</th>
                <th>RuTD</th>
                <th>Awards</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((season) => (
                <tr key={season}>
                  <td>{season}</td>
                  <td>—</td>
                  <td>{Number(season) >= 2024 ? 'NYJ' : 'CHI'}</td>
                  <td>NFL</td>
                  <td>QB</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Highlight Video */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c3BPZc0Hbtg"
            title="Justin Fields Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JustinFields;
