import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Noah Schultz',
      number: 22,
      profileLink: '/mlb/whitesox/noah-schultz',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5080754.png&w=350&h=254'
    },
    {
      name: 'Anthony Kay',
      number: 18,
      profileLink: '/mlb/whitesox/anthony-kay',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40947.png&w=350&h=254'
    },
    {
      name: 'Davis Martin',
      number: 65,
      profileLink: '/mlb/whitesox/davis-martin',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42823.png&w=350&h=254'
    },
    {
      name: 'Sean Burke',
      number: 59,
      profileLink: '/mlb/whitesox/sean-burke',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4867679.png&w=350&h=254'
    },

    {
      name: 'Erick Fedde',
      number: 47,
      profileLink: '/mlb/whitesox/erick-fedde',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33793.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Chicago White Sox — Starting Pitchers</h1>
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
