import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Brayan Bello',
      number: 66,
      profileLink: '/mlb/redsox/brayan-bello',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4720856.png&w=350&h=254'
    },
    {
      name: 'Ranger Suarez',
      number: 55,
      profileLink: '/mlb/redsox/ranger-suarez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39817.png&w=350&h=254'
    },
    {
      name: 'Garrett Crochet',
      number: 35,
      profileLink: '/mlb/redsox/garrett-crochet',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4297835.png&w=350&h=254'
    },
    {
      name: 'Connelly Early',
      number: 71,
      profileLink: '/mlb/redsox/connelly-early',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4863321.png&w=350&h=254'
    },
    {
      name: 'Sonny Gray',
      number: 54,
      profileLink: '/mlb/redsox/sonny-gray',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32082.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Boston Red Sox — Starting Pitchers</h1>
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
