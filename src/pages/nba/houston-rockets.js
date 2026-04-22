import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const HoustonRockets = () => {
  const roster = [
    { name: 'Steven Adams', position: 'C', number: 12, profileLink: '/nba/rockets/steven-adams' },
    { name: 'Clint Capela', position: 'C', number: 30, profileLink: '/nba/rockets/clint-capela' },
    { name: 'Kevin Durant', position: 'PF', number: 7, profileLink: '/nba/rockets/kevin-durant' },
    { name: 'Tari Eason', position: 'PF', number: 17, profileLink: '/nba/rockets/tari-eason' },
    { name: 'Dorian Finney-Smith', position: 'PF', number: 2, profileLink: '/nba/rockets/dorian-finney-smith' },
    { name: 'Jeff Green', position: 'PF', number: 32, profileLink: '/nba/rockets/jeff-green' },
    { name: 'Aaron Holiday', position: 'PG', number: 0, profileLink: '/nba/rockets/aaron-holiday' },
    { name: 'Josh Okogie', position: 'SG', number: 20, profileLink: '/nba/rockets/josh-okogie' },
    { name: 'Alperen Sengun', position: 'C', number: 28, profileLink: '/nba/rockets/alperen-eng-n' },
    { name: 'Reed Sheppard', position: 'SG', number: 15, profileLink: '/nba/rockets/reed-sheppard' },
    { name: 'Jabari Smith', position: 'PF', number: 10, profileLink: '/nba/rockets/jabari-smith' },
    { name: "Jae'Sean Tate", position: 'SF', number: 8, profileLink: '/nba/rockets/jaesean-tate' },
    { name: 'Amen Thompson', position: 'SG', number: 1, profileLink: '/nba/rockets/amen-thompson' },
    { name: 'Fred VanVleet', position: 'PG', number: 5, profileLink: '/nba/rockets/fred-vanvleet' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Houston Rockets</h1>
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
            {roster.map((p) => (
              <tr key={p.name}>
                <td>{p.number ?? '—'}</td>
                <td><a href={p.profileLink}>{p.name}</a></td>
                <td>{p.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default HoustonRockets;