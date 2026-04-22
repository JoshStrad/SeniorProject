import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Tanner Bibee',
      number: 28,
      profileLink: '/mlb/guardians/tanner-bibee',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4345278.png&w=350&h=254'
    },
    {
      name: 'Gavin Williams',
      number: 32,
      profileLink: '/mlb/guardians/gavin-williams',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4345076.png&w=350&h=254'
    },
    {
      name: 'Slade Cecconi',
      number: 44,
      profileLink: '/mlb/guardians/slade-cecconi',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41462.png&w=350&h=254'
    },
    {
      name: 'Parker Messick',
      number: 77,
      profileLink: '/mlb/guardians/parker-messick',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4619898.png&w=350&h=254'
    },

    {
      name: 'Joey Cantillo',
      number: 54,
      profileLink: '/mlb/guardians/joey-cantillo',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42488.png&w=350&h=254'
    }

  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cleveland Guardians — Starting Pitchers</h1>
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
