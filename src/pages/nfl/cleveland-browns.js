import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const ClevelandBrownsQBs = () => {
  const qbs = [
    {
      name: 'Deshaun Watson',
      number: 4,
      profileLink: '/nfl/browns/deshaun-watson',
      headshot: ''
    },
    {
      name: 'Dillion Gabriel',
      number: 8,
      profileLink: '/nfl/browns/dillion-gabriel',
      headshot: ''
    },
    {
      name: 'Shedeur Sanders',
      number: 2,
      profileLink: '/nfl/browns/shedeur-sanders',
      headshot: ''
    }
    
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cleveland Browns — Quarterbacks</h1>
        <p>Click a QB to open their player page.</p>

        <div className="qb-grid">
          {qbs.map((qb) => (
            <a className="qb-card" href={qb.profileLink} key={qb.name}>
              <div className="qb-photo">
                {qb.headshot ? (
                  <img src={qb.headshot} alt={`${qb.name} headshot`} loading="lazy" />
                ) : (
                  <div className="qb-photo--ph" aria-hidden="true" />
                )}
              </div>
              <div className="qb-info">
                <div className="qb-name">{qb.name}</div>
                {qb.number !== undefined && <div className="qb-num">#{qb.number}</div>}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ClevelandBrownsQBs;
