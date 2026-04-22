import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Zac Gallen',
      number: 23,
      profileLink: '/mlb/diamondbacks/zac-gallen',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39910.png&w=350&h=254'
    },
    {
      name: 'Michael Soroka',
      number: 34,
      profileLink: '/mlb/diamondbacks/michael-soroka',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34984.png&w=350&h=254'
    },
    {
      name: 'Merill Kelly',
      number: 29,
      profileLink: '/mlb/diamondbacks/merrill-kelly',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32968.png&w=350&h=254'
    },
    {
      name: 'Ryne Nelson',
      number: 19,
      profileLink: '/mlb/diamondbacks/ryne-nelson',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4916269.png&w=350&h=254'
    },

     {
      name: 'Eduardo Rodriguez',
      number: 57,
      profileLink: '/mlb/diamondbacks/eduardo-rodriguez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32675.png&w=350&h=254'
    }




  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Arizona Diamondbacks — Starting Pitchers</h1>
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
