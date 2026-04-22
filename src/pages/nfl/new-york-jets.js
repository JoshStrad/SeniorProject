import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const NewYorkJetsQBs = () => {
  const qbs = [
    {
      name: 'Geno Smith',
      number: 7,
      profileLink: '/nfl/jets/geno-smith',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15864.png&w=350&h=254'
    },
    {
      name: 'Brady Cook',
      number: 5,
      profileLink: '/nfl/jets/brady-cook',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429435.png&w=350&h=254'
    },
    {
      name: 'Bailey Zappe',
      number: 7,
      profileLink: '/nfl/jets/bailey-zappe',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4250360.png&w=350&h=254'
    },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New York Jets — Quarterbacks</h1>
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

export default NewYorkJetsQBs;
