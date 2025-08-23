import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const PortlandTrailBlazers = () => {
  const roster = [
    { name: 'Deni Avdija', position: 'SF', number: 8, profileLink: '/nba/blazers/deni-avdija' },
    { name: 'Toumani Camara', position: 'F', number: 33, profileLink: '/nba/blazers/toumani-camara' },
    { name: 'Andrew Carr', position: 'F', number: 99, profileLink: '/nba/blazers/andrew-carr' },
    { name: 'Sidy Cissoko', position: 'G', number: 91, profileLink: '/nba/blazers/sidy-cissoko' },
    { name: 'Donovan Clingan', position: 'C', number: 23, profileLink: '/nba/blazers/donovan-clingan' },
    { name: 'Jerami Grant', position: 'SF', number: 9, profileLink: '/nba/blazers/jerami-grant' },
    { name: 'Yang Hansen', position: 'C', number: null, profileLink: '/nba/blazers/yang-hansen' },
    { name: 'Scoot Henderson', position: 'G', number: 0, profileLink: '/nba/blazers/scoot-henderson' },
    { name: 'Jrue Holiday', position: 'PG', number: 5, profileLink: '/nba/blazers/jrue-holiday' },
    { name: 'Damian Lillard', position: 'PG', number: 0, profileLink: '/nba/blazers/damian-lillard' },
    { name: 'Caleb Love', position: 'G', number: null, profileLink: '/nba/blazers/caleb-love' },
    { name: 'Kris Murray', position: 'F', number: 24, profileLink: '/nba/blazers/kris-murray' },
    { name: 'Duop Reath', position: 'C', number: 26, profileLink: '/nba/blazers/duop-reath' },
    { name: 'Rayan Rupert', position: 'G', number: 21, profileLink: '/nba/blazers/rayan-rupert' },
    { name: 'Shaedon Sharpe', position: 'SG', number: 17, profileLink: '/nba/blazers/shaedon-sharpe' },
    { name: 'Matisse Thybulle', position: 'SG', number: 4, profileLink: '/nba/blazers/matisse-thybulle' },
    { name: 'Robert Williams III', position: 'C', number: 35, profileLink: '/nba/blazers/robert-williams-iii' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Portland Trail Blazers</h1>
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

export default PortlandTrailBlazers;
