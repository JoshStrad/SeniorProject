import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const DallasMavericks = () => {
  const roster = [
    { name: 'Marvin Bagley III', position: 'C', number: 35, profileLink: '/nba/mavericks/marvin-bagley' },
    { name: 'Max Christie', position: 'SG', number: 0, profileLink: '/nba/mavericks/max-christie' },
    { name: 'Cooper Flagg', position: 'SF', number: 32, profileLink: '/nba/mavericks/cooper-flagg' },
    { name: 'Daniel Gafford', position: 'C', number: 21, profileLink: '/nba/mavericks/daniel-gafford' },
    { name: 'Kyrie Irving', position: 'PG', number: 11, profileLink: '/nba/mavericks/kyrie-irving' },
    { name: 'AJ Johnson', position: 'PG', number: 8, profileLink: '/nba/mavericks/aj-johnson' },
    { name: 'Dereck Lively II', position: 'C', number: 2, profileLink: '/nba/mavericks/dereck-lively' },
    { name: 'Naji Marshall', position: 'SG', number: 13, profileLink: '/nba/mavericks/naji-marshall' },
    { name: 'Caleb Martin', position: 'SF', number: 16, profileLink: '/nba/mavericks/caleb-martin' },
    { name: 'Khris Middleton', position: 'SF', number: 20, profileLink: '/nba/mavericks/khris-middleton' },
    { name: 'Dwight Powell', position: 'C', number: 7, profileLink: '/nba/mavericks/dwight-powell' },
    { name: 'Klay Thompson', position: 'SG', number: 31, profileLink: '/nba/mavericks/klay-thompson' },
    { name: 'PJ Washington', position: 'PF', number: 25, profileLink: '/nba/mavericks/pj-washington' },
    { name: 'Brandon Williams', position: 'PG', number: 10, profileLink: '/nba/mavericks/brandon-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Dallas Mavericks</h1>
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

export default DallasMavericks;