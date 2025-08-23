import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const DenverNuggets = () => {
  const roster = [
    { name: 'Tamar Bates', position: 'G', number: 23, profileLink: '/nba/nuggets/tamar-bates' },
    { name: 'Christian Braun', position: 'G', number: 0, profileLink: '/nba/nuggets/christian-braun' },
    { name: 'Bruce Brown', position: 'SF', number: null, profileLink: '/nba/nuggets/bruce-brown' },
    { name: 'Kessler Edwards', position: 'F', number: null, profileLink: '/nba/nuggets/kessler-edwards' },
    { name: 'Aaron Gordon', position: 'PF', number: 32, profileLink: '/nba/nuggets/aaron-gordon' },
    { name: 'Tim Hardaway Jr.', position: 'SF', number: null, profileLink: '/nba/nuggets/tim-hardaway-jr' },
    { name: 'DaRon Holmes II', position: 'C', number: 14, profileLink: '/nba/nuggets/daron-holmes-ii' },
    { name: 'Cameron Johnson', position: 'SF', number: null, profileLink: '/nba/nuggets/cameron-johnson' },
    { name: 'Nikola Jokic', position: 'C', number: 15, profileLink: '/nba/nuggets/nikola-jokic' },
    { name: 'Curtis Jones', position: 'G', number: null, profileLink: '/nba/nuggets/curtis-jones' },
    { name: 'Spencer Jones', position: 'F', number: 21, profileLink: '/nba/nuggets/spencer-jones' },
    { name: 'Jamal Murray', position: 'PG', number: 27, profileLink: '/nba/nuggets/jamal-murray' },
    { name: 'Zeke Nnaji', position: 'PF', number: 22, profileLink: '/nba/nuggets/zeke-nnaji' },
    { name: 'Jalen Pickett', position: 'G', number: 24, profileLink: '/nba/nuggets/jalen-pickett' },
    { name: 'Julian Strawther', position: 'G', number: 3, profileLink: '/nba/nuggets/julian-strawther' },
    { name: 'Hunter Tyson', position: 'F', number: 5, profileLink: '/nba/nuggets/hunter-tyson' },
    { name: 'Jonas Valanciunas', position: 'C', number: 17, profileLink: '/nba/nuggets/jonas-valanciunas' },
    { name: 'Peyton Watson', position: 'F', number: 8, profileLink: '/nba/nuggets/peyton-watson' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Denver Nuggets</h1>
        <h2>Roster</h2>
        <table className="roster-table">
          <thead><tr><th>Number</th><th>Name</th><th>Position</th></tr></thead>
          <tbody>
            {roster.map(p => (
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

export default DenverNuggets;
