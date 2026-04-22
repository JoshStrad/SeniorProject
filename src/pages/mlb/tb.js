import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Drew Rasmussen',
      number: 57,
      profileLink: '/mlb/rays/drew-rasmussen',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42584.png&w=350&h=254'
    },
    {
      name: 'Steven Matz',
      number: 32,
      profileLink: '/mlb/rays/steven-matz',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33106.png&w=350&h=254'
    },
     {
      name: 'Shane Mclananhan',
      number: 18,
      profileLink: '/mlb/rays/shane-mcclanahan',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41199.png&w=350&h=254'
    },
     {
      name: 'Ryan Pepiot',
      number: 44,
      profileLink: '/mlb/rays/ryan-pepiot',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4208281.png&w=350&h=254'
    }, 
    {
      name: 'Nick Martinez',
      number: 28,
      profileLink: '/mlb/rays/nick-martinez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33372.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Tampa Bay Rays — Starting Pitchers</h1>
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
