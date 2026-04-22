import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const IndianaPacers = () => {
  const roster = [
    { name: 'Tyrese Haliburton', position: 'PG', number: 0, profileLink: '/nba/pacers/tyrese-haliburton' },
    { name: 'Jay Huff', position: 'C', number: 32, profileLink: '/nba/pacers/jay-huff' },
    { name: 'Kam Jones', position: 'G', number: 7, profileLink: '/nba/pacers/kam-jones' },
    { name: 'T.J. McConnell', position: 'PG', number: 9, profileLink: '/nba/pacers/t-j-mcconnell' },
    { name: 'Andrew Nembhard', position: 'PG', number: 2, profileLink: '/nba/pacers/andrew-nembhard' },
    { name: 'Aaron Nesmith', position: 'SF', number: 23, profileLink: '/nba/pacers/aaron-nesmith' },
    { name: 'Kobe Brown', position: 'G', number: 24, profileLink: '/nba/pacers/kobe-brown' },
    { name: 'Ben Sheppard', position: 'G', number: 26, profileLink: '/nba/pacers/ben-sheppard' },
    { name: 'Pascal Siakam', position: 'PF', number: 43, profileLink: '/nba/pacers/pascal-siakam' },
    { name: 'Obi Toppin', position: 'PF', number: 1, profileLink: '/nba/pacers/obi-toppin' },
    { name: 'Jarace Walker', position: 'F', number: 5, profileLink: '/nba/pacers/jarace-walker' },
    { name: 'Ivica Zubac', position: 'C', number: 40, profileLink: '/nba/pacers/ivica-zubac' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Indiana Pacers</h1>
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

export default IndianaPacers;
