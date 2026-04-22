import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const PhoenixSuns = () => {
  const roster = [
    { name: 'Grayson Allen', position: 'SG', number: 8, profileLink: '/nba/suns/grayson-allen' },
    { name: 'Devin Booker', position: 'SG', number: 1, profileLink: '/nba/suns/devin-booker' },
    { name: 'Dillon Brooks', position: 'SF', number: 9, profileLink: '/nba/suns/dillon-brooks' },
    { name: 'Amir Coffey', position: 'SG', number: 12, profileLink: '/nba/suns/amir-coffey' },
    { name: 'Ryan Dunn', position: 'F', number: 0, profileLink: '/nba/suns/ryan-dunn' },
    { name: 'Rasheer Fleming', position: 'F', number: 20, profileLink: '/nba/suns/rasheer-fleming' },
    { name: 'Collin Gillespie', position: 'G', number: 12, profileLink: '/nba/suns/collin-gillespie' },
    { name: 'Jordan Goodwin', position: 'G', number: 12, profileLink: '/nba/suns/jordan-goodwin' },
    { name: 'Jalen Green', position: 'SG', number: 4, profileLink: '/nba/suns/jalen-green' },
    { name: 'Oso Ighodaro', position: 'C', number: 4, profileLink: '/nba/suns/oso-ighodaro' },
    { name: 'Khaman Maluach', position: 'C', number: 10, profileLink: '/nba/suns/khaman-maluach' },
    { name: "Royce O'Neale", position: 'PF', number: 0, profileLink: '/nba/suns/royce-oneale' },
    { name: 'Mark Williams', position: 'C', number: 15, profileLink: '/nba/suns/mark-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Phoenix Suns</h1>
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

export default PhoenixSuns;
