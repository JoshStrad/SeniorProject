import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Freddy Peralta',
      number: 51,
      profileLink: '/mlb/mets/freddy-peralta',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39825.png&w=350&h=254'
    },
    {
      name: 'Nolan McLean',
      number: 26,
      profileLink: '/mlb/mets/nolan-mclean',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4433874.png&w=350&h=254'
    },
    {
      name: 'Clay Holmes',
      number: 35,
      profileLink: '/mlb/mets/clay-holmes',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32827.png&w=350&h=254'
    },
    {
      name: 'David Peterson',
      number: 23,
      profileLink: '/mlb/mets/david-peterson',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40921.png&w=350&h=254'
    },
    {
      name: 'Kodai Senga',
      number: 50,
      profileLink: '/mlb/mets/kodai-senga',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4142421.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New York Mets — Starting Pitchers</h1>
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
