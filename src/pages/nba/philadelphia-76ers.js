import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const Philedelphia76ers = () => {
  const roster = [
    { name: 'Dominick Barlow', position: 'F', number: 11, profileLink: '/nba/knicks/jalen-brunson' },
    { name: 'Adem Bona', position: 'C', number: 30, profileLink: '/nba/knicks/og-anunoby' },
    { name: 'Johni Broome', position: 'F', number: 1, profileLink: '/nba/knicks/mikal-bridges' },
    { name: 'Andre Drummond', position: 'C', number: 9, profileLink: '/nba/knicks/jordan-clarkson' },
    { name: 'VJ Edgecombe', position: 'G', number: 77, profileLink: '/nba/celtics/kristaps-porzingis' },
    { name: 'Justin Edwards', position: 'F', number: 19, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Joel Embiid', position: 'C', number: 21, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Paul George', position: 'F', number: 8, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Eric Gordon', position: 'SG', number: 23, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Kyle Lowry', position: 'PG', number: 7, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Tyrese Maxey', position: 'PG', number: 0, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Jared McCain', position: 'G', number: 20, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Kelly Oubre Jr.', position: 'F', number: 9, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Trendon Watford', position: 'PF', number: 28, profileLink: '/nba/boston-celtics/jayson-tatum' },
    // Add other players here
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Philedelphia 76ers</h1>
        <p>Welcome to the Philedelphia 76ers team page! Here you can find information about the team, including roster, and player stats.</p>

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
                <td>{player.number}</td>
                <td>
                  <a href={player.profileLink}>{player.name}</a>
                </td>
                <td>{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default Philedelphia76ers;