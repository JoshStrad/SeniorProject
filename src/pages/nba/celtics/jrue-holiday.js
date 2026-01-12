import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


const JrueHoliday = () => {
  return (
    <>
      <Header />
      <main className="profile-container">
        <h1>Jrue Holiday</h1>
        <p>Number: 4</p>
        <p>Height: 6'4"</p>
        <p>Age: 33</p>
        <p>Position: Point Guard</p>
        <p>College: UCLA</p>
        <p>Drafted: 17th overall in the 2009 NBA Draft by the Philadelphia 76ers</p>

        {/* Player Image */}
        <div className="player-image">
          <img 
            src="https://cdn.statmuse.com/img/nba/players/milwaukee-bucks-jrue-holiday2022-min--yqogaeqe.png" 
            alt="Jrue Holiday" 
            className="profile-img" 
          />
        </div>

        {/* Player Bio */}
        <div className="bio">
          <h2>Bio</h2>
          <p>Jrue Holiday is a dynamic point guard known for his elite defensive skills, playmaking ability, and leadership. A two-time NBA All-Defensive Team selection, 
            Holiday is widely regarded as one of the best perimeter defenders in the league. After stints with the Philadelphia 76ers, New Orleans Pelicans, and Milwaukee Bucks, 
            he joined the Boston Celtics, bringing his championship experience and all-around game to the team. 
            Holiday’s basketball IQ, scoring versatility, and clutch performances have made him a key asset for any team he plays for..</p>
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

export default JrueHoliday;
