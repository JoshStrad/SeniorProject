import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const UtahJazz = () => {
  const roster = [
    { name: 'Ace Bailey', position: 'G', number: 19, profileLink: '/nba/jazz/ace-bailey' },
    { name: 'Isaiah Collier', position: 'G', number: 13, profileLink: '/nba/jazz/isaiah-collier' },
    { name: 'Kyle Filipowski', position: 'F', number: 22, profileLink: '/nba/jazz/kyle-filipowski' },
    { name: 'Keyonte George', position: 'G', number: 3, profileLink: '/nba/jazz/keyonte-george' },
    { name: 'John Konchar', position: 'F', number: 16, profileLink: '/nba/jazz/john-konchar' },
    { name: 'Jaren Jackson Jr', position: 'F', number: 0, profileLink: '/nba/jazz/jaren-jackson-jr' },
    { name: 'Walker Kessler', position: 'C', number: 24, profileLink: '/nba/jazz/walker-kessler' },
    { name: 'Kevin Love', position: 'PF', number: 42, profileLink: '/nba/jazz/kevin-love' },
    { name: 'Lauri Markkanen', position: 'PF', number: 23, profileLink: '/nba/jazz/lauri-markkanen' },
    { name: 'KJ Martin', position: 'F', number: 99, profileLink: '/nba/jazz/kj-martin' },
    { name: 'Svi Mykhailiuk', position: 'SG', number: 19, profileLink: '/nba/jazz/svi-mykhailiuk' },
    { name: 'Jusuf Nurkic', position: 'C', number: 30, profileLink: '/nba/jazz/jusuf-nurki' },
    { name: 'Brice Sensabaugh', position: 'F', number: 28, profileLink: '/nba/jazz/brice-sensabaugh' },
    { name: 'Cody Williams', position: 'F', number: 5, profileLink: '/nba/jazz/cody-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Utah Jazz</h1>
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

export default UtahJazz;
