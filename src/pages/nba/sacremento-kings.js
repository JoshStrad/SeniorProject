import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const SacramentoKings = () => {
  const roster = [
    { name: 'Dylan Cardwell', position: 'C', number: 32, profileLink: '/nba/kings/dylan-cardwell' },
    { name: 'Devin Carter', position: 'G', number: 22, profileLink: '/nba/kings/devin-carter' },
    { name: 'Nique Clifford', position: 'G', number: null, profileLink: '/nba/kings/nique-clifford' },
    { name: 'Terence Davis', position: 'G', number: 9, profileLink: '/nba/kings/terence-davis' },
    { name: 'DeMar DeRozan', position: 'SF', number: 10, profileLink: '/nba/kings/demar-derozan' },
    { name: 'Keon Ellis', position: 'G', number: 23, profileLink: '/nba/kings/keon-ellis' },
    { name: 'Drew Eubanks', position: 'PF', number: null, profileLink: '/nba/kings/drew-eubanks' },
    { name: 'Isaac Jones', position: 'C', number: 3, profileLink: '/nba/kings/isaac-jones' },
    { name: 'Zach LaVine', position: 'SG', number: 8, profileLink: '/nba/kings/zach-lavine' },
    { name: 'Doug McDermott', position: 'SF', number: 7, profileLink: '/nba/kings/doug-mcdermott' },
    { name: 'Malik Monk', position: 'SG', number: 0, profileLink: '/nba/kings/malik-monk' },
    { name: 'Keegan Murray', position: 'SF', number: 13, profileLink: '/nba/kings/keegan-murray' },
    { name: 'Daeqwon Plowden', position: 'G', number: null, profileLink: '/nba/kings/daeqwon-plowden' },
    { name: 'Maxime Raynaud', position: 'C', number: null, profileLink: '/nba/kings/maxime-raynaud' },
    { name: 'Domantas Sabonis', position: 'PF', number: 11, profileLink: '/nba/kings/domantas-sabonis' },
    { name: 'Dario Saric', position: 'PF', number: 9, profileLink: '/nba/kings/dario-saric' },
    { name: 'Dennis Schroder', position: 'PG', number: 17, profileLink: '/nba/kings/dennis-schroder' },
    { name: 'Isaiah Stevens', position: 'G', number: 40, profileLink: '/nba/kings/isaiah-stevens' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Sacramento Kings</h1>
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

export default SacramentoKings;
