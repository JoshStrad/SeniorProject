import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const CarolinaPanthersQBs = () => {
  const qbs = [
    { 
        name: 'Bryce Young', 
        number: 9, 
        profileLink: '/nfl/panthers/bryce-young', 
        headshot: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/panthers/mnj0l508buwkng2helja' 
    },
    { 
        name: 'Andy Dalton', 
        number: 14, 
        profileLink: '/nfl/panthers/andy-dalton', 
        headshot: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/panthers/psquodfx6vfqdamkr26y' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Carolina Panthers — Quarterbacks</h1>
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
export default CarolinaPanthersQBs;
