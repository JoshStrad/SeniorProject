import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Sandy Alcantara',
      number: 22,
      profileLink: '/mlb/marlins/sandy-alcantara',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35241.png&w=350&h=254'
    },
    {
      name: 'Eury Perez',
      number: 39,
      profileLink: '/mlb/marlins/eury-perez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4917854.png&w=350&h=254'
    },
    {
      name: 'Chris Paddack',
      number: 33,
      profileLink: '/mlb/marlins/chris-paddack',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35999.png&w=350&h=254'
    },
    {
      name: 'Max Meyer',
      number: 23,
      profileLink: '/mlb/marlins/max-meyer',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4345164.png&w=350&h=254'
    },
    {
      name: 'Jaanson Junk',
      number: 26,
      profileLink: '/mlb/marlins/janson-junk',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4881980.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Miami Marlins — Starting Pitchers</h1>
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
