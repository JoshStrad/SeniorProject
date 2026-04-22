import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const ArizonaCardinalsQBs = () => {
  const qbs = [
    { 
        name: 'Gardner Minshew II', 
        number: 15, 
        profileLink: '/nfl/cardinals/gardner-minshew', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038524.png&w=350&h=254' 
    },
    { 
        name: 'Kedon Slovis', 
        number: 19, 
        profileLink: '/nfl/cardinals/kedon-slovis', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4428512.png&w=350&h=254' 
    },
    { 
        name: 'Jacoby Brissett', 
        number: 7, 
        profileLink: '/nfl/cardinals/jacoby-brissett', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2578570.png&w=350&h=254' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Arizona Cardinals — Quarterbacks</h1>
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
export default ArizonaCardinalsQBs;
