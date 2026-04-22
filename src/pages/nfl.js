import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './nfl.css';


// NFL data grouped by conference and division
const nflTeams = {
  AFC: {
    East: [
      { name: 'Buffalo Bills', path: '/nfl/buffalo-bills', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Miami Dolphins', path: '/nfl/miami-dolphins', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/mia.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'New England Patriots', path: '/nfl/new-england-patriots', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'New York Jets', path: '/nfl/new-york-jets', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyj.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
    North: [
      { name: 'Baltimore Ravens', path: '/nfl/baltimore-ravens', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Cincinnati Bengals', path: '/nfl/cincinnati-bengals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Cleveland Browns', path: '/nfl/cleveland-browns', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Pittsburgh Steelers', path: '/nfl/pittsburgh-steelers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
    South: [
      { name: 'Houston Texans', path: '/nfl/houston-texans', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/hou.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Indianapolis Colts', path: '/nfl/indianapolis-colts', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Jacksonville Jaguars', path: '/nfl/jacksonville-jaguars', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Tennessee Titans', path: '/nfl/tennessee-titans', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ten.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
    West: [
      { name: 'Denver Broncos', path: '/nfl/denver-broncos', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/den.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Kansas City Chiefs', path: '/nfl/kansas-city-chiefs', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Las Vegas Raiders', path: '/nfl/las-vegas-raiders', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lv.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Los Angeles Chargers', path: '/nfl/la-chargers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
  },
  NFC: {
    East: [
      { name: 'Dallas Cowboys', path: '/nfl/dallas-cowboys', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'New York Giants', path: '/nfl/new-york-giants', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Philadelphia Eagles', path: '/nfl/philadelphia-eagles', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/phi.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Washington Commanders', path: '/nfl/washington-commanders', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/wsh.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
    North: [
      { name: 'Chicago Bears', path: '/nfl/chicago-bears', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Detroit Lions', path: '/nfl/detroit-lions', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Green Bay Packers', path: '/nfl/green-bay-packers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Minnesota Vikings', path: '/nfl/minnesota-vikings', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/min.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
    South: [
      { name: 'Atlanta Falcons', path: '/nfl/atlanta-falcons', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Carolina Panthers', path: '/nfl/carolina-panthers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/car.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'New Orleans Saints', path: '/nfl/new-orleans-saints', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Tampa Bay Buccaneers', path: '/nfl/tampa-bay-buccaneers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
    West: [
      { name: 'Arizona Cardinals', path: '/nfl/arizona-cardinals', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Los Angeles Rams', path: '/nfl/la-rams', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'San Francisco 49ers', path: '/nfl/san-francisco-49ers', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
      { name: 'Seattle Seahawks', path: '/nfl/seattle-seahawks', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png&scale=crop&cquality=40&location=origin&w=80&h=80' },
    ],
  },
};

const NFL = () => {
  return (
    <>
      <Header />
      <main className="nfl-container">
        <h1>NFL Teams</h1>
        {Object.entries(nflTeams).map(([conference, divisions]) => (
          <section key={conference} className="conference">
            <h2>{conference} Conference</h2>
            {Object.entries(divisions).map(([division, teams]) => (
              <div key={division} className="division">
                <h3>{division} Division</h3>
                <ul>
                  {teams.map((team) => {
                    const auraClass = team.name.toLowerCase().replace(/\s+/g, '-') + '-aura';
                    return (
                      <li key={team.name} className={`team-card ${auraClass}`}>
                        <Link to={team.path} className="team-link">
                          <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
                          {team.name}
                        </Link>
                      </li>
                    );
                  })}
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

export default NFL;
