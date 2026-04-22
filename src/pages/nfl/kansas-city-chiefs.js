import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const KansasCityChiefsQBs = () => {
  const qbs = [
    {
      name: 'Patrick Mahomes',
      number: 15,
      profileLink: '/nfl/chiefs/patrick-mahomes',
      headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png'
    },
     {
      name: 'Justin Fields',
      number: 7,
      profileLink: '/nfl/chiefs/justin-fields',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362887.png&w=350&h=254'
    },
     {
      name: 'Chris Oladokun ',
      number: 19,
      profileLink: '/nfl/chiefs/chris-oladokun',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4044111.png&w=350&h=254'
    },
    {
      name: 'Jake Haener',
      number: 11,
      profileLink: '/nfl/chiefs/jake-haener',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4243322.png&w=350&h=254'
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
