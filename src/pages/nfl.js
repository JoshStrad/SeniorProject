import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './nfl.css';

const nflTeams = {
  AFC: {
    East: [
      { name: 'Buffalo Bills', path: '/nfl/buffalo-bills', logo: 'https://banner2.cleanpng.com/20180718/eap/kisspng-buffalo-bills-nfl-indianapolis-colts-tennessee-tit-us-open-5b4fbbbf530526.7662367615319520633401.jpg' },
      { name: 'Miami Dolphins', path: '/nfl/miami-dolphins', logo: 'https://e7.pngegg.com/pngimages/982/491/png-clipart-miami-dolphins-logo-miami-dolphins-logo-sports-nfl-football.png' },
      { name: 'New England Patriots', path: '/nfl/new-england-patriots', logo: 'https://e7.pngegg.com/pngimages/773/222/png-clipart-new-england-patriots-logo-new-england-patriots-logo-sports-nfl-football.png' },
      { name: 'New York Jets', path: '/nfl/new-york-jets', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmo5JJNN18MJVRYdMb7mI0UGyYt7vCTKCezw&s' },
    ],
    North: [
      { name: 'Baltimore Ravens', path: '/nfl/baltimore-ravens', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAMtOpAqFTgVflJKQ6_AhEQk_Sw7-I-cDpA&s' },
      { name: 'Cincinnati Bengals', path: '/nfl/cincinnati-bengals', logo: 'https://e7.pngegg.com/pngimages/621/742/png-clipart-cincinnati-bengals-nfl-atlanta-falcons-new-england-patriots-cincinnati-bengals-text-orange.png' },
      { name: 'Cleveland Browns', path: '/nfl/cleveland-browns', logo: 'https://e7.pngegg.com/pngimages/202/414/png-clipart-logos-and-uniforms-of-the-cleveland-browns-nfl-pittsburgh-steelers-buffalo-bills-nfl-brown-sport-thumbnail.png' },
      { name: 'Pittsburgh Steelers', path: '/nfl/pittsburgh-steelers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/768px-Pittsburgh_Steelers_logo.svg.png' },
    ],
    South: [
      { name: 'Houston Texans', path: '/nfl/houston-texans', logo: 'https://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo.png' },
      { name: 'Indianapolis Colts', path: '/nfl/indianapolis-colts', logo: 'https://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo.png' },
      { name: 'Jacksonville Jaguars', path: '/nfl/jacksonville-jaguars', logo: 'https://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo.png' },
      { name: 'Tennessee Titans', path: '/nfl/tennessee-titans', logo: 'https://loodibee.com/wp-content/uploads/nfl-tennessee-titans-team-logo.png' },
    ],
    West: [
      { name: 'Denver Broncos', path: '/nfl/denver-broncos', logo: 'https://cdn.freebiesupply.com/images/thumbs/2x/denver-broncos-logo.png' },
      { name: 'Kansas City Chiefs', path: '/nfl/kansas-city-chiefs', logo: 'https://cdn.freebiesupply.com/images/thumbs/2x/kansas-city-chiefs-logo.png' },
      { name: 'Las Vegas Raiders', path: '/nfl/las-vegas-raiders', logo: 'https://mascothalloffame.com/wp-content/uploads/2023/03/oakland-raiders-logo-transparent.png' },
      { name: 'Los Angeles Chargers', path: '/nfl/la-chargers', logo: 'https://cdn.freebiesupply.com/images/thumbs/2x/los-angeles-chargers-logo.png' },
    ],
  },
  NFC: {
    East: [
      { name: 'Dallas Cowboys', path: '/nfl/dallas-cowboys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/2153px-Dallas_Cowboys.svg.png' },
      { name: 'New York Giants', path: '/nfl/new-york-giants', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/2560px-New_York_Giants_logo.svg.png' },
      { name: 'Philadelphia Eagles', path: '/nfl/philadelphia-eagles', logo: 'https://cdn.freebiesupply.com/logos/large/2x/philadelphia-eagles-logo.png' },
      { name: 'Washington Commanders', path: '/nfl/washington-commanders', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Washington_Commanders_logo.svg/1280px-Washington_Commanders_logo.svg.png' },
    ],
    North: [
      { name: 'Chicago Bears', path: '/nfl/chicago-bears', logo: 'https://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2.png' },
      { name: 'Detroit Lions', path: '/nfl/detroit-lions', logo: 'https://loodibee.com/wp-content/uploads/nfl-detroit-lions-team-logo.png' },
      { name: 'Green Bay Packers', path: '/nfl/green-bay-packers', logo: 'https://cdn.freebiesupply.com/images/thumbs/2x/green-bay-packers-logo.png' },
      { name: 'Minnesota Vikings', path: '/nfl/minnesota-vikings', logo: 'https://loodibee.com/wp-content/uploads/nfl-minnesota-vikings-team-logo.png' },
    ],
    South: [
      { name: 'Atlanta Falcons', path: '/nfl/atlanta-falcons', logo: 'https://cdn.freebiesupply.com/images/thumbs/2x/atlanta-falcons-logo.png' },
      { name: 'Carolina Panthers', path: '/nfl/carolina-panthers', logo: 'https://cdn.freebiesupply.com/images/large/2x/carolina-panthers-logo-transparent.png' },
      { name: 'New Orleans Saints', path: '/nfl/new-orleans-saints', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/840px-New_Orleans_Saints_logo.svg.png' },
      { name: 'Tampa Bay Buccaneers', path: '/nfl/tampa-bay-buccaneers', logo: 'https://tampabayscouting.org/wp-content/uploads/2018/10/tampa-bay-buccaneers-logo-transparent.png' },
    ],
    West: [
      { name: 'Arizona Cardinals', path: '/nfl/arizona-cardinals', logo: 'https://cdn.freebiesupply.com/images/large/2x/arizona-cardinals-logo-transparent.png' },
      { name: 'Los Angeles Rams', path: '/nfl/la-rams', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXm8XqxbX4scFZ3vLngQ3VZ2AK2fa5miTUw&s' },
      { name: 'San Francisco 49ers', path: '/nfl/san-francisco-49ers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/1280px-San_Francisco_49ers_logo.svg.png' },
      { name: 'Seattle Seahawks', path: '/nfl/seattle-seahawks', logo: 'https://cdn.freebiesupply.com/images/large/2x/seattle-seahawks-logo-black-and-white.png' },
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
