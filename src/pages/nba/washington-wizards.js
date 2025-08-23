import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const WashingtonWizards = () => {
  const roster = [
    { name: 'Marvin Bagley III', position: 'F', number: null, profileLink: '/nba/wizards/marvin-bagley-iii' },
    { name: 'Malaki Branham', position: 'G', number: null, profileLink: '/nba/wizards/malaki-branham' },
    { name: 'Bub Carrington', position: 'G', number: 8, profileLink: '/nba/wizards/bub-carrington' },
    { name: 'Justin Champagnie', position: 'SF', number: 9, profileLink: '/nba/wizards/justin-champagnie' },
    { name: 'Bilal Coulibaly', position: 'SG', number: 0, profileLink: '/nba/wizards/bilal-coulibaly' },
    { name: 'Kyshawn George', position: 'F', number: 18, profileLink: '/nba/wizards/kyshawn-george' },
    { name: 'Keshon Gilbert', position: 'G', number: null, profileLink: '/nba/wizards/keshon-gilbert' },
    { name: 'Anthony Gill', position: 'PF', number: 16, profileLink: '/nba/wizards/anthony-gill' },
    { name: 'AJ Johnson', position: 'G', number: 5, profileLink: '/nba/wizards/aj-johnson' },
    { name: 'Tre Johnson', position: 'G', number: 12, profileLink: '/nba/wizards/tre-johnson' },
    { name: 'Dillon Jones', position: 'G', number: null, profileLink: '/nba/wizards/dillon-jones' },
    { name: 'Corey Kispert', position: 'SF', number: 24, profileLink: '/nba/wizards/corey-kispert' },
    { name: 'CJ McCollum', position: 'SG', number: 3, profileLink: '/nba/wizards/cj-mccollum' },
    { name: 'Khris Middleton', position: 'SF', number: 32, profileLink: '/nba/wizards/khris-middleton' },
    { name: 'Will Riley', position: 'G', number: null, profileLink: '/nba/wizards/will-riley' },
    { name: 'Alex Sarr', position: 'PF', number: 20, profileLink: '/nba/wizards/alex-sarr' },
    { name: 'Tristan Vukcevic', position: 'PF', number: 0, profileLink: '/nba/wizards/tristan-vukcevic' }, // shown as 00 on ESPN
    { name: 'Jamir Watkins', position: 'G', number: null, profileLink: '/nba/wizards/jamir-watkins' },
    { name: 'Cam Whitmore', position: 'F', number: null, profileLink: '/nba/wizards/cam-whitmore' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Washington Wizards</h1>
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

export default WashingtonWizards;
