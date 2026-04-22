import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const ChicagoBulls = () => {
  const roster = [
    { name: 'Matas Buzelis', position: 'F', number: 14, profileLink: '/nba/bulls/matas-buzelis' },
    { name: 'Anfernee Simons', position: 'PG', number: 5, profileLink: '/nba/bulls/anfernee-simons' },
    { name: 'Zach Collins', position: 'PF', number: 12, profileLink: '/nba/bulls/zach-collins' },
    { name: 'Collin Sexton', position: 'SG', number: 11, profileLink: '/nba/bulls/collin-sexton' },
    { name: 'Guerchon Yabusele', position: 'F', number: 24, profileLink: '/nba/bulls/guerchon-yabusele' },
    { name: 'Josh Giddey', position: 'SG', number: 13, profileLink: '/nba/bulls/josh-giddey' },
    { name: 'Tre Jones', position: 'PG', number: 30, profileLink: '/nba/bulls/tre-jones' },
    { name: 'Rob Dillingham', position: 'G', number: 7, profileLink: '/nba/bulls/rob-dillingham' },
    { name: 'Isaac Okoro', position: 'SF', number: 35, profileLink: '/nba/bulls/isaac-okoro' },
    { name: 'Jalen Smith', position: 'PF', number: 7, profileLink: '/nba/bulls/jalen-smith' },
    { name: 'Nick Richards', position: 'F', number: 25, profileLink: '/nba/bulls/nick-richards' },
    { name: 'Patrick Williams', position: 'PF', number: 44, profileLink: '/nba/bulls/patrick-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Chicago Bulls</h1>
        <p></p>

        <h2>Roster</h2>
        <table className="roster-table">
          <thead>
            <tr><th>Number</th><th>Name</th><th>Position</th></tr>
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

export default ChicagoBulls;
