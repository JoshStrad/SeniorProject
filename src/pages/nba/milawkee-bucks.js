import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const MilwaukeeBucks = () => {
  const roster = [
    { name: 'Giannis Antetokounmpo', position: 'PF', number: 34, profileLink: '/nba/bucks/giannis-antetokounmpo' },
    { name: 'Cole Anthony', position: 'PG', number: 50, profileLink: '/nba/bucks/cole-anthony' },
    { name: 'Jamaree Bouyea', position: 'G', number: 15, profileLink: '/nba/bucks/jamaree-bouyea' },
    { name: 'AJ Green', position: 'G', number: 20, profileLink: '/nba/bucks/aj-green' },
    { name: 'Gary Harris', position: 'SG', number: 14, profileLink: '/nba/bucks/gary-harris' },
    { name: 'Andre Jackson Jr.', position: 'G', number: 44, profileLink: '/nba/bucks/andre-jackson-jr' },
    { name: 'Kyle Kuzma', position: 'SF', number: 0, profileLink: '/nba/bucks/kyle-kuzma' },
    { name: 'Chris Livingston', position: 'F', number: 24, profileLink: '/nba/bucks/chris-livingston' },
    { name: 'Pete Nance', position: 'F', number: 35, profileLink: '/nba/bucks/pete-nance' },
    { name: 'Kevin Porter Jr.', position: 'G', number: 7, profileLink: '/nba/bucks/kevin-porter-jr' },
    { name: 'Bobby Portis', position: 'F', number: 9, profileLink: '/nba/bucks/bobby-portis' },
    { name: 'Taurean Prince', position: 'PF', number: 12, profileLink: '/nba/bucks/taurean-prince' },
    { name: 'Ryan Rollins', position: 'G', number: 13, profileLink: '/nba/bucks/ryan-rollins' },
    { name: 'Mark Sears', position: 'G', number: 19, profileLink: '/nba/bucks/mark-sears' },
    { name: 'Jericho Sims', position: 'C', number: 0, profileLink: '/nba/bucks/jericho-sims' }, // shown as 00 on ESPN
    { name: 'Tyler Smith', position: 'F', number: 21, profileLink: '/nba/bucks/tyler-smith' },
    { name: 'Gary Trent Jr.', position: 'SG', number: 5, profileLink: '/nba/bucks/gary-trent-jr' },
    { name: 'Myles Turner', position: 'C', number: 33, profileLink: '/nba/bucks/myles-turner' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Milwaukee Bucks</h1>
        <p>Welcome to the Milwaukee Bucks page!</p>

        <h2>Roster</h2>
        <table className="roster-table">
          <thead>
            <tr><th>Number</th><th>Name</th><th>Position</th></tr>
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

export default MilwaukeeBucks;
