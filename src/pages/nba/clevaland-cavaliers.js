import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const ClevelandCavaliers = () => {
  const roster = [
    { name: 'Jarrett Allen', position: 'C', number: 31, profileLink: '/nba/cavs/jarrett-allen' },
    { name: 'James Harden', position: 'PG', number: 1, profileLink: '/nba/cavs/james-harden' },
    { name: 'Dennis Schroder', position: 'PG', number: 10, profileLink: '/nba/cavs/dennis-schroder' },
    { name: "Thomas Bryant", position: 'SF', number: 12, profileLink: '/nba/cavs/thomas-bryant' },
    { name: 'Sam Merrill', position: 'SG', number: 5, profileLink: '/nba/cavs/sam-merrill' },
    { name: 'Donovan Mitchell', position: 'SG', number: 45, profileLink: '/nba/cavs/donovan-mitchell' },
    { name: 'Evan Mobley', position: 'PF', number: 4, profileLink: '/nba/cavs/evan-mobley' },
    { name: 'Larry Nance Jr.', position: 'PF', number: 22, profileLink: '/nba/cavs/larry-nance-jr' },
    { name: 'Craig Porter Jr.', position: 'G', number: 9, profileLink: '/nba/cavs/craig-porter-jr' },
    { name: 'Tyrese Proctor', position: 'G', number: 24, profileLink: '/nba/cavs/tyrese-proctor' },
    { name: 'Max Strus', position: 'SG', number: 2, profileLink: '/nba/cavs/max-strus' },
    { name: "Nae'Qwan Tomlin", position: 'F', number: 30, profileLink: '/nba/cavs/naequan-tomlin' },
    { name: 'Keon Ellis', position: 'G', number: 33, profileLink: '/nba/cavs/keon-ellis' },
    { name: 'Jaylon Tyson', position: 'F', number: 24, profileLink: '/nba/cavs/jaylon-tyson' },
    { name: 'Dean Wade', position: 'PF', number: 32, profileLink: '/nba/cavs/dean-wade' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cleveland Cavaliers</h1>
        <p></p>

        <h2>Roster</h2>
        <table className="roster-table">
          <thead>
            <tr><th>Number</th><th>Name</th><th>Position</th></tr>
          </thead>
          <tbody>
            {roster.map((p) => (
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

export default ClevelandCavaliers;
