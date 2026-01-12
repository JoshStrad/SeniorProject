import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


const KristapsPorzingis = () => {
  return (
    <>
      <Header />
      <main className="profile-container">
        <h1>Kristaps Porzingis</h1>
        <p>Number: 8</p>
        <p>Height: 7'3"</p>
        <p>Age: 29</p>
        <p>Position: Power Foward</p>
        <p>Country: Latvia</p>
        <p>Drafted: 4th overall in the 2015 NBA Draft by the New York Knicks</p>

        {/* Player Image */}
        <div className="player-image">
          <img 
            src="https://cdn.statmuse.com/img/nba/players/boston-celtics-kristap-porzingis-copy-min--e4wmgjl7.png" 
            alt="Kristaps Porzingis" 
            className="profile-img" 
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>Kristaps Porzingis, known as the "Unicorn" for his rare combination of size, shooting, and mobility, is one of the most skilled big men in the NBA. 
            Standing at 7'3", he possesses an exceptional outside shooting touch, making him a versatile offensive weapon. 
            After playing for the New York Knicks and Dallas Mavericks, Porzingis joined the Boston Celtics, where he brings his scoring ability, rebounding, and shot-blocking skills. 
            His unique skill set has made him a matchup nightmare, capable of stretching the floor while protecting the rim.</p>
        </div>

        {/* Player Stats Placeholder */}
        <div className="stats">
          <h2>Player Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Points</th>
                <th>Assists</th>
                <th>Rebounds</th>
                <th>Steals</th>
                <th>Blocks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-2024</td>
                <td>XX</td>
                <td>XX</td>
                <td>XX</td>
                <td>XX</td>
                <td>XX</td>
              </tr>
              {/* Additional rows can be added later when you have the stats */}
            </tbody>
          </table>
        </div>

        {/* Highlight video (YouTube Short) */}
        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/"
            title="Jayson Tatum Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default KristapsPorzingis;