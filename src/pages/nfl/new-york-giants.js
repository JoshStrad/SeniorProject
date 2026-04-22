import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const NewYorkGiantsQBs = () => {
  const qbs = [
    { 
        name: 'Jaxson Dart', 
        number: 8, 
        profileLink: '/nfl/giants/jaxson-dart', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4689114.png&w=350&h=254' 
    },
    { 
        name: 'Jameis Winston', 
        number: 19, 
        profileLink: '/nfl/giants/jameis-winston', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2969939.png&w=350&h=254' 
    },
    { 
        name: 'Brandon Allen', 
        number: 3, 
        profileLink: '/nfl/giants/brandon-allen', 
        headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2574511.png&w=350&h=254' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New York Giants — Quarterbacks</h1>
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
export default NewYorkGiantsQBs;
