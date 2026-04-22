import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Kyle Bradish',
      number: 38,
      profileLink: '/mlb/orioles/kyle-bradish',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4311625.png&w=350&h=254'
    },
    {
      name: 'Shane Baz',
      number: 34,
      profileLink: '/mlb/orioles/shane-baz',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39639.png&w=350&h=254'
    },
    {
      name: 'Chris Bassitt',
      number: 40,
      profileLink: '/mlb/orioles/chris-bassitt',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33148.png&w=350&h=254'
    },
    {
      name: 'Trevor Rogers',
      number: 28,
      profileLink: '/mlb/orioles/trevor-rodgers',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39640.png&w=350&h=254'
    },
    {
      name: 'Dean Kremer',
      number: 64,
      profileLink: '/mlb/orioles/dean-kremer',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/38295.png&w=350&h=254'
    }



  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Baltimore Orioles — Starting Pitchers</h1>
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
