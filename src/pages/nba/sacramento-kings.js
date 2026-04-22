import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const SacramentoKings = () => {
  const roster = [
    { name: 'Deandre Hunter', position: 'SF', number: 32, profileLink: '/nba/kings/deandre-hunter' },
    { name: 'Devin Carter', position: 'G', number: 22, profileLink: '/nba/kings/devin-carter' },
    { name: 'Nique Clifford', position: 'G', number: 5, profileLink: '/nba/kings/nique-clifford' },
    { name: 'DeMar DeRozan', position: 'SF', number: 10, profileLink: '/nba/kings/demar-derozan' },
    { name: 'Drew Eubanks', position: 'PF', number: 19, profileLink: '/nba/kings/drew-eubanks' },
    { name: 'Zach LaVine', position: 'SG', number: 8, profileLink: '/nba/kings/zach-lavine' },
    { name: 'Doug McDermott', position: 'SF', number: 7, profileLink: '/nba/kings/doug-mcdermott' },
    { name: 'Malik Monk', position: 'SG', number: 0, profileLink: '/nba/kings/malik-monk' },
    { name: 'Keegan Murray', position: 'SF', number: 13, profileLink: '/nba/kings/keegan-murray' },
    { name: 'Maxime Raynaud', position: 'C', number: 42, profileLink: '/nba/kings/maxime-raynaud' },
    { name: 'Domantas Sabonis', position: 'PF', number: 11, profileLink: '/nba/kings/domantas-sabonis' },
    { name: 'Precious Achiuwa', position: 'PF', number: 9, profileLink: '/nba/kings/precious-achiuwa' },
    { name: 'Russell Westbrook', position: 'PG', number: 17, profileLink: '/nba/kings/russell-westbrook' },
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
