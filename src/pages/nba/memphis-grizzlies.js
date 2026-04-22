import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const MemphisGrizzlies = () => {
  const roster = [
    { name: 'Santi Aldama', position: 'C', number: 7, profileLink: '/nba/grizzlies/santi-aldama' },
    { name: 'Kentavious Caldwell-Pope', position: 'SF', number: 3, profileLink: '/nba/grizzlies/kentavious-caldwellpope' },
    { name: 'Brandon Clarke', position: 'C', number: 15, profileLink: '/nba/grizzlies/brandon-clarke' },
    { name: 'Walter Clayton Jr.', position: 'PG', number: 4, profileLink: '/nba/grizzlies/walter-clayton' },
    { name: 'Cedric Coward', position: 'SG', number: 23, profileLink: '/nba/grizzlies/cedric-coward' },
    { name: 'Zach Edey', position: 'C', number: 14, profileLink: '/nba/grizzlies/zach-edey' },
    { name: 'Taylor Hendricks', position: 'PF', number: 22, profileLink: '/nba/grizzlies/taylor-hendricks' },
    { name: 'Gregory Jackson', position: 'PF', number: 45, profileLink: '/nba/grizzlies/gg-jackson-ii' },
    { name: 'Ty Jerome', position: 'SG', number: 2, profileLink: '/nba/grizzlies/ty-jerome' },
    { name: 'Ja Morant', position: 'PG', number: 12, profileLink: '/nba/grizzlies/ja-morant' },
    { name: 'Scotty Pippen Jr.', position: 'PG', number: 1, profileLink: '/nba/grizzlies/scotty-pippen-jr' },
    { name: 'Rayan Rupert', position: 'SG', number: 21, profileLink: '/nba/grizzlies/rayan-rupert' },
    { name: 'Cam Spencer', position: 'PG', number: 24, profileLink: '/nba/grizzlies/cam-spencer' },
    { name: 'Jaylen Wells', position: 'SG', number: 0, profileLink: '/nba/grizzlies/jaylen-wells' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Memphis Grizzlies</h1>
        <h2>Roster</h2>
        <table className="roster-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
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

export default MemphisGrizzlies;