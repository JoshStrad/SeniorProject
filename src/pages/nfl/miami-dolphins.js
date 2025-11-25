import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const MiamiDolphinsQBs = () => {
  const qbs = [
    {
      name: 'Tua Tagovailoa',
      number: 1,
      profileLink: '/nfl/dolphins/tua-tagovailoa',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241479.png&w=350&h=254'
    },
    {
      name: 'Mike White',
      number: 14,
      profileLink: '/nfl/dolphins/mike-white',
      headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/3915415.png'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Miami Dolphins — Quarterbacks</h1>
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

export default MiamiDolphinsQBs;
