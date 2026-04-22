import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const GoldenStateWarriors = () => {
  const roster = [
    { name: 'De Anthony Melton', position: 'G', number: 1, profileLink: '/nba/warriors/deanthony-melton' },
    { name: 'Jimmy Butler III', position: 'SF', number: 10, profileLink: '/nba/warriors/jimmy-butler' },
    { name: 'Stephen Curry', position: 'PG', number: 30, profileLink: '/nba/warriors/stephen-curry' },
    { name: 'Draymond Green', position: 'PF', number: 23, profileLink: '/nba/warriors/draymond-green' },
    { name: 'Seth Curry', position: 'SG', number: 7, profileLink: '/nba/warriors/seth-curry' },
    { name: 'Kristaps Porzingis', position: 'C', number: 32, profileLink: '/nba/warriors/kristaps-prozingis' },
    { name: 'Al Horford', position: 'C', number: 31, profileLink: '/nba/warriors/al-horford' },
    { name: 'Moses Moody', position: 'SG', number: 4, profileLink: '/nba/warriors/moses-moody' },
    { name: 'Gary Payton II', position: 'SG', number: 0, profileLink: '/nba/warriors/gary-payton-ii' },
    { name: 'Brandin Podziemski', position: 'G', number: 2, profileLink: '/nba/warriors/brandin-podziemski' },
    { name: 'Quinten Post', position: 'C', number: 21, profileLink: '/nba/warriors/quinten-post' },
    { name: 'Will Richard', position: 'G', number: 3, profileLink: '/nba/warriors/will-richard' },
    { name: 'Gui Santos', position: 'F', number: 15, profileLink: '/nba/warriors/gui-santos' },
    { name: 'Pat Spencer', position: 'G', number: 61, profileLink: '/nba/warriors/pat-spencer' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Golden State Warriors</h1>
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

export default GoldenStateWarriors;
