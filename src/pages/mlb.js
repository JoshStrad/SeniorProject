import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './nfl.css';

const mlbTeams = {
    NL: {
      East: [
        { name: 'Atlanta Braves', path: '/mlb/atlanta-braves', logo: '' },
        { name: 'Philadelphia Phillies', path: '/mlb/miami-dolphins', logo: '' },
        { name: 'Miami Marlins', path: '/mlb/new-england-patriots', logo: '' },
        { name: 'New York Mets', path: '/mlb/new-york-jets', logo: '' },
        { name: 'Washington Nationals', path: '/mlb/new-york-jets', logo: '' }
      ],
      Central: [
        { name: 'Milawkee Brewers', path: '/mlb/baltimore-ravens', logo: '' },
        { name: 'Cincinnati Reds', path: '/mlb/cincinnati-bengals', logo: '' },
        { name: 'Chicago Cubs', path: '/mlb/cleveland-browns', logo: '' },
        { name: 'Pittsburgh Pirates', path: '/mlb/new-york-jets', logo: '' },
        { name: 'St Louis Cardinals', path: '/mlb/pittsburgh-steelers', logo: '' },
      ],
      West: [
        { name: 'Arizona Diamondbacks', path: '/mlb/denver-broncos', logo: '' },
        { name: 'San Diego Pandres', path: '/mlb/kansas-city-chiefs', logo: '' },
        { name: 'San Francisco Giants', path: '/mlb/las-vegas-raiders', logo: '' },
        { name: 'Los Angeles Dodgers', path: '/mlb/la-chargers', logo: '' },
        { name: 'Colorado Rockies', path: '/mlb/new-york-jets', logo: '' }
      ],
    },
       AL: {
      East: [
        { name: 'New York Yankees', path: '/mlb/new-york-yankees', logo: '' },
        { name: 'Boston Redsox', path: '/mlb/boston-redsox', logo: '' },
        { name: 'Toronto Blue Jays', path: '/mlb/toronto-bluejays', logo: '' },
        { name: 'Tampa Bay Rays', path: '/mlb/tampa-bay-rays', logo: '' },
        { name: 'Baltimore Orioles', path: '/mlb/baltimore-orioles', logo: '' }
      ],
      Central: [
        { name: 'Detroit Tigers', path: '/nfl/baltimore-ravens', logo: '' },
        { name: 'Cleveland Guardians', path: '/nfl/cincinnati-bengals', logo: '' },
        { name: 'Kansas City Royals', path: '/nfl/cleveland-browns', logo: '' },
        { name: 'Minnesota Twins', path: '/nfl/new-york-jets', logo: '' },
        { name: 'Chicago White Sox', path: '/nfl/pittsburgh-steelers', logo: ''},
      ],
      West: [
        { name: 'Arizona Diamondbacks', path: '/nfl/denver-broncos', logo: '' },
        { name: 'San Diego Pandres', path: '/nfl/kansas-city-chiefs', logo: '' },
        { name: 'San Francisco Giants', path: '/nfl/las-vegas-raiders', logo: '' },
        { name: 'Los Angeles Dodgers', path: '/nfl/la-chargers', logo: '' },
        { name: 'Colorado Rockies', path: '/nfl/new-york-jets', logo: '' }
      ],
    },
  };


const MLB = () => {
  return (
    <>
      <Header />
      <main className="mlb-container">
        <h1>MLB Teams</h1>
        {Object.entries(mlbTeams).map(([conference, divisions]) => (
          <section key={conference} className="conference">
            <h2>{conference} Conference</h2>
            {Object.entries(divisions).map(([division, teams]) => (
              <div key={division} className="division">
                <h3>{division} Division</h3>
                <ul>
                  {teams.map((team) => (
                    <li key={team.name}>
                      <Link to={team.path} className="team-link">
                        <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
                        {team.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default MLB;