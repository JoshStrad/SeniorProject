import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const TorontoRaptors = () => {
  const roster = [
    { name: 'Scottie Barnes', position: 'SF', number: 4, profileLink: '/nba/raptors/scottie-barnes' },
    { name: 'RJ Barrett', position: 'SG', number: 9, profileLink: '/nba/raptors/rj-barrett' },
    { name: 'Immanuel Quickley', position: 'SG', number: 5, profileLink: '/nba/raptors/immanuel-quickley' },
    { name: 'Jakob Pöltl', position: 'C', number: 19, profileLink: '/nba/raptors/jakob-poeltl' },
    { name: 'Brandon Ingram', position: 'SF', number: 3, profileLink: '/nba/raptors/brandon-ingram' },
    { name: 'Gradey Dick', position: 'SG', number: 1, profileLink: '/nba/raptors/gradey-dick' },
    { name: 'Ja\'Kobe Walter', position: 'SG', number: 14, profileLink: '/nba/raptors/jakobe-walter' },
    { name: 'Jamal Shead', position: 'PG', number: 23, profileLink: '/nba/raptors/jamal-shead' },
    { name: 'Trace Jackson-Davis', position: 'C', number: 32, profileLink: '/nba/raptors/trayce-jackson-davis' },
    { name: 'Sandro Mamukelashvili', position: 'F', number: 54, profileLink: '/nba/raptors/sandro-mamukelashvili' },
    { name: 'Collin Murray-Boyles', position: 'F', number: 12, profileLink: '/nba/raptors/collin-murray-boyles' },
    { name: 'Garrett Temple', position: 'G', number: 17, profileLink: '/nba/raptors/garrett-temple' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Toronto Raptors</h1>
        <p></p>

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
            {roster.map((player) => (
              <tr key={player.name}>
                <td>{player.number !== null ? player.number : '—'}</td>
                <td>
                  <a href={player.profileLink}>{player.name}</a>
                </td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default TorontoRaptors;
