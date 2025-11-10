import React from 'react';
import Header from '../../../components/Header';
import './bears.css'; // Player-specific CSS

const CalebWilliams = () => {
  const seasons = ['2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container bears-aura">
        <h1>Caleb Williams</h1>
        <p>Number: 13</p>
        <p>Height: 6'1"</p>
        <p>Age: 23</p>
        <p>Position: Quarterback</p>
        <p>College: USC</p>
        <p>Drafted: 1st overall in the 2024 NFL Draft by the Chicago Bears</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/chicago-bears-caleb-williams-min--2l07qz-z.png"
            alt="Caleb Williams"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Caleb Williams enters the NFL with sky-high expectations as one of the most dynamic prospects in recent memory. 
            Known for his arm talent, creativity, and ability to make plays off-script, Williams looks to usher in a new era of Chicago Bears football.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Caleb Williams Stats</h2>
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
                  <td>{season}</td><td>—</td><td>CHI</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/4LIDc2NoPuQ"
            title="Caleb Williams Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CalebWilliams;
