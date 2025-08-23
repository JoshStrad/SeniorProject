import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const LAClippers = () => {
  const roster = [
    { name: 'Kobe Brown', position: 'G', number: 21, profileLink: '/nba/clippers/kobe-brown' },
    { name: 'Cam Christie', position: 'G', number: 12, profileLink: '/nba/clippers/cam-christie' },
    { name: 'John Collins', position: 'PF', number: null, profileLink: '/nba/clippers/john-collins' },
    { name: 'Kris Dunn', position: 'G', number: 8, profileLink: '/nba/clippers/kris-dunn' },
    { name: 'Trentyn Flowers', position: 'G', number: 9, profileLink: '/nba/clippers/trentyn-flowers' },
    { name: 'James Harden', position: 'SG', number: 1, profileLink: '/nba/clippers/james-harden' },
    { name: 'Derrick Jones Jr.', position: 'SF', number: 55, profileLink: '/nba/clippers/derrick-jones-jr' },
    { name: 'Yanic Konan Niederhauser', position: 'C', number: null, profileLink: '/nba/clippers/yanic-konan-niederhauser' },
    { name: 'Kawhi Leonard', position: 'SF', number: 2, profileLink: '/nba/clippers/kawhi-leonard' },
    { name: 'Brook Lopez', position: 'C', number: null, profileLink: '/nba/clippers/brook-lopez' },
    { name: 'Jordan Miller', position: 'G', number: 11, profileLink: '/nba/clippers/jordan-miller' },
    { name: 'Patty Mills', position: 'PG', number: 88, profileLink: '/nba/clippers/patty-mills' },
    { name: 'Chris Paul', position: 'PG', number: 3, profileLink: '/nba/clippers/chris-paul' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>LA Clippers</h1>
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

export default LAClippers;
