import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const BrooklynNets = () => {
  const roster = [
    { name: 'Nic Claxton', position: 'C', number: 33, profileLink: '/nba/nets/nic-claxton' },
    { name: 'Noah Clowney', position: 'F', number: 21, profileLink: '/nba/nets/noah-clowney' },
    { name: 'Egor Demin', position: 'G', number: 8, profileLink: '/nba/nets/egor-demin' },
    { name: 'Tyson Etienne', position: 'G', number: 10, profileLink: '/nba/nets/tyson-etienne' },
    { name: 'Tosan Evbuomwan', position: 'F', number: 12, profileLink: '/nba/nets/tosan-evbuomwan' },
    { name: 'Haywood Highsmith', position: 'F', number: 24, profileLink: '/nba/nets/haywood-highsmith' },
    { name: 'Keon Johnson', position: 'G', number: 45, profileLink: '/nba/nets/keon-johnson' },
    { name: 'Terance Mann', position: 'SG', number: 14, profileLink: '/nba/nets/terance-mann' },
    { name: 'Tyrese Martin', position: 'F', number: 13, profileLink: '/nba/nets/tyrese-martin' },
    { name: 'Michael Porter Jr.', position: 'F', number: 17, profileLink: '/nba/nets/michael-porter-jr' },
    { name: 'Drake Powell', position: 'G', number: 4, profileLink: '/nba/nets/drake-powell' },
    { name: 'Ben Saraf', position: 'G', number: 77, profileLink: '/nba/nets/ben-saraf' },
    { name: 'Drew Timme', position: 'F', number: 26, profileLink: '/nba/nets/drew-timme' },
    { name: 'Nolan Traore', position: 'G', number: 19, profileLink: '/nba/nets/nolan-traore' },
    { name: 'Dariq Whitehead', position: 'F', number: 0, profileLink: '/nba/nets/dariq-whitehead' },
    { name: 'Jalen Wilson', position: 'F', number: 22, profileLink: '/nba/nets/jalen-wilson' },
    // Add Ricky Council IV if you'd like, though his number isn't listed yet
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Brooklyn Nets</h1>
        <p>Welcome to the Brooklyn Nets page! Here you can find info about the team, including roster and player stats.</p>

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
                <td>{player.number !== null ? player.number : '—'}</td>
                <td>
                  <a href={player.profileLink}>{player.name}</a>
                </td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default BrooklynNets;
