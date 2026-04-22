import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Joe Ryan',
      number: 41,
      profileLink: '/mlb/twins/joe-ryan',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42450.png&w=350&h=254'
    },
    {
      name: 'Bailey Ober',
      number: 17,
      profileLink: '/mlb/twins/bailey-ober',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/3107919.png&w=350&h=254'
    },
    {
      name: 'Mick Abel',
      number: 20,
      profileLink: '/mlb/twins/mick-abel',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4718970.png&w=350&h=254'
    },
    {
      name: 'Simeon Woods Richardson',
      number: 24,
      profileLink: '/mlb/twins/simeon-woodsrichardson',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41383.png&w=350&h=254'
    },

    {
      name: 'Taj Bradley',
      number: 26,
      profileLink: '/mlb/twins/taj-bradley',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42480.png&w=350&h=254'
    }

  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Minnesota Twins — Starting Pitchers</h1>
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
