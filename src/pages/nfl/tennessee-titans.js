import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const TennesseeTitansQBs = () => {
  const qbs = [
    {
      name: 'Will Levis',
      number: 8,
      profileLink: '/nfl/titans/will-levis',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361418.png&w=350&h=254'
    },
     {
      name: 'Hendon Hooker',
      number: 16,
      profileLink: '/nfl/titans/hendon-hooker',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4240858.png&w=350&h=254'
    },
     {
      name: 'Mitchell Trubisky',
      number: 10,
      profileLink: '/nfl/titans/mitchell-trubisky',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3039707.png&w=350&h=254'
    },
    {
      name: 'Cam Ward',
      number: 1,
      profileLink: '/nfl/titans/cam-ward',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4688380.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Tennessee Titans — Quarterbacks</h1>
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

export default TennesseeTitansQBs;
