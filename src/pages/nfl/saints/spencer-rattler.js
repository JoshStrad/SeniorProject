import React from 'react';
import Header from '../../../components/Header';
import './saints.css'; // Player-specific CSS

const SpencerRattler = () => {
  const seasons = ['2025'];

  return (
    <>
      <Header />
      <main className="profile-container saints-aura">
        <h1>Spencer Rattler</h1>
        <p>Number: 15</p>
        <p>Height: 6'1"</p>
        <p>Age: 24</p>
        <p>Position: Quarterback</p>
        <p>College: South Carolina</p>
        <p>Drafted: 2025 NFL Draft by the New Orleans Saints</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/new-orleans-saints-spencer-rattler-min--2l07qz-z.png"
            alt="Spencer Rattler"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Spencer Rattler enters the NFL with a strong arm and confident play style that fits perfectly 
            in the Saints’ vertical passing system. After a productive career at South Carolina, 
            Rattler looks to bring a spark to New Orleans and develop as their quarterback of the future.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Spencer Rattler Stats</h2>
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
                  <td>{season}</td><td>—</td><td>NO</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/LNBxj5_Z3SY"
            title="Spencer Rattler Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default SpencerRattler;
