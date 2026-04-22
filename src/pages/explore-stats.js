import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import './explore-stats.css';

const ExploreStats = () => {
  const nbaTeams = [
    { name: "Atlanta Hawks", link: "/nba/atlanta-hawks" },
    { name: "Boston Celtics", link: "/nba/boston-celtics" },
    { name: "Brooklyn Nets", link: "/nba/brooklyn-nets" },
    { name: "Charlotte Hornets", link: "/nba/charlotte-hornets" },
    { name: "Chicago Bulls", link: "/nba/chicago-bulls" },
    { name: "Cleveland Cavaliers", link: "/nba/clevaland-cavaliers" },
    { name: "Dallas Mavericks", link: "/nba/dallas-mavs" },
    { name: "Denver Nuggets", link: "/nba/denver-nuggets" },
    { name: "Detroit Pistons", link: "/nba/detroit-pistons" },
    { name: "Golden State Warriors", link: "/nba/gsw" },
    { name: "Houston Rockets", link: "/nba/houston-rockets" },
    { name: "Indiana Pacers", link: "/nba/indiana-pacers" },
    { name: "LA Clippers", link: "/nba/la-clippers" },
    { name: "Los Angeles Lakers", link: "/nba/la-lakers" },
    { name: "Memphis Grizzlies", link: "/nba/memphis-grizzlies" },
    { name: "Miami Heat", link: "/nba/miami-heat" },
    { name: "Milwaukee Bucks", link: "/nba/milawkee-bucks" },
    { name: "New Orleans Pelicans", link: "/nba/new-orleans-pelicans" },
    { name: "New York Knicks", link: "/nba/new-york-knicks" },
    { name: "Oklahoma City Thunder", link: "/nba/oklahoma-city-thunder" },
    { name: "Orlando Magic", link: "/nba/orlando-magic" },
    { name: "Philedelphia 76ers", link: "/nba/philadelphia-76ers" },
    { name: "Phoenix Suns", link: "/nba/phoenix-suns" },
    { name: "Portland Trail Blazers", link: "/nba/portland-trailblazers" },
    { name: "Sacremento Kings", link: "/nba/sacremento-kings" },
    { name: "San Antonio Spurs", link: "/nba/san-antonio-spurs" },
    { name: "Toronto Raptors", link: "/nba/toronto-raptors" },
    { name: "Utah Jazz", link: "/nba/utah-jazz" },
    { name: "Washington Wizards", link: "/nba/washington-wizards" },
  ];

  const nflTeams = [
    { name: "Arizona Cardinals", link: "/nfl/arizona-cardinals" },
    { name: "Atlanta Falcons", link: "/nfl/atlanta-falcons" },
    { name: "Baltimore Ravens", link: "/nfl/baltimore-ravens" },
    { name: "Buffalo Bills", link: "/nfl/buffalo-bills" },
    { name: "Carolina Panthers", link: "/nfl/caorlina-panthers" },
    { name: "Chicago Bears", link: "/nfl/chicago-bears" },
    { name: "Cincinnati Bengals", link: "/nfl/cincinnati-bengals" },
    { name: "Cleveland Browns", link: "/nfl/cleveland-browns" },
    { name: "Dallas Cowboys", link: "/nfl/dallas-cowboys" },
     { name: "Denver Broncos", link: "/nfl/denver-broncos" },
   { name: "Detroit Lions", link: "/nfl/detroit-lions" },
    { name: "Green Bay Packers", link: "/nfl/green-bay-packers" },
   { name: "Houston Texans", link: "/nfl/houston-texans" },
   { name: "Indianapolis Colts", link: "/nfl/indianapolis-colts" },
   { name: "Jacksonville Jaguars", link: "/nfl/jacksonville-jaguars" },
   { name: "Kansas City Chiefs", link: "/nfl/kansas-city-chiefs" },
   { name: "Las Vegas Raiders", link: "/nfl/las-vegas-raiders" },
    { name: "Los Angeles Chargers", link: "/nfl/la-chargers" },
   { name: "Los Angeles Rams", link: "/nfl/la-rams" },
   { name: "Miami Dolphins", link: "/nfl/miami-dolphins" },
   { name: "Minnesota Vikings", link: "/nfl/minnesota-vikings" },
    { name: "New England Patriots", link: "/nfl/new-england-patriots" },
   { name: "New Orleans Saints", link: "/nfl/new-orleans-saints" },
   { name: "New York Giants", link: "/nfl/new-york-giants" },
   { name: "New York Jets", link: "/nfl/new-york-jets" },
   { name: "Philadelphia Eagles", link: "/nfl/philadelphia-eagles" },
   { name: "Pittsburgh Steelers", link: "/nfl/pittsburgh-steelers" },
   { name: "San Francisco 49ers", link: "/nfl/san-francisco-49ers" },
   { name: "Seattle Seahawks", link: "/nfl/seattle-seahawks" },
   { name: "Tampa Bay Buccaneers", link: "/nfl/tampa-bay=bucaneers" },
   { name: "Tennessee Titans", link: "/nfl/tennesee-titans" },
   { name: "Washington Commanders", link: "/nfl/washington-commanders" },
  ];

  const mlbTeams = [
    { name: "Arizona Diamondbacks", link: "/mlb/ari" },
    { name: "Athletics", link: "/mlb/ath" },
    { name: "Atlanta Braves", link: "/mlb/atl" },
    { name: "Baltimore Orioles", link: "/mlb/bal" },
    { name: "Boston Redsox", link: "/mlb/bos" },
    { name: "Chicago Cubs", link: "/mlb/chc" },
    { name: "Chicago White Sox", link: "/mlb/cws" },
    { name: "Cincinnati Reds", link: "/mlb/cin" },
    { name: "Cleveland Guardians", link: "/mlb/cle" },
    { name: "Colorado Rockies", link: "/mlb/col" },
    { name: "Detroit Tigers", link: "/mlb/det" },
    { name: "Houston Astros", link: "/mlb/hou" },
    { name: "Kansas City Royals", link: "/mlb/kan" },
    { name: "Los Angeles Angels", link: "/mlb/laa" },
    { name: "Los Angeles Dodgers", link: "/mlb/lad" },
    { name: "Miami Marlins", link: "/mlb/mia" },
    { name: "Milawkee Brewers", link: "/mlb/mil" },
    { name: "Minnesota Twins", link: "/mlb/minn" },
    { name: "New York Mets", link: "/mlb/nym" },
    { name: "New York Yankees", link: "/mlb/nyy" },
    { name: "Philadelphia Phillies", link: "/mlb/phi" },
    { name: "Pittsburgh Pirates", link: "/mlb/pit" },
    { name: "San Diego Padres", link: "/mlb/sd" },
    { name: "San Francisco Giants", link: "/mlb/sf" },
    { name: "Seattle Mariners", link: "/mlb/sea" },
    { name: "St. Louis Cardinals", link: "/mlb/stl" },
    { name: "Tampa Bay Rays", link: "/mlb/tb" },
    { name: "Texas Rangers", link: "/mlb/tex" },
    { name: "Toronto Blue Jays", link: "/mlb/tor" },
    { name: "Washington Nationals", link: "/mlb/wsh" },
  ];

  return (
    <div>
      <Header /> {}
      <main className="explore-stats">
        <h1>Explore Player Stats</h1>
        <p>Select a team from your favorite league to view player statistics.</p>

        {}
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
      <Footer /> {}
    </div>
  );
};

export default ExploreStats;
