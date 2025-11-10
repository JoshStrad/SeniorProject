import React from 'react';
import Header from '../../../components/Header';
import './broncos.css';

const BoNix = () => {
  const seasons = ['2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container broncos-aura">
        <h1>Bo Nix</h1>
        <p>Number: 10</p>
        <p>Height: 6'2"</p>
        <p>Age: 25</p>
        <p>Position: Quarterback</p>
        <p>College: Oregon</p>
        <p>Drafted: 12th overall in the 2024 NFL Draft by the Denver Broncos</p>

        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/denver-broncos-bo-nix-min--2l07qz-z.png"
            alt="Bo Nix"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            Bo Nix brings veteran college experience and quick decision-making to the Denver Broncos. 
            His accuracy and mobility make him a strong fit in Sean Payton’s system as the franchise looks to rebuild its offense.
          </p>
        </div>

        <div className="stats">
          <h2>Bo Nix Stats</h2>
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
                  <td>{s}</td><td>—</td><td>DEN</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/NH7HzIh6Cxk"
            title="Bo Nix Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default BoNix;
