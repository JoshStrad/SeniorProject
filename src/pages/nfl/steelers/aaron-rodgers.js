import React from 'react';
import Header from '../../../components/Header';
import './steelers.css'; // Player-specific CSS

const AaronRodgers = () => {
  const seasons = ['2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container steelers-aura">
        <h1>Aaron Rodgers</h1>
        <p>Number: 12</p>
        <p>Height: 6'2"</p>
        <p>Age: 41</p>
        <p>Position: Quarterback</p>
        <p>College: California</p>
        <p>Drafted: 24th overall in the 2005 NFL Draft by the Green Bay Packers</p>
        <p>Signed: Acquired by the Pittsburgh Steelers in 2024</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/pittsburgh-steelers-aaron-rodgers-min--2l07qz-z.png"
            alt="Aaron Rodgers"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Aaron Rodgers brings Hall of Fame experience to the Pittsburgh Steelers offense. 
            Known for his pre-snap mastery, precision, and leadership, Rodgers joins a young roster 
            looking to return to playoff form in the AFC North.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Aaron Rodgers Stats</h2>
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
              {seasons.map((season) => (
                <tr key={season}>
                  <td>{season}</td>
                  <td>—</td><td>PIT</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/X8vxP6LGLnc"
            title="Aaron Rodgers Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default AaronRodgers;
