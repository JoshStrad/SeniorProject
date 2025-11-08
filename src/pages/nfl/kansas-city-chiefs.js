import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const KansasCityChiefsQBs = () => {
  const qbs = [
    {
      name: 'Patrick Mahomes',
      number: 15,
      profileLink: '/nfl/mahomes/patrick-mahomes',
      headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png'
    },
    {
      name: 'Carson Wentz',
      number: 11,
      profileLink: '/nfl/chiefs/carson-wentz',
      headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Kansas City Chiefs — Quarterbacks</h1>
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

export default KansasCityChiefsQBs;
