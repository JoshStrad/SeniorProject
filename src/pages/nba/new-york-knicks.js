import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const NewYorkKnicks = () => {
  const roster = [
    { name: 'Jalen Brunson', position: 'PG', number: 11, profileLink: '/nba/knicks/jalen-brunson' },
    { name: 'OG Anunoby', position: 'SF', number: 8, profileLink: '/nba/knicks/og-anunoby' },
    { name: 'Mikal Bridges', position: 'SF', number: 25, profileLink: '/nba/knicks/mikal-bridges' },
    { name: 'Jordan Clarkson', position: 'G', number: 9, profileLink: '/nba/knicks/jordan-clarkson' },
    { name: 'Pacome Dadiet', position: 'G', number: 4, profileLink: '/nba/celtics/kristaps-porzingis' },
    { name: 'Mohamed Diawara', position: 'F', number: 11, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Josh Hart', position: 'SG', number: 3, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Ariel Hukporti', position: 'C', number: 55, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Tyler Kolek', position: 'G', number: 13, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Miles McBride', position: 'PG', number: 2, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Kevin McCullar', position: 'F', number: 9, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Mitchell Robinson', position: 'C', number: 23, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Karl-Anthony Towns', position: 'C', number: 32, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Guerchon Yabsele', position: 'F', number: 28, profileLink: '/nba/boston-celtics/jayson-tatum' },
    // Add other players here
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New York Knicks</h1>
        <p>Welcome to the New York Knicks page! Here you can find information about the team, including roster, and player stats.</p>

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

export default NewYorkKnicks;
