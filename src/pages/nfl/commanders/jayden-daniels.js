import React from 'react';
import Header from '../../../components/Header';
import './commanders.css'; // Player-specific CSS

const JaydenDaniels = () => {
  const seasons = ['2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container commanders-aura">
        <h1>Jayden Daniels</h1>
        <p>Number: 5</p>
        <p>Height: 6'4"</p>
        <p>Age: 23</p>
        <p>Position: Quarterback</p>
        <p>College: LSU</p>
        <p>Drafted: 2nd overall in the 2024 NFL Draft by the Washington Commanders</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/washington-commanders-jayden-daniels-min--2l07qz-z.png"
            alt="Jayden Daniels"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Jayden Daniels, the 2023 Heisman Trophy winner, brings elite speed and deep-ball accuracy 
            to the Washington Commanders offense. His playmaking ability and dual-threat talent make him 
            one of the most exciting young quarterbacks in the league.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Jayden Daniels Stats</h2>
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
                  <td>{season}</td><td>—</td><td>WAS</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/jkSY0h5CteE"
            title="Jayden Daniels Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JaydenDaniels;
