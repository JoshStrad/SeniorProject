import React from 'react';
import Header from '../../../components/Header';
import './eagles.css'; // Player-specific CSS

const JalenHurts = () => {
  const seasons = ['2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container eagles-aura">
        <h1>Jalen Hurts</h1>
        <p>Number: 1</p>
        <p>Height: 6'1"</p>
        <p>Age: 27</p>
        <p>Position: Quarterback</p>
        <p>College: Alabama / Oklahoma</p>
        <p>Drafted: 53rd overall in the 2020 NFL Draft by the Philadelphia Eagles</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/philadelphia-eagles-jalen-hurts-min--2l07qz-z.png"
            alt="Jalen Hurts"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Jalen Hurts is a dual-threat star whose leadership, toughness, and red-zone rushing have powered
            the Eagles into perennial contention under a diverse, RPO-heavy offense.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Jalen Hurts Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Season</th><th>Age</th><th>Team</th><th>Lg</th><th>Pos</th>
                <th>G</th><th>GS</th><th>Cmp</th><th>Att</th><th>Cmp%</th>
                <th>Yds</th><th>TD</th><th>Int</th><th>Rate</th>
                <th>Sk</th><th>Y/A</th><th>AY/A</th><th>Y/G</th>
                <th>Rush</th><th>RuYds</th><th>RuTD</th><th>Awards</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((season) => (
                <tr key={season}>
                  <td>{season}</td><td>—</td><td>PHI</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/7a1lFQk6Q8U"
            title="Jalen Hurts Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JalenHurts;
