import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const DetroitPistons = () => {
    const roster = [
      { name: 'Cade Cunningham', position: 'PG', number: 2, profileLink: '/nba/pistons/cade-cunningham' },
      { name: 'Jalen Duren', position: 'C', number: 0, profileLink: '/nba/pistons/jalen-duren' },
      { name: 'Javonte Green', position: 'G', number: null, profileLink: '/nba/pistons/javonte-green' },
      { name: 'Tobias Harris', position: 'F', number: 12, profileLink: '/nba/pistons/tobias-harris' },
      { name: 'Ronald Holland II', position: 'F', number: 0, profileLink: '/nba/pistons/ronald-holland-ii' },
      { name: 'Jaden Ivey', position: 'PG', number: 23, profileLink: '/nba/pistons/jaden-ivey' },
      { name: 'Daniss Jenkins', position: 'G', number: 24, profileLink: '/nba/pistons/daniss-jenkins' },
      { name: 'Colby Jones', position: 'G', number: null, profileLink: '/nba/pistons/colby-jones' },
      { name: 'Bobi Klintman', position: 'F', number: 34, profileLink: '/nba/pistons/bobi-klintman' },
      { name: 'Chaz Lanier', position: 'G', number: null, profileLink: '/nba/pistons/chaz-lanier' },
      { name: 'Caris LeVert', position: 'SG', number: null, profileLink: '/nba/pistons/caris-levert' },
      { name: 'Paul Reed', position: 'F', number: 7, profileLink: '/nba/pistons/paul-reed' },
      { name: 'Duncan Robinson', position: 'F', number: null, profileLink: '/nba/pistons/duncan-robinson' },
      { name: 'Marcus Sasser', position: 'G', number: 25, profileLink: '/nba/pistons/marcus-sasser' },
      { name: 'Tolu Smith', position: 'F', number: 35, profileLink: '/nba/pistons/tolu-smith' },
      { name: 'Isaiah Stewart', position: 'C', number: 28, profileLink: '/nba/pistons/isaiah-stewart' },
      { name: 'Ausar Thompson', position: 'F', number: 9, profileLink: '/nba/pistons/ausar-thompson' },
    ];
  
    return (
      <>
        <Header />
        <main className="team-container">
          <h1>Detroit Pistons</h1>
          <p>Welcome to the Detroit Pistons page!</p>
  
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
  
  export default DetroitPistons;