import React from 'react';
import Header from '../../../components/Header';
import './panthers.css'; // Player-specific CSS

const BryceYoung = () => {
  const seasons = ['2023', '2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container panthers-aura">
        <h1>Bryce Young</h1>
        <p>Number: 9</p>
        <p>Height: 5'10"</p>
        <p>Age: 24</p>
        <p>Position: Quarterback</p>
        <p>College: Alabama</p>
        <p>Drafted: 1st overall in the 2023 NFL Draft by the Carolina Panthers</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/carolina-panthers-bryce-young-min--2l07qz-z.png"
            alt="Bryce Young"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Bryce Young was selected first overall by the Panthers in 2023, bringing elite accuracy, 
            leadership, and pocket awareness from his decorated Alabama career. Known for his composure under pressure 
            and quick processing, Young is developing as Carolina’s long-term franchise quarterback.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Bryce Young Stats</h2>
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
                  <td>{season}</td><td>—</td><td>CAR</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/VJhG0VqX95w"
            title="Bryce Young Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default BryceYoung;
