import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const BostonCeltics = () => {
  const roster = [
    { name: 'Jayson Tatum', position: 'SF', number: 0, profileLink: '/nba/celtics/jayson-tatum' },
    { name: 'Jaylen Brown', position: 'SF', number: 7, profileLink: '/nba/celtics/jaylen-brown' },
    { name: 'Luka Garza', position: 'C', number: 52, profileLink: '/nba/celtics/luka-garza' },
    { name: 'Derrick White', position: 'SG', number: 9, profileLink: '/nba/celtics/derrick-white' },
    { name: 'Hugo Gonzalez', position: 'PF', number: 8, profileLink: '/nba/celtics/hugo-gonz-lez' },
    { name: 'Payton Pritchard', position: 'SG', number: 11, profileLink: '/nba/celtics/payton-pritchard' },
    { name: 'Jordan Walsh', position: 'SF', number: 27, profileLink: '/nba/celtics/jordan-walsh' },
    { name: 'Neemias Queta', position: 'C', number: 88, profileLink: '/nba/celtics/neemias-queta' },
    { name: 'Ron Harper', position: 'PF', number: 13, profileLink: '/nba/celtics/ron-harperjr' },
    { name: 'Nikola Vucevic', position: 'C', number: 28, profileLink: '/nba/celtics/nikola-vucevic' },
    { name: 'Baylor Scheierman', position: 'SG', number: 55, profileLink: '/nba/celtics/baylor-scheierman' },
    { name: 'Sam Houser', position: 'SF', number: 30, profileLink: '/nba/boston-celtics/sam-hauser' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Boston Celtics</h1>
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
