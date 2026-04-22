import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const Philedelphia76ers = () => {
  const roster = [
    { name: 'Dominick Barlow', position: 'F', number: 11, profileLink: '/nba/sixers/dominick-barlow' },
    { name: 'Adem Bona', position: 'C', number: 30, profileLink: '/nba/sixers/adem-bona' },
    { name: 'Jabari Walker', position: 'F', number: 1, profileLink: '/nba/sixers/jabari-walker' },
    { name: 'Andre Drummond', position: 'C', number: 9, profileLink: '/nba/sixers/andre-drummond' },
    { name: 'VJ Edgecombe', position: 'G', number: 77, profileLink: '/nba/sixers/vj-edgecombe' },
    { name: 'Justin Edwards', position: 'F', number: 19, profileLink: '/nba/sixers/justin-edwards' },
    { name: 'Joel Embiid', position: 'C', number: 21, profileLink: '/nba/sixers/joel-embiid' },
    { name: 'Paul George', position: 'F', number: 8, profileLink: '/nba/sixers/paul-george' },
    { name: 'Quentin Grimes', position: 'SG', number: 23, profileLink: '/nba/sixers/quentin-grimes' },
    { name: 'Kyle Lowry', position: 'PG', number: 7, profileLink: '/nba/sixers/kyle-lowry' },
    { name: 'Tyrese Maxey', position: 'PG', number: 0, profileLink: '/nba/sixers/tyrese-maxey' },
    { name: 'Kelly Oubre Jr.', position: 'F', number: 9, profileLink: '/nba/sixers/kelly-oubre-jr' },
    { name: 'Trendon Watford', position: 'PF', number: 28, profileLink: '/nba/sixers/trendon-watford' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Philedelphia 76ers</h1>
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

export default Philedelphia76ers;