import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Nick Pivetta',
      number: 27,
      profileLink: '/mlb/padres/nick-pivetta',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36071.png&w=350&h=254'
    },
    {
      name: 'Michael King',
      number: 34,
      profileLink: '/mlb/padres/michael-king',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40429.png&w=350&h=254'
    },
     {
      name: 'Joe Musgrove',
      number: 44,
      profileLink: '/mlb/padres/joe-musgrove',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34848.png&w=350&h=254'
    },
     {
      name: 'Randy Vasquez',
      number: 98,
      profileLink: '/mlb/padres/randy-vasquez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4722847.png&w=350&h=254'
    }, 
    {
      name: 'German Marquez',
      number: 33,
      profileLink: '/mlb/padres/german-marquez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34874.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>San Diego Padres — Starting Pitchers</h1>
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
