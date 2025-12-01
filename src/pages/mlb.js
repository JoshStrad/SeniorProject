import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './nfl.css';

const mlbTeams = {
    NL: {
      East: [
        { name: 'Atlanta Braves', path: '/mlb/atlanta-braves', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/atl.png&h=200&w=200' },
        { name: 'Philadelphia Phillies', path: '/mlb/miami-dolphins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/phi.png&h=200&w=200' },
        { name: 'Miami Marlins', path: '/mlb/new-england-patriots', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mia.png&h=200&w=200' },
        { name: 'New York Mets', path: '/mlb/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nym.png&h=200&w=200' },
        { name: 'Washington Nationals', path: '/mlb/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/wsh.png&h=200&w=200' }
      ],
      Central: [
        { name: 'Milawkee Brewers', path: '/mlb/baltimore-ravens', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/mil.png&h=200&w=200' },
        { name: 'Cincinnati Reds', path: '/mlb/cincinnati-bengals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cin.png&h=200&w=200' },
        { name: 'Chicago Cubs', path: '/mlb/cleveland-browns', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chc.png&h=200&w=200' },
        { name: 'Pittsburgh Pirates', path: '/mlb/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/pit.png&h=200&w=200' },
        { name: 'St Louis Cardinals', path: '/mlb/pittsburgh-steelers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/stl.png&h=200&w=200' },
      ],
      West: [
        { name: 'Arizona Diamondbacks', path: '/mlb/denver-broncos', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ari.png&h=200&w=200' },
        { name: 'San Diego Pandres', path: '/mlb/kansas-city-chiefs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sd.png&h=200&w=200' },
        { name: 'San Francisco Giants', path: '/mlb/las-vegas-raiders', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sf.png&h=200&w=200' },
        { name: 'Los Angeles Dodgers', path: '/mlb/la-chargers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/lad.png&h=200&w=200' },
        { name: 'Colorado Rockies', path: '/mlb/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/col.png&h=200&w=200' }
      ],
    },
       AL: {
      East: [
        { name: 'New York Yankees', path: '/mlb/new-york-yankees', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/nyy.png&h=200&w=200' },
        { name: 'Boston Redsox', path: '/mlb/boston-redsox', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bos.png&h=200&w=200' },
        { name: 'Toronto Blue Jays', path: '/mlb/toronto-bluejays', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tor.png&h=200&w=200' },
        { name: 'Tampa Bay Rays', path: '/mlb/tampa-bay-rays', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tb.png&h=200&w=200' },
        { name: 'Baltimore Orioles', path: '/mlb/baltimore-orioles', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/bal.png&h=200&w=200' }
      ],
      Central: [
        { name: 'Detroit Tigers', path: '/nfl/baltimore-ravens', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/det.png&h=200&w=200' },
        { name: 'Cleveland Guardians', path: '/nfl/cincinnati-bengals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/cle.png&h=200&w=200' },
        { name: 'Kansas City Royals', path: '/nfl/cleveland-browns', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/kc.png&h=200&w=200' },
        { name: 'Minnesota Twins', path: '/nfl/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/min.png&h=200&w=200' },
        { name: 'Chicago White Sox', path: '/nfl/pittsburgh-steelers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/chw.png&h=200&w=200'},
      ],
      West: [
        { name: 'Oakland Athletics', path: '/nfl/denver-broncos', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/ath.png&h=200&w=200' },
        { name: 'Houston Astros', path: '/nfl/kansas-city-chiefs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png&h=200&w=200' },
        { name: 'Los Angeles Angels', path: '/nfl/las-vegas-raiders', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/laa.png&h=200&w=200' },
        { name: 'Seattle Mariners', path: '/nfl/la-chargers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/sea.png&h=200&w=200' },
        { name: 'Texans Rangers', path: '/nfl/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/tex.png&h=200&w=200' }
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