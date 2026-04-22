import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const BostonRedSoxPitchers = () => {
  const pitchers = [
    {
      name: 'Yusei Kikuchi',
      number: 16,
      profileLink: '/mlb/angels/yusei-kikuchi',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41415.png&w=350&h=254'
    },
    {
      name: 'Jose Soriano',
      number: 59,
      profileLink: '/mlb/angels/jose-soriano',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40973.png&w=350&h=254'
    },
    {
      name: 'Reid Detmers',
      number: 48,
      profileLink: '/mlb/angels/reid-detmers',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4326697.png&w=350&h=254'
    },
    {
      name: 'Grayson Rodriguez',
      number: 21,
      profileLink: '/mlb/angels/grayson-rodriguez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41196.png&w=350&h=254'
    },

    {
      name: 'Jack Kochanowicz',
      number: 41,
      profileLink: '/mlb/angels/jack-kochanowicz',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4917819.png&w=350&h=254'
    }



  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Los Angeles Angels — Starting Pitchers</h1>
        <p>Click a pitcher to open their player page.</p>

        <div className="pitcher-grid">
          {pitchers.map((p) => (
            <a className="pitcher-card" href={p.profileLink} key={p.name}>
              <div className="pitcher-photo">
                {p.headshot ? (
                  <img src={p.headshot} alt={`${p.name} headshot`} loading="lazy" />
                ) : (
                  <div className="pitcher-photo--ph" aria-hidden="true" />
                )}
              </div>
              <div className="pitcher-info">
                <div className="pitcher-name">{p.name}</div>
                {p.number && <div className="pitcher-num">#{p.number}</div>}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BostonRedSoxPitchers;
