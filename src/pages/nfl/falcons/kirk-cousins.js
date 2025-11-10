import React from 'react';
import Header from '../../../components/Header';
import './falcons.css'; // Player-specific CSS

const KirkCousins = () => {
  const seasons = [
    '2012','2013','2014','2015','2016','2017',
    '2018','2019','2020','2021','2022','2023',
    '2024','2025'
  ];

  return (
    <>
      <Header />
      <main className="profile-container falcons-aura">
        <h1>Kirk Cousins</h1>
        <p>Number: 18</p>
        <p>Height: 6'3"</p>
        <p>Age: 37</p>
        <p>Position: Quarterback</p>
        <p>College: Michigan State</p>
        <p>Drafted: 102nd overall (4th Rd) in the 2012 NFL Draft by Washington</p>
        <p>Signed: Atlanta Falcons (2024)</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/atlanta-falcons-kirk-cousins-min--2l07qz-z.png"
            alt="Kirk Cousins"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Kirk Cousins is a veteran distributor known for timing, accuracy, and command at the line. 
            After productive stints in Washington and Minnesota, he joined Atlanta in 2024 to pilot a 
            play-action-heavy attack with rhythm passing and red-zone efficiency.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Kirk Cousins Stats</h2>
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
                  <td>{
                    Number(s) >= 2024
                      ? 'ATL'
                      : Number(s) >= 2018
                      ? 'MIN'
                      : 'WAS'
                  }</td>
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

        {/* Highlight Video */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3nF5Vw2qjWc"
            title="Kirk Cousins Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default KirkCousins;
