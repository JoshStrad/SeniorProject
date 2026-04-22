import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const IndianapolisColtsQBs = () => {
  const qbs = [
    {
      name: 'Anthony Richardson',
      number: 5,
      profileLink: '/nfl/colts/anthony-richardson',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429084.png&w=350&h=254'
    },
    {
      name: 'Daniel Jones',
      number: 4,
      profileLink: '/nfl/colts/daniel-jones',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917792.png&w=350&h=254'
    },
    {
      name: 'Riley Leonard',
      number: 15,
      profileLink: '/nfl/colts/riley-leonard',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4683423.png&w=350&h=254'
    },
    {
      name: 'Seth Heneigan',
      number: 4,
      profileLink: '/nfl/colts/seth-henigan',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4606194.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Indianapolis Colts — Quarterbacks</h1>
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

export default IndianapolisColtsQBs;
