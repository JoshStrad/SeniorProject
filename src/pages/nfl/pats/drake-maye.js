import React from 'react';
import Header from '../../../components/Header';
import './pats.css'; // Player-specific CSS

const DrakeMaye = () => {
  const seasons = ['2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container patriots-aura">
        <h1>Drake Maye</h1>
        <p>Number: 10</p>
        <p>Height: 6'4"</p>
        <p>Age: 22</p>
        <p>Position: Quarterback</p>
        <p>College: North Carolina</p>
        <p>Drafted: 3rd overall in the 2024 NFL Draft by the New England Patriots</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/new-england-patriots-drake-maye-min--2l07qz-z.png"
            alt="Drake Maye"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Drake Maye enters the NFL as one of the most polished quarterback prospects in recent memory. 
            Known for his poise, arm strength, and leadership at North Carolina, he was selected third overall 
            by the New England Patriots to usher in a new era at quarterback in Foxborough.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Drake Maye Stats</h2>
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
                  <td>—</td><td>NE</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/yiVhFy4VfO0"
            title="Drake Maye Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default DrakeMaye;
