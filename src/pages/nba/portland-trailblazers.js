import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const PortlandTrailBlazers = () => {
  const roster = [
    { name: 'Deni Avdija', position: 'SF', number: 8, profileLink: '/nba/trail-blazers/deni-avdija' },
    { name: 'Toumani Camara', position: 'F', number: 33, profileLink: '/nba/trail-blazers/toumani-camara' },
    { name: 'Blake Wesley', position: 'G', number: 1, profileLink: '/nba/trail-blazers/blake-wesley' },
    { name: 'Sidy Cissoko', position: 'G', number: 91, profileLink: '/nba/trail-blazers/sidy-cissoko' },
    { name: 'Donovan Clingan', position: 'C', number: 23, profileLink: '/nba/trail-blazers/donovan-clingan' },
    { name: 'Jerami Grant', position: 'SF', number: 9, profileLink: '/nba/trail-blazers/jerami-grant' },
    { name: 'Yang Hansen', position: 'C', number: 16, profileLink: '/nba/trail-blazers/yang-hansen' },
    { name: 'Scoot Henderson', position: 'G', number: 0, profileLink: '/nba/trail-blazers/scoot-henderson' },
    { name: 'Jrue Holiday', position: 'PG', number: 5, profileLink: '/nba/trail-blazers/jrue-holiday' },
    { name: 'Damian Lillard', position: 'PG', number: 0, profileLink: '/nba/trail-blazers/damian-lillard' },
    { name: 'Caleb Love', position: 'G', number: 0, profileLink: '/nba/trail-blazers/caleb-love' },
    { name: 'Kris Murray', position: 'F', number: 24, profileLink: '/nba/trail-blazers/kris-murray' },
    { name: 'Vit Krejci', position: 'C', number: 26, profileLink: '/nba/trail-blazers/vit-krejci' },
    { name: 'Damian Lillard', position: 'G', number: 21, profileLink: '/nba/trail-blazers/damian-lillard' },
    { name: 'Shaedon Sharpe', position: 'SG', number: 17, profileLink: '/nba/trail-blazers/shaedon-sharpe' },
    { name: 'Matisse Thybulle', position: 'SG', number: 4, profileLink: '/nba/trail-blazers/matisse-thybulle' },
    { name: 'Robert Williams III', position: 'C', number: 35, profileLink: '/nba/trail-blazers/robert-williams' },
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
