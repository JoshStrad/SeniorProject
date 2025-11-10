import React from 'react';
import Header from '../../../components/Header';
import './vikings.css'; // Player-specific CSS

const JJMcCarthy = () => {
  const seasons = ['2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container vikings-aura">
        <h1>J.J. McCarthy</h1>
        <p>Number: 9</p>
        <p>Height: 6'3"</p>
        <p>Age: 22</p>
        <p>Position: Quarterback</p>
        <p>College: Michigan</p>
        <p>Drafted: 10th overall in the 2024 NFL Draft by the Minnesota Vikings</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/minnesota-vikings-j-j-mccarthy-min--2l07qz-z.png"
            alt="J.J. McCarthy"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            J.J. McCarthy enters the NFL after a championship-winning career at Michigan, 
            bringing leadership, mobility, and precision to the Minnesota Vikings offense. 
            Known for his poise under pressure and accuracy on the move, McCarthy is viewed as the future of the franchise.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>J.J. McCarthy Stats</h2>
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
                  <td>{season}</td><td>—</td><td>MIN</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/RYCOsS66yec"
            title="J.J. McCarthy Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JJMcCarthy;
