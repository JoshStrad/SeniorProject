import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './jaylen-brown.css'; // Import the player-specific CSS

const DerrickWhite = () => {
  return (
    <>
      <Header />
      <main className="profile-container">
        <h1>Derrick White</h1>
        <p>Number: 9</p>
        <p>Height: 6'4"</p>
        <p>Age: 29</p>
        <p>Position: Shooting Guard</p>
        <p>College: Colorado</p>
        <p>Drafted: 29th overall in the 2017 NBA Draft by the San Antonio Spurs</p>

        {/* Player Image */}
        <div className="player-image">
          <img 
            src="https://cdn.statmuse.com/img/nba/players/boston-celtics-derrick-white2023-copy-min-1--w9cpqi_k.png" 
            alt="Derrick White" 
            className="profile-img" 
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>Derrick White is a versatile guard known for his defensive prowess, playmaking, and ability to contribute on both ends of the floor. 
            After starting his career with the San Antonio Spurs, White joined the Boston Celtics, where he quickly became an integral part of the team's rotation. 
            With a smooth scoring touch, quick decision-making, and strong perimeter defense, White has earned a reputation as one of the league's most well-rounded guards. 
            His leadership and hustle make him a valuable asset in clutch moments.</p>
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

export default DerrickWhite;