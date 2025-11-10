import React from 'react';
import Header from '../../../components/Header';
import './seahawks.css'; // Player-specific CSS

const SamDarnold = () => {
  const seasons = ['2018','2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container seahawks-aura">
        <h1>Sam Darnold</h1>
        <p>Number: 14</p>
        <p>Height: 6'3"</p>
        <p>Age: 28</p>
        <p>Position: Quarterback</p>
        <p>College: USC</p>
        <p>Drafted: 3rd overall in the 2018 NFL Draft by the New York Jets</p>
        <p>Signed: Seattle Seahawks (2024)</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/seattle-seahawks-sam-darnold-min--2l07qz-z.png"
            alt="Sam Darnold"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Sam Darnold brings starting experience and arm talent to Seattle’s new-look offense.
            After previous stops in New York, Carolina, and San Francisco, Darnold aims to prove 
            himself as a reliable veteran leader and spark the Seahawks’ passing attack.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Sam Darnold Stats</h2>
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
                  <td>{season}</td>
                  <td>—</td>
                  <td>
                    {Number(season) >= 2024
                      ? 'SEA'
                      : Number(season) >= 2023
                      ? 'SF'
                      : Number(season) >= 2021
                      ? 'CAR'
                      : 'NYJ'}
                  </td>
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
            src="https://www.youtube.com/embed/LOxz8cKqHao"
            title="Sam Darnold Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default SamDarnold;
