import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const ClevelandCavaliers = () => {
  const roster = [
    { name: 'Jarrett Allen', position: 'C', number: 31, profileLink: '/nba/cavaliers/jarrett-allen' },
    { name: 'Lonzo Ball', position: 'PG', number: null, profileLink: '/nba/cavaliers/lonzo-ball' },
    { name: 'Darius Garland', position: 'PG', number: 10, profileLink: '/nba/cavaliers/darius-garland' },
    { name: "De'Andre Hunter", position: 'SF', number: 12, profileLink: '/nba/cavaliers/deandre-hunter' },
    { name: 'Sam Merrill', position: 'SG', number: 5, profileLink: '/nba/cavaliers/sam-merrill' },
    { name: 'Donovan Mitchell', position: 'SG', number: 45, profileLink: '/nba/cavaliers/donovan-mitchell' },
    { name: 'Evan Mobley', position: 'PF', number: 4, profileLink: '/nba/cavaliers/evan-mobley' },
    { name: 'Larry Nance Jr.', position: 'PF', number: 22, profileLink: '/nba/cavaliers/larry-nance-jr' },
    { name: 'Craig Porter Jr.', position: 'G', number: 9, profileLink: '/nba/cavaliers/craig-porter-jr' },
    { name: 'Tyrese Proctor', position: 'G', number: null, profileLink: '/nba/cavaliers/tyrese-proctor' },
    { name: 'Max Strus', position: 'SG', number: 1, profileLink: '/nba/cavaliers/max-strus' },
    { name: "Nae'Qwan Tomlin", position: 'F', number: 30, profileLink: '/nba/cavaliers/naequan-tomlin' },
    { name: 'Luke Travers', position: 'G', number: 33, profileLink: '/nba/cavaliers/luke-travers' },
    { name: 'Jaylon Tyson', position: 'F', number: 24, profileLink: '/nba/cavaliers/jaylon-tyson' },
    { name: 'Dean Wade', position: 'PF', number: 32, profileLink: '/nba/cavaliers/dean-wade' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cleveland Cavaliers</h1>
        <p>Welcome to the Cleveland Cavaliers page!</p>

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
