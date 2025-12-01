import React from 'react';
import Header from '../../../components/Header';
import './bengals.css'; // Player-specific CSS

const JoeBurrow = () => {
  return (
    <>
      <Header />
      <main className="profile-container bengals-aura">
        <h1>Joe Burrow</h1>
        <p>Number: 9</p>
        <p>Height: 6'4"</p>
        <p>Age: 28</p>
        <p>Position: Quarterback</p>
        <p>College: LSU</p>
        <p>Drafted: 1st overall in the 2020 NFL Draft by the Cincinnati Bengals</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png&w=350&h=254"
            alt="Joe Burrow"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Joe Burrow has brought stability and swagger back to Cincinnati. Known for pinpoint accuracy, poise, 
            and leadership, Burrow led the Bengals to the Super Bowl in just his second season and remains one of the 
            league’s elite young quarterbacks.
          </p>
        </div>

        {/* Blank Player Stats */}
        <div className="stats">
          <h2>Joe Burrow Stats</h2>
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
              {/* Blank rows for 2020–2025 */}
              {['2020','2021','2022','2023','2024','2025'].map((season) => (
                <tr key={season}>
                  <td>{season}</td>
                  <td>—</td><td>CIN</td><td>NFL</td><td>QB</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Highlight video */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0j_NJ5dHZXw"
            title="Joe Burrow Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JoeBurrow;
