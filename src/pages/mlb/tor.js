import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Trey Yesavage',
      number: 39,
      profileLink: '/mlb/bluejays/trey-yesavage',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4949041.png&w=350&h=254'
    },
     {
      name: 'Shane Bieber',
      number: 57,
      profileLink: '/mlb/bluejays/shane-bieber',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40912.png&w=350&h=254'
    },
     {
      name: 'Kevin Gausman',
      number: 34,
      profileLink: '/mlb/bluejays/kevin-gausman',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32667.png&w=350&h=254'
    }, 
    {
      name: 'Dylan Cease',
      number: 84,
      profileLink: '/mlb/bluejays/dylan-cease',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34943.png&w=350&h=254'
    },
    {
      name: 'Max Scherzer.',
      number: 31,
      profileLink: '/mlb/bluejays/max-scherzer',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28976.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Toronto Bluejays — Starting Pitchers</h1>
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
