import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const LAClippers = () => {
  const roster = [
    { name: 'Bennedict Mathurin', position: 'G', number: 21, profileLink: '/nba/clippers/bennedict-mathurin' },
    { name: 'Cam Christie', position: 'G', number: 12, profileLink: '/nba/clippers/cam-christie' },
    { name: 'John Collins', position: 'PF', number: 20, profileLink: '/nba/clippers/john-collins' },
    { name: 'Kris Dunn', position: 'G', number: 8, profileLink: '/nba/clippers/kris-dunn' },
    { name: 'Bradley Beal', position: 'G', number: 9, profileLink: '/nba/clippers/bradley-beal' },
    { name: 'Darius Garland', position: 'SG', number: 10, profileLink: '/nba/clippers/darius-garland' },
    { name: 'Derrick Jones Jr.', position: 'SF', number: 55, profileLink: '/nba/clippers/derrick-jones-jr' },
    { name: 'Yanic Konan Niederhauser', position: 'C', number: 14, profileLink: '/nba/clippers/yanic-konan-niederh-user' },
    { name: 'Kawhi Leonard', position: 'SF', number: 2, profileLink: '/nba/clippers/kawhi-leonard' },
    { name: 'Brook Lopez', position: 'C', number: 11, profileLink: '/nba/clippers/brook-lopez' },
    { name: 'Jordan Miller', position: 'G', number: 22, profileLink: '/nba/clippers/jordan-miller' },
    { name: 'Bogdan Bogdanovic', position: 'PG', number: 7, profileLink: '/nba/clippers/bogdan-bogdanovi' },
    { name: 'Kobe Sanders', position: 'PG', number: 3, profileLink: '/nba/clippers/kobe-sanders' },
    { name: 'Nicolas Batum', position: 'F', number: 3, profileLink: '/nba/clippers/nicolas-batum' },
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
