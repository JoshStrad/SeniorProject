import React from 'react';
import Header from '../../../components/Header';
import './giants.css'; // Player-specific CSS

const JaxsonDart = () => {
  const seasons = ['2025'];

  return (
    <>
      <Header />
      <main className="profile-container giants-aura">
        <h1>Jaxson Dart</h1>
        <p>Number: 2</p>
        <p>Height: 6'2"</p>
        <p>Age: 23</p>
        <p>Position: Quarterback</p>
        <p>College: Ole Miss</p>
        <p>Drafted: 2025 NFL Draft by the New York Giants</p>

        {/* Player Image */}
        <div className="player-image">
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4689114.png&w=350&h=254"
            alt="Jaxson Dart"
            className="profile-img"
          />
        </div>

        {/* Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>
            Jaxson Dart enters the NFL as the New York Giants’ new quarterback, bringing a strong arm, confidence, 
            and mobility from his standout career at Ole Miss. Known for his toughness and deep-ball ability, 
            Dart looks to energize the Giants’ offense and lead a new era in New York.
          </p>
        </div>

        {/* Blank Stats Table */}
        <div className="stats">
          <h2>Jaxson Dart Stats</h2>
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
                  <td>{season}</td><td>—</td><td>NYG</td><td>NFL</td><td>QB</td>
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
            src="https://www.youtube.com/embed/sVb6hZ2aA0A"
            title="Jaxson Dart Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default JaxsonDart;
