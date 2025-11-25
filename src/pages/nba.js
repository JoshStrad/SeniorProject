import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './nba.css';

// NBA teams data grouped by conference and division
const nbaTeams = {
  Eastern: {
    Atlantic: [
      { name: 'Boston Celtics', path: '/nba/boston-celtics', logo: 'https://www.pngmart.com/files/23/Celtics-Logo-PNG-Isolated-HD.png' },
      { name: 'Brooklyn Nets', path: '/nba/brooklyn-nets', logo: 'https://th.bing.com/th/id/R.5debc1a50d2b0cb3a3fa3ae4e5c7af50?rik=gK55E2EiOmGDRg&pid=ImgRaw&r=0' },
      { name: 'New York Knicks', path: '/nba/new-york-knicks', logo: 'https://cdn.freebiesupply.com/images/large/2x/new-york-knicks-logo-transparent.png' },
      { name: 'Philadelphia 76ers', path: '/nba/philadelphia-76ers', logo: 'https://www.pngkit.com/png/full/143-1431157_philadelphia-76ers-emblem-76ers-logo-transparent.png' },
      { name: 'Toronto Raptors', path: '/nba/toronto-raptors', logo: 'https://tse3.mm.bing.net/th/id/OIP.zEXjAuKCqW7DmF87nOCWiQHaHa?rs=1&pid=ImgDetMain' }
    ],
    Central: [
      { name: 'Cleveland Cavaliers', path: '/nba/clevaland-cavaliers', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Cleveland-Cavaliers-Logo-2017-present.png' },
      { name: 'Indiana Pacers', path: '/nba/indiana-pacers', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Indiana-Pacers-logo.png' },
      { name: 'Detroit Pistons', path: '/nba/detroit-pistons', logo: 'https://th.bing.com/th/id/R.dd68dd2cca6f7857b0ce4715fc9a78ff?rik=sv2chnVKcknDqw&pid=ImgRaw&r=0' },
      { name: 'Chicago Bulls', path: '/nba/chicago-bulls', logo: 'https://cdn.freebiesupply.com/images/large/2x/chicago-bulls-logo-transparent.png' },
      { name: 'Milwaukee Bucks', path: '/nba/milwaukee-bucks', logo: 'https://logodownload.org/wp-content/uploads/2020/07/milwaukee-bucks-logo-0.png' }
    ],
    Southeast: [
      { name: 'Atlanta Hawks', path: '/nba/atlanta-hawks', logo: 'https://cdn.freebiesupply.com/images/large/2x/atlanta-hawks-logo-transparent.png' },
      { name: 'Charlotte Hornets', path: '/nba/charlotte-hornets', logo: 'https://tse2.mm.bing.net/th/id/OIP.tyOlLQ6ZW2JsuVV7L3zMDwHaHa?rs=1&pid=ImgDetMain' },
      { name: 'Miami Heat', path: '/nba/miami-heat', logo: 'https://th.bing.com/th/id/R.7fef1917c568bc093dc4a53ac7d34654?rik=MaEczVQsePzOkw&pid=ImgRaw&r=0' },
      { name: 'Orlando Magic', path: '/nba/orlando-magic', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Orlando-Magic-logo.png' },
      { name: 'Washington Wizards', path: '/nba/washington-wizards', logo: 'https://tse4.mm.bing.net/th/id/OIP.qEU9BKTgPF0rqi3aOBrfZwHaGy?rs=1&pid=ImgDetMain' }
    ]
  },
  Western: {
    Northwest: [
      { name: 'Denver Nuggets', path: '/nba/denver-nuggets', logo: 'https://th.bing.com/th/id/R.bfa94f12ae0725355036662a8417a6bc?rik=kyga%2f0aHuUTovg&pid=ImgRaw&r=0' },
      { name: 'Minnesota Timberwolves', path: '/nba/minnesota-timberwolves', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Minnesota-Timberwolves-logo.png' },
      { name: 'Oklahoma City Thunder', path: '/nba/oklahoma-city-thunder', logo: 'https://tse1.mm.bing.net/th/id/OIP.8S60zs-KHqxFafFh7G_xmwHaGz?rs=1&pid=ImgDetMain' },
      { name: 'Portland Trail Blazers', path: '/nba/portland-trailblazers', logo: 'https://logos-download.com/wp-content/uploads/2016/04/Portland_Trail_Blazers_logo_logotype.png' },
      { name: 'Utah Jazz', path: '/nba/utah-jazz', logo: 'https://logos-download.com/wp-content/uploads/2016/04/Utah_Jazz_logo_alternate_note.png' }
    ],
    Pacific: [
      { name: 'Golden State Warriors', path: '/nba/gsw', logo: 'https://tse1.mm.bing.net/th/id/OIP.zOjtjNNbnzy0Q2IEsmRPiwHaI8?rs=1&pid=ImgDetMain' },
      { name: 'LA Clippers', path: '/nba/la-clippers', logo: 'https://logos-world.net/wp-content/uploads/2020/08/Los-Angeles-Clippers-Logo.png' },
      { name: 'LA Lakers', path: '/nba/la-lakers', logo: 'https://cdn.freebiesupply.com/images/large/2x/los-angeles-lakers-logo-transparent.png' },
      { name: 'Phoenix Suns', path: '/nba/phoenix-suns', logo: 'https://th.bing.com/th/id/R.5fb57f9ff556135a6798cbe57a541485?rik=8VVsUt%2fiiXMPpA&pid=ImgRaw&r=0' },
      { name: 'Sacramento Kings', path: '/nba/sacramento-kings', logo: 'https://cdn.freebiesupply.com/images/large/2x/sacramento-kings-logo-transparent.png' }
    ],
    Southwest: [
      { name: 'Dallas Mavericks', path: '/nba/dallas-mavericks', logo: 'https://logodownload.org/wp-content/uploads/2021/07/dallas-mavericks-logo-1.png' },
      { name: 'Houston Rockets', path: '/nba/houston-rockets', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Houston-Rockets-Logo-2003-2019.png' },
      { name: 'Memphis Grizzlies', path: '/nba/memphis-grizzlies', logo: 'https://logodownload.org/wp-content/uploads/2021/07/memphis-grizzlies-logo-2.png' },
      { name: 'New Orleans Pelicans', path: '/nba/nola-pelicans', logo: 'https://logodownload.org/wp-content/uploads/2021/07/new-orleans-pelicans-logo-0.png' },
      { name: 'San Antonio Spurs', path: '/nba/spurs', logo: 'https://tse2.mm.bing.net/th/id/OIP.VnC8L37k_DMeblU04Xw_BwHaJL?rs=1&pid=ImgDetMain' }
    ]
  }
};

const NBA = () => {
  return (
    <>
      <Header />
      <main className="nba-container">
        <h1>NBA Teams</h1>
        {Object.entries(nbaTeams).map(([conference, divisions]) => (
          <section key={conference} className="conference">
            <h2>{conference} Conference</h2>
            {Object.entries(divisions).map(([division, teams]) => (
              <div key={division} className="division">
                <h3>{division} Division</h3>
                <ul>
                  {teams.map((team) => {
                    // dynamic aura class name (e.g. "boston-celtics-aura")
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

export default NBA;
