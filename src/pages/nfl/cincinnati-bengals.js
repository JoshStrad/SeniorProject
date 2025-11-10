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
      headshot: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/bengals/ygxpkhhnl62zjtwb0sdm'
    },
    {
      name: 'Jake Browning',
      number: 6,
      profileLink: '/nfl/bengals/jake-browning',
      headshot: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/bengals/jytyrofkv2mr8kclsy4y'
    },
    {
      name: 'Joe Flacco',
      number: 2,
      profileLink: '/nfl/bengals/joe-flacco',
      headshot: 'data:image/jpeg;base64,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'
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
