import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Zack Wheeler',
      number: 45,
      profileLink: '/mlb/phillies/zack-wheeler',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31267.png&w=350&h=254'
    },
    {
      name: 'Crisopher Sanchez',
      number: 61,
      profileLink: '/mlb/phillies/cristopher-sanchez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42359.png&w=350&h=254'
    },
    {
      name: 'Jesus Lazardo',
      number: 44,
      profileLink: '/mlb/phillies/jesus-luzardo',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39667.png&w=350&h=254'
    },
    {
      name: 'Aaron Nola',
      number: 27,
      profileLink: '/mlb/phillies/aaron-nola',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33709.png&w=350&h=254'
    },
    {
      name: 'Andrew Painter',
      number: 50,
      profileLink: '/mlb/phillies/andrew-painter',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4872683.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Philadelphia Philles — Starting Pitchers</h1>
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
