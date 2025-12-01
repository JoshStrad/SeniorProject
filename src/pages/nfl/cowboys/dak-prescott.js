import React from 'react';
import Header from '../../../components/Header';
import './cowboys.css'; // Player-specific CSS

const DakPrescott = () => {
  const seasons = ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container cowboys-aura">
        <h1>Dak Prescott</h1>
        <p>Number: 4</p>
        <p>Height: 6'2"</p>
        <p>Age: 32</p>
        <p>Position: Quarterback</p>
        <p>College: Mississippi State</p>
        <p>Drafted: 135th overall in the 2016 NFL Draft by the Dallas Cowboys</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src=""
            alt="Dak Prescott"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Dak Prescott has been the cornerstone of the Dallas Cowboys offense since his rookie season. 
            Known for his leadership, accuracy, and dual-threat ability, Prescott has developed into one of the league’s 
            most efficient and composed quarterbacks, consistently leading Dallas to playoff contention.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Dak Prescott Stats</h2>
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
                  <td>{season}</td><td>—</td><td>DAL</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/bGgcfZ4X4nI"
            title="Dak Prescott Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default DakPrescott;
