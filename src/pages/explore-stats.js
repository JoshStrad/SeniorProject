import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer';
import '../components/Header.css'
import '../components/Footer.css'
import './explore-stats.css';

const ExploreStats = () => {
  const nbaTeams = [
    { name: "Atlanta Hawks", link: "/nba/heat" },
    { name: "Boston Celtics", link: "/nba/boston-celtics" },
    { name: "Brooklyn Nets", link: "/nba/heat" },
    { name: "Charlotte Hornets", link: "/nba/heat" },
    { name: "Chicago Bulls", link: "/nba/heat" },
    { name: "Cleveland Cavaliers", link: "/nba/lakers" },
    { name: "Dallas Mavericks", link: "/nba/heat" },
    { name: "Denver Nuggets", link: "/nba/heat" },
    { name: "Detroit Pistons", link: "/nba/heat" },
    { name: "Golden State Warriors", link: "/nba/heat" },
    { name: "Houston Rockets", link: "/nba/heat" },
    { name: "Indiana Pacers", link: "/nba/heat" },
    { name: "LA Clippers", link: "/nba/heat" },
    { name: "Los Angeles Lakers", link: "/nba/heat" },
    { name: "Memphis Grizzlies", link: "/nba/heat" },
    { name: "Miami Heat", link: "/nba/heat" },
    { name: "Milwaukee Bucks", link: "/nba/heat" },
    { name: "New Orleans Pelicans", link: "/nba/heat" },
    { name: "New York Knicks", link: "/nba/heat" },
    { name: "Oklahoma City Thunder", link: "/nba/heat" },
    { name: "Orlando Magic", link: "/nba/heat" },
    { name: "Philedelphia 76ers", link: "/nba/heat" },
    { name: "Phoenix Suns", link: "/nba/heat" },
    { name: "Portland Trail Blazers", link: "/nba/heat" },
    { name: "Sacremento Kings", link: "/nba/heat" },
    { name: "San Antonio Spurs", link: "/nba/heat" },
    { name: "Toronto Raptors", link: "/nba/heat" },
    { name: "Utah Jazz", link: "/nba/heat" },
    { name: "Washington Wizards", link: "/nba/heat" },
    // Add more NBA teams here
  ];

  const nflTeams = [
    { name: "New England Patriots", link: "/nfl/patriots" },
    { name: "Dallas Cowboys", link: "/nfl/cowboys" },
    { name: "Green Bay Packers", link: "/nfl/packers" },
    // Add more NFL teams here
  ];

  const mlbTeams = [
    { name: "New York Yankees", link: "/mlb/yankees" },
    { name: "Los Angeles Dodgers", link: "/mlb/dodgers" },
    { name: "Boston Red Sox", link: "/mlb/redsox" },
    // Add more MLB teams here
  ];

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <main className="explore-stats-content">
        <h1>Explore Player Stats</h1>
        <p>Select a team from your favorite league to view player statistics.</p>

        {/* NBA Teams */}
        <div className="league-section">
          <h2>NBA Teams</h2>
          <ul>
            {nbaTeams.map((team) => (
              <li key={team.name}>
                <a href={team.link}>{team.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* NFL Teams */}
        <div className="league-section">
          <h2>NFL Teams</h2>
          <ul>
            {nflTeams.map((team) => (
              <li key={team.name}>
                <a href={team.link}>{team.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* MLB Teams */}
        <div className="league-section">
          <h2>MLB Teams</h2>
          <ul>
            {mlbTeams.map((team) => (
              <li key={team.name}>
                <a href={team.link}>{team.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default ExploreStats;
