import React from 'react';
import Header from '../../../components/Header';
import './lions.css'; // Player-specific CSS

const JaredGoff = () => {
  const seasons = ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];

  return (
    <>
      <Header />
      <main className="profile-container lions-aura">
        <h1>Jared Goff</h1>
        <p>Number: 16</p>
        <p>Height: 6'4"</p>
        <p>Age: 31</p>
        <p>Position: Quarterback</p>
        <p>College: California</p>
        <p>Drafted: 1st overall in the 2016 NFL Draft by the Los Angeles Rams</p>
        <p>Traded: Acquired by the Detroit Lions in 2021</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3046779.png&w=350&h=254"
            alt="Jared Goff"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Jared Goff revitalized his career in Detroit, becoming a steady and accurate presence for the Lions' explosive offense. 
            Known for his timing, command, and leadership, Goff helped guide Detroit back into playoff contention.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Jared Goff Stats</h2>
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
                  <td>{season}</td>
                  <td>—</td>
                  <td>{Number(season) >= 2021 ? 'DET' : 'LAR'}</td>
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
            src="https://www.youtube.com/embed/yfE4YkYyCB0"
            title="Jared Goff Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JaredGoff;
