import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const MinnesotaVikingsQBs = () => {
  const qbs = [
    { 
        name: 'J.J. McCarthy', 
        number: 9, 
        profileLink: '/nfl/vikings/jj-mccarthy', 
        headshot: '' 
    },

    { 
        name: 'Sam Darnold', 
        number: 14, 
        profileLink: '/nfl/vikings/sam-darnold', 
        headshot: '' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Minnesota Vikings — Quarterbacks</h1>
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
export default MinnesotaVikingsQBs;
