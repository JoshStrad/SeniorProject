import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const CincinnatiBengalsQBs = () => {
  const qbs = [
    {
      name: 'Joe Burrow',
      number: 9,
      profileLink: '/nfl/bengals/joe-burrow',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png&w=350&h=254'
    },
    {
      name: 'Jake Browning',
      number: 6,
      profileLink: '/nfl/bengals/jake-browning',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3886812.png&w=350&h=254'
    },
    {
      name: 'Joe Flacco',
      number: 2,
      profileLink: '/nfl/bengals/joe-flacco',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11252.png&w=350&h=254'
}
];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cincinnati Bengals — Quarterbacks</h1>
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

export default CincinnatiBengalsQBs;
