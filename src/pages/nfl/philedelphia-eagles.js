import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const PhiladelphiaEaglesQBs = () => {
  const qbs = [
    { 
        name: 'Jalen Hurts', 
        number: 1, 
        profileLink: '/nfl/eagles/jalen-hurts', 
        headshot: '' 
    },
    { 
        name: 'Kenny Pickett', 
        number: 8, 
        profileLink: '/nfl/eagles/kenny-pickett', 
        headshot: '' 
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Philadelphia Eagles — Quarterbacks</h1>
        <p>Click a QB to open their player page.</p>
        <div className="qb-grid">
          {qbs.map(qb => (
            <a className="qb-card" href={qb.profileLink} key={qb.name}>
              <div className="qb-photo">{qb.headshot ? <img src={qb.headshot} alt={`${qb.name} headshot`} loading="lazy" /> : <div className="qb-photo--ph" />}</div>
              <div className="qb-info"><div className="qb-name">{qb.name}</div>{qb.number !== undefined && <div className="qb-num">#{qb.number}</div>}</div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default PhiladelphiaEaglesQBs;
