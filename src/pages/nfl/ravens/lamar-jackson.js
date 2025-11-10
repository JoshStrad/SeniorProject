import React from 'react';
import Header from '../../../components/Header';
import './ravens.css'; // Player-specific CSS

const LamarJackson = () => {
  const seasons = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container ravens-aura">
        <h1>Lamar Jackson</h1>
        <p>Number: 8</p>
        <p>Height: 6'2"</p>
        <p>Age: 28</p>
        <p>Position: Quarterback</p>
        <p>College: Louisville</p>
        <p>Drafted: 32nd overall in the 2018 NFL Draft by the Baltimore Ravens</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://cdn.statmuse.com/img/nfl/players/baltimore-ravens-lamar-jackson-min--2l07qz-z.png"
            alt="Lamar Jackson"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Lamar Jackson is one of the most electrifying players in NFL history — a former MVP and dual-threat quarterback 
            who redefined the position with his speed, vision, and playmaking ability. As the leader of the Baltimore Ravens, 
            he continues to deliver highlight performances with both his arm and his legs.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Lamar Jackson Stats</h2>
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
                  <td>—</td><td>BAL</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/GW6Tr3bKXos"
            title="Lamar Jackson Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default LamarJackson;
