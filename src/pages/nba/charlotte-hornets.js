import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const CharlotteHornets = () => {
  const roster = [
    { name: 'LaMelo Ball', position: 'PG', number: 1, profileLink: '/nba/hornets/lamelo-ball' },
    { name: 'Miles Bridges', position: 'SF', number: 0, profileLink: '/nba/hornets/miles-bridges' },
    { name: 'Pat Connaughton', position: 'SG', number: 24, profileLink: '/nba/hornets/pat-connaughton' },
    { name: 'Moussa Diabate', position: 'F', number: 14, profileLink: '/nba/hornets/moussa-diabate' },
    { name: 'Josh Green', position: 'SG', number: 10, profileLink: '/nba/hornets/josh-green' },
    { name: 'Sion James', position: 'G', number: 4, profileLink: '/nba/hornets/sion-james' },
    { name: 'Ryan Kalkbrenner', position: 'C', number: 32, profileLink: '/nba/hornets/ryan-kalkbrenner' },
    { name: 'Kon Knueppel', position: 'G', number: 7, profileLink: '/nba/hornets/kon-knueppel' },
    { name: 'Tre Mann', position: 'PG', number: 23, profileLink: '/nba/hornets/tre-mann' },
    { name: 'Liam McNeeley', position: 'G', number: 33, profileLink: '/nba/hornets/liam-mcneeley' },
    { name: 'Brandon Miller', position: 'F', number: 24, profileLink: '/nba/hornets/brandon-miller' },
    { name: 'Tidjane Salaun', position: 'F', number: 31, profileLink: '/nba/hornets/tidjane-salaun' },
    { name: 'Coby White', position: 'G', number: 3, profileLink: '/nba/hornets/coby-white' },
    { name: 'Grant Williams', position: 'PF', number: 2, profileLink: '/nba/hornets/grant-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Charlotte Hornets</h1>
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

export default CharlotteHornets;
