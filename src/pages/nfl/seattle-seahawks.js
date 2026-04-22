import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const SeattleSeahawksQBs = () => {
  const qbs = [
    { 
        name: 'Sam Darnold', 
        number: 14, 
        profileLink: '/nfl/seahawks/sam-darnold', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3912547.png&w=350&h=254' 
    },
    { 
        name: 'Jalen Milroe', 
        number: 6, 
        profileLink: '/nfl/seahawks/jalen-milroe', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432734.png&w=350&h=254' 
    },
    { 
        name: 'Drew Lock', 
        number: 2, 
        profileLink: '/nfl/seahawks/drew-lock', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3924327.png&w=350&h=254' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Seattle Seahawks — Quarterbacks</h1>
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
export default SeattleSeahawksQBs;
