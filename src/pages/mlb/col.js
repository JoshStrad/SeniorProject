import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Kyle Freeland',
      number: 21,
      profileLink: '/mlb/rockies/kyle-freeland',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33839.png&w=350&h=254'
    },
    {
      name: 'Michael Lorenzen',
      number: 24,
      profileLink: '/mlb/rockies/michael-lorenzen',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33252.png&w=350&h=254'
    },
     {
      name: 'Jose Quintana',
      number: 62,
      profileLink: '/mlb/rockies/jose-quintana',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32106.png&w=350&h=254'
    },
     {
      name: 'Tomoyuki Sugano',
      number: 11,
      profileLink: '/mlb/rockies/tomoyuki-sugano',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4142423.png&w=350&h=254'
    }, 
    {
      name: 'Ryan Feltner',
      number: 18,
      profileLink: '/mlb/rockies/ryan-feltner',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4019484.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Colorado Rockies — Starting Pitchers</h1>
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
