import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const ChicagoBearsQBs = () => {
  const qbs = [
    { 
        name: 'Caleb Williams', 
        number: 13, 
        profileLink: '/nfl/bears/caleb-williams', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431611.png&w=350&h=254'
    },        
    { 
        name: 'Tyson Bagent', 
        number: 17, 
        profileLink: '/nfl/bears/tyson-bagent', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4434153.png&w=350&h=254' 
    },
    { 
        name: 'Case Keenum', 
        number: 11, 
        profileLink: '/nfl/bears/case-keenum', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15168.png&w=350&h=254' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Chicago Bears — Quarterbacks</h1>
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
export default ChicagoBearsQBs;
