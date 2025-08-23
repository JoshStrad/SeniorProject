import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const IndianaPacers = () => {
  const roster = [
    { name: 'Tony Bradley', position: 'C', number: 13, profileLink: '/nba/pacers/tony-bradley' },
    { name: 'RayJ Dennis', position: 'G', number: 10, profileLink: '/nba/pacers/rayj-dennis' },
    { name: 'Johnny Furphy', position: 'F', number: 12, profileLink: '/nba/pacers/johnny-furphy' },
    { name: 'Tyrese Haliburton', position: 'PG', number: 0, profileLink: '/nba/pacers/tyrese-haliburton' },
    { name: 'Jay Huff', position: 'C', number: null, profileLink: '/nba/pacers/jay-huff' },
    { name: 'Isaiah Jackson', position: 'SF', number: 22, profileLink: '/nba/pacers/isaiah-jackson' },
    { name: 'Quenton Jackson', position: 'G', number: 29, profileLink: '/nba/pacers/quenton-jackson' },
    { name: 'Kam Jones', position: 'G', number: null, profileLink: '/nba/pacers/kam-jones' },
    { name: 'Bennedict Mathurin', position: 'SG', number: 0, profileLink: '/nba/pacers/bennedict-mathurin' },
    { name: 'T.J. McConnell', position: 'PG', number: 9, profileLink: '/nba/pacers/tj-mcconnell' },
    { name: 'Andrew Nembhard', position: 'PG', number: 2, profileLink: '/nba/pacers/andrew-nembhard' },
    { name: 'Aaron Nesmith', position: 'SF', number: 23, profileLink: '/nba/pacers/aaron-nesmith' },
    { name: 'Taelon Peter', position: 'G', number: null, profileLink: '/nba/pacers/taelon-peter' },
    { name: 'Ben Sheppard', position: 'G', number: 26, profileLink: '/nba/pacers/ben-sheppard' },
    { name: 'Pascal Siakam', position: 'PF', number: 43, profileLink: '/nba/pacers/pascal-siakam' },
    { name: 'Obi Toppin', position: 'PF', number: 1, profileLink: '/nba/pacers/obi-toppin' },
    { name: 'Jarace Walker', position: 'F', number: 5, profileLink: '/nba/pacers/jarace-walker' },
    { name: 'James Wiseman', position: 'C', number: null, profileLink: '/nba/pacers/james-wiseman' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Indiana Pacers</h1>
        <p>Welcome to the Indiana Pacers page!</p>

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
