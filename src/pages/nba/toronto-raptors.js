import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const TorontoRaptors = () => {
  const roster = [
    { name: 'Ochai Agbaji', position: 'G', number: 30, profileLink: '/nba/raptors/ochai-agbaji' },
    { name: 'Scottie Barnes', position: 'SF', number: 4, profileLink: '/nba/raptors/scottie-barnes' },
    { name: 'RJ Barrett', position: 'SG', number: 9, profileLink: '/nba/raptors/rj-barrett' },
    { name: 'Immanuel Quickley', position: 'SG', number: 5, profileLink: '/nba/raptors/immanuel-quickley' },
    { name: 'Jakob Pöltl', position: 'C', number: null, profileLink: '/nba/raptors/jakob-poeltl' },
    { name: 'Brandon Ingram', position: 'SF', number: 3, profileLink: '/nba/raptors/brandon-ingram' },
    { name: 'Gradey Dick', position: 'SG', number: null, profileLink: '/nba/raptors/gradey-dick' },
    { name: 'Ochai Agbaji', position: 'SG', number: null, profileLink: '/nba/raptors/ochai-agbaji' },
    { name: 'A. J. Lawson', position: 'SG', number: 0, profileLink: '/nba/raptors/aj-lawson' },
    { name: 'Ja\'Kobe Walter', position: 'SG', number: 14, profileLink: '/nba/raptors/jakobe-walter' },
    { name: 'Jamal Shead', position: 'PG', number: 23, profileLink: '/nba/raptors/jamal-shead' },
    { name: 'Jonathan Mogbo', position: 'C', number: null, profileLink: '/nba/raptors/jonathan-mogbo' },
    { name: 'Chucky Hepburn', position: 'SG', number: null, profileLink: '/nba/raptors/chucky-hepburn' },
    { name: 'Sandro Mamukelashvili', position: 'F', number: null, profileLink: '/nba/raptors/sandro-mamukelashvili' },
    { name: 'Alijah Martin', position: 'SG', number: 55, profileLink: '/nba/raptors/alijah-martin' },
    { name: 'Collin Murray-Boyles', position: 'SF/PF', number: null, profileLink: '/nba/raptors/collin-murray-boyles' },
    { name: 'Garrett Temple', position: 'G', number: null, profileLink: '/nba/raptors/garrett-temple' },
    // Add other players as needed
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Toronto Raptors</h1>
        <p>Welcome to the Toronto Raptors team page! Here you can find information about the team, including roster and player stats.</p>

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
