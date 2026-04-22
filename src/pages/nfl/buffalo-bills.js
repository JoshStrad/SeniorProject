import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const BuffaloBillsQBs = () => {
  const qbs = [
    {
      name: 'Josh Allen',
      number: 17,
      profileLink: '/nfl/bills/josh-allen',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png&w=350&h=254'
    },
    {
      name: 'Kyle Allen',
      number: 17,
      profileLink: '/nfl/bills/kyle-allen',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3115293.png&w=350&h=254'
    },
    {
      name: 'Shane Buechele',
      number: 6,
      profileLink: '/nfl/bills/shane-buechele',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4039034.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Buffalo Bills — Quarterbacks</h1>
        <p></p>

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

export default BuffaloBillsQBs;
