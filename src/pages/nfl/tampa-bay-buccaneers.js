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
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3052587.png&w=350&h=254' 
    },
    { 
      name: 'Jake Browning', 
      number: 2, 
      profileLink: '/nfl/bucs/jake-browning', 
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3886812.png&w=350&h=254' 
    },
    { 
      name: 'Connor Bazelak', 
      number: 2, 
      profileLink: '/nfl/bucs/connor-bazelak', 
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426444.png&w=350&h=254' 
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
