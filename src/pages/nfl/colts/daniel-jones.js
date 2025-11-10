import React from 'react';
import Header from '../../../components/Header';
import './colts.css';

const DanielJonesColts = () => {
  const seasons = ['2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container colts-aura">
        <h1>Daniel Jones</h1>
        <p>Number: 8</p>
        <p>Height: 6'5"</p>
        <p>Age: 28</p>
        <p>Position: Quarterback</p>
        <p>College: Duke</p>
        <p>Drafted: 6th overall in the 2019 NFL Draft by the New York Giants</p>
        <p>Acquired: Indianapolis Colts (custom roster)</p>

        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/indianapolis-colts-daniel-jones-min--2l07qz-z.png"
            alt="Daniel Jones"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            Daniel Jones brings mobility and vertical-play action chops to Indianapolis in this custom AFC South setup.
          </p>
        </div>

        <div className="stats">
          <h2>Daniel Jones Stats</h2>
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
                  <td>{s}</td>
                  <td>—</td>
                  <td>{Number(s) >= 2025 ? 'IND' : 'NYG'}</td>
                  <td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/DQ0kFv1e1eI"
            title="Daniel Jones Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default DanielJonesColts;
