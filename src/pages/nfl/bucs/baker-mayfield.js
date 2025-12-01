import React from 'react';
import Header from '../../../components/Header';
import './bucs.css'; // Player-specific CSS

const BakerMayfield = () => {
  const seasons = ['2018','2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container bucs-aura">
        <h1>Baker Mayfield</h1>
        <p>Number: 6</p>
        <p>Height: 6'1"</p>
        <p>Age: 30</p>
        <p>Position: Quarterback</p>
        <p>College: Oklahoma</p>
        <p>Drafted: 1st overall in the 2018 NFL Draft by the Cleveland Browns</p>
        <p>Signed: Tampa Bay Buccaneers (2023)</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3052587.png&w=350&h=254"
            alt="Baker Mayfield"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Baker Mayfield revived his career in Tampa Bay, showcasing the fire, toughness, and competitive edge 
            that defined his early success in Cleveland. Known for his leadership and quick decision-making, 
            Mayfield has established himself as a reliable veteran presence for the Buccaneers offense.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Baker Mayfield Stats</h2>
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
                    {Number(season) >= 2023
                      ? 'TAM'
                      : Number(season) >= 2022
                      ? 'LAR'
                      : Number(season) >= 2021
                      ? 'CLE'
                      : 'CLE'}
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
            src="https://www.youtube.com/embed/VB_lGkI2i_8"
            title="Baker Mayfield Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default BakerMayfield;
