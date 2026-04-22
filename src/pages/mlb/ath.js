import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Luis Severino',
      number: 40,
      profileLink: '/mlb/athletics/luis-severino',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33263.png&w=350&h=254'
    },
    {
      name: 'Jeffrey Springs',
      number: 59,
      profileLink: '/mlb/athletics/jeffrey-springs',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35397.png&w=350&h=254'
    },
    {
      name: 'Aaron Civale',
      number: 45,
      profileLink: '/mlb/athletics/aaron-civale',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40934.png&w=350&h=254'
    },
    {
      name: 'Jacob Lopez',
      number: 57,
      profileLink: '/mlb/athletics/jacob-lopez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42239.png&w=350&h=254'
    },

    {
      name: 'J.T. Ginn',
      number: 35,
      profileLink: '/mlb/athletics/jt-ginn',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4414002.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Athletics — Starting Pitchers</h1>
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
