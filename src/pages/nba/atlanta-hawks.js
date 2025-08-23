import React from 'react';
import Header from '../../components/Header';
import './celtics.css';

const AtlantaHawks = () => {
  const roster = [
    { name: 'Trae Young', position: 'PG', number: 11, profileLink: '/nba/hawks/trae-young' },
    { name: 'Dominick Barlow', position: 'SF', number: 0, profileLink: '/nba/hawks/dom-barlow' },
    { name: 'Bogdan Bogdanovic', position: 'SG', number: 13, profileLink: '/nba/boston-celtics/marcus-smart' },
    { name: 'Kobe Bufkin', position: 'SG', number: 4, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Clint Capela', position: 'C', number: 15, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Dyson Daniels', position: 'SG', number: 5, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Mouhamed Guye', position: 'PF', number: 27, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'DeAndre Hunter', position: 'PG', number: 12, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Jalen Johnson', position: 'SF', number: 1, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Vit Krejci', position: 'SF', number: 27, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Seth Lundy', position: 'SG', number: 3, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Garrison Matthews', position: 'SF', number: 24, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Larry Nance Jr', position: 'PF', number: 22, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Oneyka Okongwu', position: 'C', number: 17, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Zach Risacher', position: 'SF', number: 10, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'David Roddy', position: 'SF', number: 8, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Cody Zeller', position: 'C', number: 41, profileLink: '/nba/boston-celtics/jayson-tatum' }
    // Add other players here
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Atlanta Hawks</h1>
        <p>Welcome to the Atlanta Hawks page! Here you can find information about the team, including roster, and player stats.</p>

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