import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const BostonCeltics = () => {
  const roster = [
    { name: 'Jayson Tatum', position: 'SF', number: 0, profileLink: '/nba/celtics/jayson-tatum' },
    { name: 'Jaylen Brown', position: 'SF', number: 7, profileLink: '/nba/celtics/jaylen-brown' },
    { name: 'Jrue Holiday', position: 'PG', number: 4, profileLink: '/nba/celtics/jrue-holiday' },
    { name: 'Derrick White', position: 'SG', number: 9, profileLink: '/nba/celtics/derrick-white' },
    { name: 'Kristaps Porzingis', position: 'PF', number: 8, profileLink: '/nba/celtics/kristaps-porzingis' },
    { name: 'Payton Pritchard', position: 'SG', number: 11, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Jordan Walsh', position: 'SF', number: 27, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'JD Davidson', position: 'PG', number: 20, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Neemias Queta', position: 'C', number: 88, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Drew Peterson', position: 'PF', number: 13, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Anton Watson', position: 'SF', number: 28, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Jaden Springer', position: 'PG', number: 44, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Baylor Scheierman', position: 'SG', number: 55, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Al Horford', position: 'C', number: 42, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Sam Houser', position: 'PF', number: 30, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Xavier Tilman Sr.', position: 'PF', number: 26, profileLink: '/nba/boston-celtics/jayson-tatum' },
    { name: 'Luke Kornet', position: 'C', number: 40, profileLink: '/nba/boston-celtics/jayson-tatum' }
    // Add other players here
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Boston Celtics</h1>
        <p>Welcome to the Boston Celtics page! Here you can find information about the team, including roster, and player stats.</p>

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

export default BostonCeltics;
