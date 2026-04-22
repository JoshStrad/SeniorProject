import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const SanAntonioSpurs = () => {
  const roster = [
    { name: 'Harrison Barnes', position: 'PF', number: 40, profileLink: '/nba/spurs/harrison-barnes' },
    { name: 'Carter Bryant', position: 'SF', number: 11, profileLink: '/nba/spurs/carter-bryant' },
    { name: 'Stephon Castle', position: 'PG', number: 5, profileLink: '/nba/spurs/stephon-castle' },
    { name: 'Julian Champagnie', position: 'SF', number: 30, profileLink: '/nba/spurs/julian-champagnie' },
    { name: "De'Aaron Fox", position: 'PG', number: 4, profileLink: '/nba/spurs/deaaron-fox' },
    { name: 'Dylan Harper', position: 'PG', number: 2, profileLink: '/nba/spurs/dylan-harper' },
    { name: 'Keldon Johnson', position: 'SF', number: 3, profileLink: '/nba/spurs/keldon-johnson' },
    { name: 'Luke Kornet', position: 'C', number: 7, profileLink: '/nba/spurs/luke-kornet' },
    { name: 'Jordan McLaughlin', position: 'PG', number: 0, profileLink: '/nba/spurs/jordan-mclaughlin' },
    { name: 'Kelly Olynyk', position: 'PF', number: 8, profileLink: '/nba/spurs/kelly-olynyk' },
    { name: 'Devin Vassell', position: 'SG', number: 24, profileLink: '/nba/spurs/devin-vassell' },
    { name: 'Lindy Waters III', position: 'SF', number: 43, profileLink: '/nba/spurs/lindy-waters-iii' },
    { name: 'Victor Wembanyama', position: 'C', number: 1, profileLink: '/nba/spurs/victor-wembanyama' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>San Antonio Spurs</h1>
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

export default SanAntonioSpurs;