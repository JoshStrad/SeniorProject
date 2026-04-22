import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Brandon Woodruff',
      number: 53,
      profileLink: '/mlb/brewers/brandon-woodruff',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/37515.png&w=350&h=254'
    },
    {
      name: 'Quinn Priester',
      number: 46,
      profileLink: '/mlb/brewers/quinn-priester',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42449.png&w=350&h=254'
    },
    {
      name: 'Jacob Misiorowski',
      number: 32,
      profileLink: '/mlb/brewers/jacob-misiorowski',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5080761.png&w=350&h=254'
    },
    {
      name: 'Chad Patrick',
      number: 39,
      profileLink: '/mlb/brewers/chad-patrick',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5131708.png&w=350&h=254'
    },
    {
      name: 'Kyle Harrison',
      number: 52,
      profileLink: '/mlb/brewers/kyle-harrison',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4683375.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Milwaukee Brewers — Starting Pitchers</h1>
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
