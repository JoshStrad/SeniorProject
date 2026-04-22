import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const AtlantaFalconsQBs = () => {
  const qbs = [
    { 
        name: 'Tua Tagovailoa', 
        number: 1, 
        profileLink: '/nfl/falcons/tua-tagovailoa', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241479.png&w=350&h=254' 
    },
    { 
        name: 'Michael Penix Jr.', 
        number: 9, 
        profileLink: '/nfl/falcons/michael-penix', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360423.png&w=350&h=254' 
    },
    { 
        name: 'Trevor Siemian', 
        number: 18, 
        profileLink: '/nfl/falcons/trevor-siemian', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2511109.png&w=350&h=254' 
    },
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Atlanta Falcons — Quarterbacks</h1>
        <p></p>
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
export default AtlantaFalconsQBs;
