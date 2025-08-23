import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const ChicagoBulls = () => {
  const roster = [
    { name: 'Matas Buzelis', position: 'F', number: 14, profileLink: '/nba/bulls/matas-buzelis' },
    { name: 'Jevon Carter', position: 'PG', number: 5, profileLink: '/nba/bulls/jevon-carter' },
    { name: 'Zach Collins', position: 'PF', number: 12, profileLink: '/nba/bulls/zach-collins' },
    { name: 'Ayo Dosunmu', position: 'SG', number: 11, profileLink: '/nba/bulls/ayo-dosunmu' },
    { name: 'Noa Essengue', position: 'F', number: 24, profileLink: '/nba/bulls/noa-essengue' },
    { name: 'Caleb Grill', position: 'G', number: null, profileLink: '/nba/bulls/caleb-grill' },
    { name: 'Kevin Huerter', position: 'SG', number: 13, profileLink: '/nba/bulls/kevin-huerter' },
    { name: 'Tre Jones', position: 'PG', number: 30, profileLink: '/nba/bulls/tre-jones' },
    { name: 'Yuki Kawamura', position: 'G', number: null, profileLink: '/nba/bulls/yuki-kawamura' },
    { name: 'Emanuel Miller', position: 'F', number: 20, profileLink: '/nba/bulls/emanuel-miller' },
    { name: 'Isaac Okoro', position: 'SF', number: 35, profileLink: '/nba/bulls/isaac-okoro' },
    { name: 'Lachlan Olbrich', position: 'F', number: null, profileLink: '/nba/bulls/lachlan-olbrich' },
    { name: 'Julian Phillips', position: 'F', number: 15, profileLink: '/nba/bulls/julian-phillips' },
    { name: 'Wooga Poplar', position: 'G', number: null, profileLink: '/nba/bulls/wooga-poplar' },
    { name: 'Jalen Smith', position: 'PF', number: 7, profileLink: '/nba/bulls/jalen-smith' },
    { name: 'Dalen Terry', position: 'F', number: 25, profileLink: '/nba/bulls/dalen-terry' },
    { name: 'Nikola Vucevic', position: 'C', number: 9, profileLink: '/nba/bulls/nikola-vucevic' },
    { name: 'Coby White', position: 'PG', number: 0, profileLink: '/nba/bulls/coby-white' },
    { name: 'Patrick Williams', position: 'PF', number: 44, profileLink: '/nba/bulls/patrick-williams' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Chicago Bulls</h1>
        <p>Welcome to the Chicago Bulls page!</p>

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
