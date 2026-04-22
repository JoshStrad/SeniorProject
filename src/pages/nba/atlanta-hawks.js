import React from 'react';
import Header from '../../components/Header';
import './nba-teampage.css';

const AtlantaHawks = () => {
  const roster = [
    { name: 'Asa Newell', position: 'PG', number: 11, profileLink: '/nba/hawks/asa-newell' },
    { name: 'Buddy hield', position: 'SF', number: 0, profileLink: '/nba/hawks/buddy-hield' },
    { name: 'CJ McCollum', position: 'SG', number: 4, profileLink: '/nba/hawks/cj-mccollum' },
    { name: 'Corey Kispert', position: 'C', number: 15, profileLink: '/nba/hawks/cory-kispert' },
    { name: 'Dyson Daniels', position: 'SG', number: 5, profileLink: '/nba/hawks/dyson-daniels' },
    { name: 'Mouhamedou Guye', position: 'PF', number: 27, profileLink: '/nba/hawks/mouhamed-gueye' },
    { name: 'Gabe Vincent', position: 'PG', number: 12, profileLink: '/nba/hawks/gabe-vincent' },
    { name: 'Jalen Johnson', position: 'SF', number: 1, profileLink: '/nba/hawks/jalen-johnson' },
    { name: 'Jock Landale', position: 'SF', number: 27, profileLink: '/nba/hawks/jock-landale' },
    { name: 'Jonathan Kuminga', position: 'SG', number: 3, profileLink: '/nba/hawks/jonathan-kuminga' },
    { name: 'Keaton Wallace', position: 'SF', number: 24, profileLink: '/nba/hawks/keaton-wallace' },
    { name: 'Nickeil Alexander-Walker', position: 'PF', number: 22, profileLink: '/nba/hawks/nickeil-alexanderwalker' },
    { name: 'Oneyka Okongwu', position: 'C', number: 17, profileLink: '/nba/hawks/onyeka-okongwu' },
    { name: 'Zach Risacher', position: 'SF', number: 10, profileLink: '/nba/hawks/zaccharie-risacher' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Atlanta Hawks</h1>
        <p></p>

        <h2>Roster</h2>
        <table className="roster-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {roster.map((player) => (
              <tr key={player.name}>
                <td>{player.number}</td>
                <td>
                  <a href={player.profileLink}>{player.name}</a>
                </td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default AtlantaHawks;