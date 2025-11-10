import React from 'react';
import Header from '../../../components/Header';
import './dolphins.css'; // Player-specific CSS

const TuaTagovailoa = () => {
  return (
    <>
      <Header />
      <main className="profile-container dolphins-aura">
        <h1>Tua Tagovailoa</h1>
        <p>Number: 1</p>
        <p>Height: 6'1"</p>
        <p>Age: 27</p>
        <p>Position: Quarterback</p>
        <p>College: Alabama</p>
        <p>Drafted: 5th overall in the 2020 NFL Draft by the Miami Dolphins</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/miami-dolphins-tua-tagovailoa-min--2l07qz-z.png"
            alt="Tua Tagovailoa"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Tua Tagovailoa has become one of the league’s most efficient passers under head coach Mike McDaniel, 
            operating a high-speed offense built on precision, rhythm, and timing. Known for his accuracy and quick release, 
            Tua has led the Dolphins to one of the NFL’s most explosive passing attacks.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Tua Tagovailoa Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Age</th>
                <th>Team</th>
                <th>Lg</th>
                <th>Pos</th>
                <th>G</th>
                <th>GS</th>
                <th>Cmp</th>
                <th>Att</th>
                <th>Cmp%</th>
                <th>Yds</th>
                <th>TD</th>
                <th>Int</th>
                <th>Rate</th>
                <th>Sk</th>
                <th>Y/A</th>
                <th>AY/A</th>
                <th>Y/G</th>
                <th>Rush</th>
                <th>RuYds</th>
                <th>RuTD</th>
                <th>Awards</th>
              </tr>
            </thead>
            <tbody>
              {['2020','2021','2022','2023','2024','2025'].map((season) => (
                <tr key={season}>
                  <td>{season}</td>
                  <td>—</td><td>MIA</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/K9BzKAVm5OY"
            title="Tua Tagovailoa Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default TuaTagovailoa;
