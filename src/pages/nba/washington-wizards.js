import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const WashingtonWizards = () => {
  const roster = [
    { name: 'Anthony Davis', position: 'F', number: 3, profileLink: '/nba/wizards/anthony-davis' },
    { name: 'Bub Carrington', position: 'G', number: 8, profileLink: '/nba/wizards/bub-carrington' },
    { name: 'Justin Champagnie', position: 'SF', number: 9, profileLink: '/nba/wizards/justin-champagnie' },
    { name: 'Bilal Coulibaly', position: 'SG', number: 0, profileLink: '/nba/wizards/bilal-coulibaly' },
    { name: 'Kyshawn George', position: 'F', number: 18, profileLink: '/nba/wizards/kyshawn-george' },
    { name: 'Sharife Cooper', position: 'G', number: 13, profileLink: '/nba/wizards/sharife-cooper' },
    { name: 'Anthony Gill', position: 'PF', number: 16, profileLink: '/nba/wizards/anthony-gill' },
    { name: 'Trae Young', position: 'G', number: 5, profileLink: '/nba/wizards/trae-young' },
    { name: 'Tre Johnson', position: 'G', number: 12, profileLink: '/nba/wizards/tre-johnson' },
    { name: 'Jaden Hardy', position: 'G', number: 8, profileLink: '/nba/wizards/jaden-hardy' },
    { name: 'D angelo Russell', position: 'SG', number: 3, profileLink: '/nba/wizards/d-angelo-russell' },
    { name: 'Will Riley', position: 'G', number: 27, profileLink: '/nba/wizards/will-riley' },
    { name: 'Alex Sarr', position: 'PF', number: 20, profileLink: '/nba/wizards/alex-sarr' },
    { name: 'Tristan Vukcevic', position: 'PF', number: 0, profileLink: '/nba/wizards/tristan-vukcevic' },
    { name: 'Cam Whitmore', position: 'F', number: 1, profileLink: '/nba/wizards/cam-whitmore' },
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
