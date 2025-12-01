import React from 'react';
import Header from '../../../components/Header';
import './titans.css';

const CamWard = () => {
  const seasons = ['2025'];

  return (
    <>
      <Header />
      <main className="profile-container titans-aura">
        <h1>Cam Ward</h1>
        <p>Number: 3</p>
        <p>Height: 6'2"</p>
        <p>Age: 23</p>
        <p>Position: Quarterback</p>
        <p>College: Miami (FL)</p>
        <p>Drafted: 2025 NFL Draft — Tennessee Titans</p>

        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4688380.png&w=350&h=254"
            alt="Cam Ward"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            Cam Ward arrives in Nashville with a live arm and off-script playmaking, aiming to energize the Titans offense.
          </p>
        </div>

        <div className="stats">
          <h2>Cam Ward Stats</h2>
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
                  <td>{s}</td><td>—</td><td>TEN</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/y2NaE5iD0sI"
            title="Cam Ward Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CamWard;
