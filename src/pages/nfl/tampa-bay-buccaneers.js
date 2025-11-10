import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const TampaBayBuccaneersQBs = () => {
  const qbs = [
    { 
      name: 'Baker Mayfield', 
      number: 6, 
      profileLink: '/nfl/bucs/baker-mayfield', 
      headshot: '' 
    },
    { 
      name: 'Kyle Trask', 
      number: 2, 
      profileLink: '/nfl/buccaneers/kyle-trask', 
      headshot: '' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Tampa Bay Buccaneers — Quarterbacks</h1>
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
export default TampaBayBuccaneersQBs;
