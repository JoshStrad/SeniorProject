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
      name: 'Sean Clifford',
      number: 4,
      profileLink: '/nfl/bengals/sean-clifford',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3886812.png&w=350&h=254'
    },
    {
      name: 'Josh Johnson',
      number: 6,
      profileLink: '/nfl/bengals/josh-johnson',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11394.png&w=350&h=254'
    },
    {
      name: 'Joe Flacco',
      number: 16,
      profileLink: '/nfl/bengals/joe-flacco',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4259592.png&w=350&h=254'
}
];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cincinnati Bengals — Quarterbacks</h1>
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

export default CincinnatiBengalsQBs;
