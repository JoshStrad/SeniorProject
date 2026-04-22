import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nba-teampage.css';

const DetroitPistons = () => {
    const roster = [
      { name: 'Cade Cunningham', position: 'PG', number: 2, profileLink: '/nba/pistons/cade-cunningham' },
      { name: 'Jalen Duren', position: 'C', number: 0, profileLink: '/nba/pistons/jalen-duren' },
      { name: 'Javonte Green', position: 'G', number: 31, profileLink: '/nba/pistons/javonte-green' },
      { name: 'Tobias Harris', position: 'F', number: 12, profileLink: '/nba/pistons/tobias-harris' },
      { name: 'Ronald Holland II', position: 'F', number: 5, profileLink: '/nba/pistons/ron-holland' },
      { name: 'Daniss Jenkins', position: 'G', number: 24, profileLink: '/nba/pistons/daniss-jenkins' },
      { name: 'Kevin Huerter ', position: 'G', number: 27, profileLink: '/nba/pistons/kevin-huerter' },
      { name: 'Bobi Klintman', position: 'F', number: 34, profileLink: '/nba/pistons/bobi-klintman' },
      { name: 'Chaz Lanier', position: 'G', number: 20, profileLink: '/nba/pistons/chaz-lanier' },
      { name: 'Caris LeVert', position: 'SG', number: 0, profileLink: '/nba/pistons/caris-levert' },
      { name: 'Paul Reed', position: 'F', number: 7, profileLink: '/nba/pistons/paul-reed' },
      { name: 'Duncan Robinson', position: 'F', number: 55, profileLink: '/nba/pistons/duncan-robinson' },
      { name: 'Marcus Sasser', position: 'G', number: 25, profileLink: '/nba/pistons/marcus-sasser' },
      { name: 'Isaiah Stewart', position: 'C', number: 28, profileLink: '/nba/pistons/isaiah-stewart' },
      { name: 'Ausar Thompson', position: 'F', number: 9, profileLink: '/nba/pistons/ausar-thompson' },
    ];
  
    return (
      <>
        <Header />
        <main className="team-container">
          <h1>Detroit Pistons</h1>
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
  
  export default DetroitPistons;