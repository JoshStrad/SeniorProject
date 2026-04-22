import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const SanFrancisco49ersQBs = () => {
  const qbs = [
    { 
        name: 'Brock Purdy', 
        number: 13, 
        profileLink: '/nfl/49ers/brock-purdy', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361741.png&w=350&h=254' 
    },
    { 
        name: 'Mac Jones', 
        number: 10, 
        profileLink: '/nfl/49ers/mac-jones', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241464.png&w=350&h=254' 
    },
      { 
        name: 'Adrian Marinez', 
        number: 4, 
        profileLink: '/nfl/49ers/adrian-martinez', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361182.png&w=350&h=254' 
    },
      { 
        name: 'Kurtis Rourke', 
        number: 14, 
        profileLink: '/nfl/49ers/kurtis-rourke', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430431.png&w=350&h=254' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>San Francisco 49ers — Quarterbacks</h1>
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
export default SanFrancisco49ersQBs;
