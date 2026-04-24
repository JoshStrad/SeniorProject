import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Spencer Strider',
      number: 99,
      profileLink: '/mlb/braves/spencer-strider',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4307825.png&w=350&h=254'
    },
    {
      name: 'Reynaldo Lopez',
      number: 40,
      profileLink: '/mlb/braves/reynaldo-lopez',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33860.png&w=350&h=254'
    },
     {
      name: 'Chris Sale',
      number: 51,
      profileLink: '/mlb/braves/chris-sale',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30948.png&w=350&h=254'
    },
     {
      name: 'Grant Holmes',
      number: 66,
      profileLink: '/mlb/braves/grant-holmes',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33840.png&w=350&h=254'
    }, 
    {
      name: 'Bryce Elder',
      number: 55,
      profileLink: '/mlb/braves/bryce-elder',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4301067.png&w=350&h=254'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Atlanta Braves — Starting Pitchers</h1>
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
