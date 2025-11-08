import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const DetroitLionsQBs = () => {
  const qbs = [
    { 
        name: 'Jared Goff', 
        number: 16, 
        profileLink: '/nfl/lions/jared-goff', 
        headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png' 
    },
    { 
        name: 'Hendon Hooker', 
        number: 12, 
        profileLink: '/nfl/lions/hendon-hooker', 
        headshot: '' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Detroit Lions — Quarterbacks</h1>
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
export default DetroitLionsQBs;
