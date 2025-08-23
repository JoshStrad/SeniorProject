import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const PhoenixSuns = () => {
  const roster = [
    { name: 'Grayson Allen', position: 'SG', number: 8, profileLink: '/nba/suns/grayson-allen' },
    { name: 'Devin Booker', position: 'SG', number: 1, profileLink: '/nba/suns/devin-booker' },
    { name: 'Koby Brea', position: 'G', number: null, profileLink: '/nba/suns/koby-brea' },
    { name: 'Dillon Brooks', position: 'SF', number: 9, profileLink: '/nba/suns/dillon-brooks' },
    { name: 'Jared Butler', position: 'SG', number: 12, profileLink: '/nba/suns/jared-butler' },
    { name: 'Ryan Dunn', position: 'F', number: 0, profileLink: '/nba/suns/ryan-dunn' },
    { name: 'Rasheer Fleming', position: 'F', number: null, profileLink: '/nba/suns/rasheer-fleming' },
    { name: 'Collin Gillespie', position: 'G', number: 12, profileLink: '/nba/suns/collin-gillespie' },
    { name: 'Jordan Goodwin', position: 'G', number: 12, profileLink: '/nba/suns/jordan-goodwin' },
    { name: 'Jalen Green', position: 'SG', number: 4, profileLink: '/nba/suns/jalen-green' },
    { name: 'Nigel Hayes', position: 'F', number: null, profileLink: '/nba/suns/nigel-hayes' },
    { name: 'CJ Huntley', position: 'F', number: null, profileLink: '/nba/suns/cj-huntley' },
    { name: 'Oso Ighodaro', position: 'C', number: 4, profileLink: '/nba/suns/oso-ighodaro' },
    { name: 'Isaiah Livers', position: 'PF', number: null, profileLink: '/nba/suns/isaiah-livers' },
    { name: 'Khaman Maluach', position: 'C', number: null, profileLink: '/nba/suns/khaman-maluach' },
    { name: "Royce O'Neale", position: 'PF', number: 0, profileLink: '/nba/suns/royce-oneale' },
    { name: 'Nick Richards', position: 'C', number: 2, profileLink: '/nba/suns/nick-richards' },
    { name: 'Mark Williams', position: 'C', number: null, profileLink: '/nba/suns/mark-williams' },
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
