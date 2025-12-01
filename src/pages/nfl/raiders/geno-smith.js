import React from 'react';
import Header from '../../../components/Header';
import './raiders.css'; // Player-specific CSS

const GenoSmith = () => {
  const seasons = ['2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container raiders-aura">
        <h1>Geno Smith</h1>
        <p>Number: 7</p>
        <p>Height: 6'3"</p>
        <p>Age: 34</p>
        <p>Position: Quarterback</p>
        <p>College: West Virginia</p>
        <p>Drafted: 39th overall in the 2013 NFL Draft by the New York Jets</p>
        <p>Signed: Las Vegas Raiders (2025)</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15864.png&w=350&h=254"
            alt="Geno Smith"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Geno Smith brings veteran leadership and experience to the Las Vegas Raiders. 
            Known for his accuracy and composure, he joins the Silver and Black to stabilize the offense 
            and mentor a young roster while still showcasing his proven ability to make plays downfield.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Geno Smith Stats</h2>
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
                  <td>{Number(s) >= 2025 ? 'LV' : Number(s) >= 2020 ? 'SEA' : 'NYJ'}</td>
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
            src="https://www.youtube.com/embed/a8YExWQd7tM"
            title="Geno Smith Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default GenoSmith;
