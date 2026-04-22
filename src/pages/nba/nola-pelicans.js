import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const NewOrleansPelicans = () => {
  const roster = [
    { name: 'Saddiq Bey', position: 'SF', number: 41, profileLink: '/nba/pelicans/saddiq-bey' },
    { name: 'Jeremiah Fears', position: 'PG', number: 0, profileLink: '/nba/pelicans/jeremiah-fears' },
    { name: 'Jordan Hawkins', position: 'SG', number: 24, profileLink: '/nba/pelicans/jordan-hawkins' },
    { name: 'Herb Jones', position: 'SG', number: 2, profileLink: '/nba/pelicans/herbert-jones' },
    { name: 'DeAndre Jordan', position: 'C', number: 9, profileLink: '/nba/pelicans/deandre-jordan' },
    { name: 'Kevon Looney', position: 'C', number: 55, profileLink: '/nba/pelicans/kevon-looney' },
    { name: 'Karlo Matkovic', position: 'PF', number: 17, profileLink: '/nba/pelicans/karlo-matkovic' },
    { name: 'Bryce McGowens', position: 'SG', number: 11, profileLink: '/nba/pelicans/bryce-mcgowens' },
    { name: 'Yves Missi', position: 'C', number: 21, profileLink: '/nba/pelicans/yves-missi' },
    { name: 'Trey Murphy III', position: 'SF', number: 25, profileLink: '/nba/pelicans/trey-murphy-iii' },
    { name: 'Dejounte Murray', position: 'PG', number: 5, profileLink: '/nba/pelicans/dejounte-murray' },
    { name: 'Micah Peavy', position: 'SF', number: 14, profileLink: '/nba/pelicans/micah-peavy' },
    { name: 'Jordan Poole', position: 'SG', number: 3, profileLink: '/nba/pelicans/jordan-poole' },
    { name: 'Derik Queen', position: 'C', number: 22, profileLink: '/nba/pelicans/derik-queen' },
    { name: 'Zion Williamson', position: 'PF', number: 1, profileLink: '/nba/pelicans/zion-williamson' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New Orleans Pelicans</h1>
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

export default NewOrleansPelicans;