import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Tarik Skubal',
      number: 29,
      profileLink: '/mlb/tigers/tarik-skubal',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42409.png&w=350&h=254'
    },
    {
      name: 'Framber Valdez',
      number: 59,
      profileLink: '/mlb/tigers/framber-valdez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36581.png&w=350&h=254'
    },
    {
      name: 'Jack Flaherty',
      number: 9,
      profileLink: '/mlb/tigers/jack-flaherty',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33837.png&w=350&h=254'
    },
    {
      name: 'Justin Verlander',
      number: 35,
      profileLink: '/mlb/tigers/justin-verlander',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6341.png&w=350&h=254'
    },

    {
      name: 'Casey Mize',
      number: 12,
      profileLink: '/mlb/tigers/casey-mize',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41167.png&w=350&h=254'
    },


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Detroit Tigers — Starting Pitchers</h1>
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
