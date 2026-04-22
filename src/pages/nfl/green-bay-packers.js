import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const GreenBayPackersQBs = () => {
  const qbs = [
    { 
        name: 'Jordan Love', 
        number: 10, 
        profileLink: '/nfl/packers/jordan-love', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png&w=350&h=254' 
    },
    { 
        name: 'Desmond Ridder', 
        number: 8, 
        profileLink: '/nfl/packers/desmond-ridder', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4239086.png&w=350&h=254' 
    },
     { 
        name: 'Kyle McCord', 
        number: 8, 
        profileLink: '/nfl/packers/kyle-mccord', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4433971.png&w=350&h=254' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Green Bay Packers — Quarterbacks</h1>
        <p>Click a QB to open their player page.</p>
        <div className="qb-grid">{qbs.map(qb => (
          <a className="qb-card" href={qb.profileLink} key={qb.name}>
            <div className="qb-photo">{qb.headshot ? <img src={qb.headshot} alt={`${qb.name} headshot`} loading="lazy" /> : <div className="qb-photo--ph" />}</div>
            <div className="qb-info"><div className="qb-name">{qb.name}</div>{qb.number !== undefined && <div className="qb-num">#{qb.number}</div>}</div>
          </a>
        ))}</div>
      </main>
      <Footer />
    </>
  );
};
export default GreenBayPackersQBs;
