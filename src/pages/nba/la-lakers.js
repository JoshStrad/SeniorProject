import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './celtics.css';

const LosAngelesLakers = () => {
  const roster = [
    { name: 'Deandre Ayton', position: 'C', number: 5, profileLink: '/nba/lakers/deandre-ayton' },
    { name: 'RJ Davis', position: 'G', number: 99, profileLink: '/nba/lakers/rj-davis' },
    { name: 'Eric Dixon', position: 'F', number: 98, profileLink: '/nba/lakers/eric-dixon' },
    { name: 'Luka Doncic', position: 'PG', number: 77, profileLink: '/nba/lakers/luka-doncic' },
    { name: 'Rui Hachimura', position: 'PF', number: 28, profileLink: '/nba/lakers/rui-hachimura' },
    { name: 'Jaxson Hayes', position: 'C', number: 11, profileLink: '/nba/lakers/jaxson-hayes' },
    { name: 'Bronny James', position: 'G', number: 9, profileLink: '/nba/lakers/bronny-james' },
    { name: 'LeBron James', position: 'SF', number: 23, profileLink: '/nba/lakers/lebron-james' },
    { name: 'Arthur Kaluma', position: 'F', number: 97, profileLink: '/nba/lakers/arthur-kaluma' },
    { name: 'Maxi Kleber', position: 'PF', number: 14, profileLink: '/nba/lakers/maxi-kleber' },
    { name: 'Dalton Knecht', position: 'G', number: 4, profileLink: '/nba/lakers/dalton-knecht' },
    { name: 'Christian Koloko', position: 'C', number: 10, profileLink: '/nba/lakers/christian-koloko' },
    { name: 'Jake LaRavia', position: 'F', number: 12, profileLink: '/nba/lakers/jake-laravia' },
    { name: 'Chris Manon', position: 'G', number: 30, profileLink: '/nba/lakers/chris-manon' },
    { name: 'Augustas Marciulionis', position: 'G', number: 96, profileLink: '/nba/lakers/augustas-marciulionis' },
    { name: 'Austin Reaves', position: 'SG', number: 15, profileLink: '/nba/lakers/austin-reaves' },
    { name: 'Marcus Smart', position: 'PG', number: 36, profileLink: '/nba/lakers/marcus-smart' },
    { name: 'Adou Thiero', position: 'F', number: 1, profileLink: '/nba/lakers/adou-thiero' },
    { name: 'Jarred Vanderbilt', position: 'PF', number: 2, profileLink: '/nba/lakers/jarred-vanderbilt' },
    { name: 'Gabe Vincent', position: 'PG', number: 7, profileLink: '/nba/lakers/gabe-vincent' },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Los Angeles Lakers</h1>
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

export default LosAngelesLakers;
