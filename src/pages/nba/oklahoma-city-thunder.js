import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const OklahomaCityThunder = () => {
  const roster = [
    { name: 'Alex Caruso', position: 'SG', number: 9, profileLink: '/nba/thunder/alex-caruso' },
    { name: 'Luguentz Dort', position: 'G', number: 5, profileLink: '/nba/thunder/luguentz-dort' },
    { name: 'Shai Gilgeous-Alexander', position: 'PG', number: 2, profileLink: '/nba/thunder/shai-gilgeous-alexander' },
    { name: 'Isaiah Hartenstein', position: 'C', number: 55, profileLink: '/nba/thunder/isaiah-hartenstein' },
    { name: 'Chet Holmgren', position: 'PF', number: 7, profileLink: '/nba/thunder/chet-holmgren' },
    { name: 'Isaiah Joe', position: 'SG', number: 11, profileLink: '/nba/thunder/isaiah-joe' },
    { name: 'Ajay Mitchell', position: 'G', number: 25, profileLink: '/nba/thunder/ajay-mitchell' },
    { name: 'Jared McCain', position: 'G', number: 12, profileLink: '/nba/thunder/jared-mccain' },
    { name: 'Nikola Topic', position: 'G', number: 44, profileLink: '/nba/thunder/nikola-topic' },
    { name: 'Cason Wallace', position: 'G', number: 22, profileLink: '/nba/thunder/cason-wallace' },
    { name: 'Aaron Wiggins', position: 'SG', number: 21, profileLink: '/nba/thunder/aaron-wiggins' },
    { name: 'Jalen Williams', position: 'F', number: 8, profileLink: '/nba/thunder/jalen-williams' },
    { name: 'Jaylin Williams', position: 'F', number: 6, profileLink: '/nba/thunder/jaylin-williams' },
    { name: 'Kenrich Williams', position: 'SF', number: 34, profileLink: '/nba/thunder/kenrich-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Oklahoma City Thunder</h1>
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

export default OklahomaCityThunder;
