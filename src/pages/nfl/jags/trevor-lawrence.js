import React from 'react';
import Header from '../../../components/Header';
import './jags.css'; // Player-specific CSS

const TrevorLawrence = () => {
  const seasons = ['2021', '2022', '2023', '2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container jaguars-aura">
        <h1>Trevor Lawrence</h1>
        <p>Number: 16</p>
        <p>Height: 6'6"</p>
        <p>Age: 26</p>
        <p>Position: Quarterback</p>
        <p>College: Clemson</p>
        <p>Drafted: 1st overall in the 2021 NFL Draft by the Jacksonville Jaguars</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/jacksonville-jaguars-trevor-lawrence-min--2l07qz-z.png"
            alt="Trevor Lawrence"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Trevor Lawrence, the face of the Jaguars franchise, combines elite size, touch, and leadership. 
            Since entering the league as the top overall pick in 2021, Lawrence has developed into one of the 
            AFC’s most promising young quarterbacks.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Trevor Lawrence Stats</h2>
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
                  <td>{season}</td><td>—</td><td>JAX</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/qRWfDRCCFqA"
            title="Trevor Lawrence Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default TrevorLawrence;
