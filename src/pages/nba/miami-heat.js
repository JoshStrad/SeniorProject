import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const MiamiHeat = () => {
  const roster = [
    { name: 'Bam Adebayo', position: 'C', number: 13, profileLink: '/nba/heat/bam-adebayo' },
    { name: 'Simone Fontecchio', position: 'F', number: 0, profileLink: '/nba/heat/simone-fontecchio' },
    { name: 'Myron Gardner', position: 'F', number: 15, profileLink: '/nba/heat/myron-gardner' },
    { name: 'Vladislav Goldin', position: 'C', number: 50, profileLink: '/nba/heat/vladislav-goldin' },
    { name: 'Tyler Herro', position: 'PG', number: 14, profileLink: '/nba/heat/tyler-herro' },
    { name: 'Kasparas Jakucionis', position: 'G', number: 25, profileLink: '/nba/heat/kasparas-jakucionis' },
    { name: 'Jaime Jaquez Jr.', position: 'G', number: 11, profileLink: '/nba/heat/jaime-jaquez-jr' },
    { name: 'Keshad Johnson', position: 'F', number: 16, profileLink: '/nba/heat/keshad-johnson' },
    { name: 'Nikola Jovic', position: 'F', number: 5, profileLink: '/nba/heat/nikola-jovic' },
    { name: 'Pelle Larsson', position: 'G', number: 9, profileLink: '/nba/heat/pelle-larsson' },
    { name: 'Davion Mitchell', position: 'PG', number: 45, profileLink: '/nba/heat/davion-mitchell' },
    { name: 'Norman Powell', position: 'G', number: 24, profileLink: '/nba/heat/norman-powell' },
    { name: 'Terry Rozier', position: 'SG', number: 2, profileLink: '/nba/heat/terry-rozier' },
    { name: 'Dru Smith', position: 'G', number: 12, profileLink: '/nba/heat/dru-smith' },
    { name: 'Ethan Thompson', position: 'G', number: null, profileLink: '/nba/heat/ethan-thompson' },
    { name: "Kel'el Ware", position: 'C', number: 7, profileLink: '/nba/heat/kel-el-ware' },
    { name: 'Andrew Wiggins', position: 'SF', number: 22, profileLink: '/nba/heat/andrew-wiggins' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Miami Heat</h1>
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

export default MiamiHeat;
