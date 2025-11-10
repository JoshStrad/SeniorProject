import React from 'react';
import Header from '../../../components/Header';
import './packers.css'; // Player-specific CSS

const JordanLove = () => {
  const seasons = ['2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container packers-aura">
        <h1>Jordan Love</h1>
        <p>Number: 10</p>
        <p>Height: 6'4"</p>
        <p>Age: 26</p>
        <p>Position: Quarterback</p>
        <p>College: Utah State</p>
        <p>Drafted: 26th overall in the 2020 NFL Draft by the Green Bay Packers</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/green-bay-packers-jordan-love-min--2l07qz-z.png"
            alt="Jordan Love"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Jordan Love took the reins in Green Bay with poise, arm talent, and off-script creativity,
            guiding a young Packers offense with timing and confidence.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Jordan Love Stats</h2>
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
                  <td>—</td><td>GNB</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/fb0Fr_Bo0lQ"
            title="Jordan Love Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JordanLove;
