import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const LasVegasRaidersQBs = () => {
  const qbs = [
    {
      name: 'Geno Smith',
      number: 10,
      profileLink: '/nfl/raiders/gardner-minshew',
      headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png'
    },
    {
      name: 'Aidan O\'Connell',
      number: 12,
      profileLink: '/nfl/raiders/aidan-oconnell',
      headshot: 'https://a.espncdn.com/i/headshots/nfl/players/full/4242432.png'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Las Vegas Raiders — Quarterbacks</h1>
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

export default LasVegasRaidersQBs;
