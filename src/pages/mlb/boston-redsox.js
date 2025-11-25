import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const BostonRedSoxPitchers = () => {
  const pitchers = [
    {
      name: 'Brayan Bello',
      number: 66,
      profileLink: '/mlb/redsox/brayan-bello',
      headshot: ''
    },
    {
      name: 'Nick Pivetta',
      number: 37,
      profileLink: '/mlb/redsox/nick-pivetta',
      headshot: ''
    },
    {
      name: 'Garrett Crochet',
      number: 66,
      profileLink: '/mlb/redsox/brayan-bello',
      headshot: ''
    },
    {
      name: 'Kutter Crawford',
      number: 50,
      profileLink: '/mlb/redsox/kutter-crawford',
      headshot: ''
    }

  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Boston Red Sox — Starting Pitchers</h1>
        <p>Click a pitcher to open their player page.</p>

        <div className="pitcher-grid">
          {pitchers.map((p) => (
            <a className="pitcher-card" href={p.profileLink} key={p.name}>
              <div className="pitcher-photo">
                {p.headshot ? (
                  <img src={p.headshot} alt={`${p.name} headshot`} loading="lazy" />
                ) : (
                  <div className="pitcher-photo--ph" aria-hidden="true" />
                )}
              </div>
              <div className="pitcher-info">
                <div className="pitcher-name">{p.name}</div>
                {p.number && <div className="pitcher-num">#{p.number}</div>}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BostonRedSoxPitchers;
