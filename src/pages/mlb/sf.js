import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Logan Webb',
      number: 62,
      profileLink: '/mlb/giants/logan-webb',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41216.png&w=350&h=254'
    },
    {
      name: 'Robbie Ray',
      number: 38,
      profileLink: '/mlb/giants/robbie-ray',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32175.png&w=350&h=254'
    },
     {
      name: 'Adrian Houser',
      number: 12,
      profileLink: '/mlb/giants/adrian-houser',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32157.png&w=350&h=254'
    },
     {
      name: 'Landen Roupp',
      number: 65,
      profileLink: '/mlb/giants/landen-roupp',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4345404.png&w=350&h=254'
    }, 
    {
      name: 'Tyler Mahle',
      number: 54,
      profileLink: '/mlb/giants/tyler-mahle',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34973.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>San Francisco Giants — Starting Pitchers</h1>
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
