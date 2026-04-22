import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Jacob deGrom',
      number: 48,
      profileLink: '/mlb/rangers/jacob-degrom',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32796.png&w=350&h=254'
    },
    {
      name: 'Nathan Eovaldi',
      number: 17,
      profileLink: '/mlb/rangers/nathan-eovaldi',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31174.png&w=350&h=254'
    },
    {
      name: 'MacKenzie Gore',
      number: 1,
      profileLink: '/mlb/rangers/mackenzie-gore',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39636.png&w=350&h=254'
    },
    {
      name: 'Jack Leiter',
      number: 22,
      profileLink: '/mlb/rangers/jack-leiter',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4622181.png&w=350&h=254'
    },
    {
      name: 'Kumar Rocker',
      number: 80,
      profileLink: '/mlb/rangers/kumar-rocker',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4414525.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Texas Rangers — Starting Pitchers</h1>
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
