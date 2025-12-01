import React from 'react';
import Header from '../../../components/Header';
import './49ers.css'; // Player-specific CSS

const BrockPurdy = () => {
  const seasons = ['2022', '2023', '2024', '2025'];

  return (
    <>
      <Header />
      <main className="profile-container niners-aura">
        <h1>Brock Purdy</h1>
        <p>Number: 13</p>
        <p>Height: 6'1"</p>
        <p>Age: 25</p>
        <p>Position: Quarterback</p>
        <p>College: Iowa State</p>
        <p>Drafted: 262nd overall (Mr. Irrelevant) in the 2022 NFL Draft by the San Francisco 49ers</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361741.png&w=350&h=254"
            alt="Brock Purdy"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Brock Purdy quickly became the heart of the 49ers’ offense after being the final pick in the 2022 draft. 
            Known for his poise, quick processing, and accuracy in Kyle Shanahan’s system, Purdy helped San Francisco 
            reach the top of the NFC with elite decision-making and leadership. His rise from “Mr. Irrelevant” to 
            franchise quarterback is one of the NFL’s most inspiring stories.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Brock Purdy Stats</h2>
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
                  <td>{season}</td><td>—</td><td>SF</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/8lC4mKoqyNw"
            title="Brock Purdy Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default BrockPurdy;
