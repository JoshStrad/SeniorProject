import React from 'react';
import Header from '../../../components/Header';
import './texans.css';

const CJStroud = () => {
  const seasons = ['2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container texans-aura">
        <h1>C.J. Stroud</h1>
        <p>Number: 7</p>
        <p>Height: 6'3"</p>
        <p>Age: 23</p>
        <p>Position: Quarterback</p>
        <p>College: Ohio State</p>
        <p>Drafted: 2nd overall in the 2023 NFL Draft by the Houston Texans</p>

        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432577.png&w=350&h=254"
            alt="C.J. Stroud"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            C.J. Stroud is a precision passer who brought immediate stability to Houston with timing, touch, and poise.
          </p>
        </div>

        <div className="stats">
          <h2>C.J. Stroud Stats</h2>
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
              {seasons.map((s) => (
                <tr key={s}>
                  <td>{s}</td><td>—</td><td>HOU</td><td>NFL</td><td>QB</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td>—</td>
                  <td>—</td><td>—</td><td>—</td><td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="highlight-video">
          <iframe
            src="https://www.youtube.com/embed/1zRzZb4r0iU"
            title="C.J. Stroud Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CJStroud;
