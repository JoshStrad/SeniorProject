import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Bryan Woo',
      number: 22,
      profileLink: '/mlb/mariners/bryan-woo',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4629089.png&w=350&h=254'
    },
    {
      name: 'Logan Gilbert',
      number: 36,
      profileLink: '/mlb/mariners/logan-gilbert',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41221.png&w=350&h=254'
    },
    {
      name: 'Luis Castillo',
      number: 58,
      profileLink: '/mlb/mariners/luis-castillo',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35124.png&w=350&h=254'
    },
    {
      name: 'George Kirby',
      number: 68,
      profileLink: '/mlb/mariners/george-kirby',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42406.png&w=350&h=254'
    },
    {
      name: 'Bryce Miller',
      number: 50,
      profileLink: '/mlb/mariners/bryce-miller',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4654313.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Seattle Mariners — Starting Pitchers</h1>
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

export default MLBTeamPage;
