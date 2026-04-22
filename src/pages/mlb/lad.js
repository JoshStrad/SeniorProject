import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Yoshinobu Yamamoto',
      number: 18,
      profileLink: '/mlb/dodgers/yoshinobu-yamamoto',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4872587.png&w=350&h=254'
    },
    {
      name: 'Shohei Ohtani',
      number: 17,
      profileLink: '/mlb/dodgers/shohei-ohtani',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39832.png&w=350&h=254'
    },
     {
      name: 'Tyler Glasnow',
      number: 31,
      profileLink: '/mlb/dodgers/tyler-glasnow',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33190.png&w=350&h=254'
    },
     {
      name: 'Blake Snell',
      number: 7,
      profileLink: '/mlb/dodgers/blake-snell',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33748.png&w=350&h=254'
    }, 
    {
      name: 'Emmet Sheehan',
      number: 80,
      profileLink: '/mlb/dodgers/emmet-sheehan',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4417806.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Los Angeles Dodgers — Starting Pitchers</h1>
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
