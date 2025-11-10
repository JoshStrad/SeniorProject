import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const DallasCowboysQBs = () => {
  const qbs = [
    { 
      name: 'Dak Prescott', 
      number: 4, 
      profileLink: '/nfl/cowboys/dak-prescott', 
      headshot: 'data:image/jpeg;base64,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' 
    },
    { 
        name: 'Trey Lance', 
        number: 5, 
        profileLink: '', 
        headshot: '' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Dallas Cowboys — Quarterbacks</h1>
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
export default DallasCowboysQBs;
