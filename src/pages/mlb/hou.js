import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Hunter Brown',
      number: 58,
      profileLink: '/mlb/astros/hunter-brown',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4717803.png&w=350&h=254'
    },
    {
      name: 'Tatsuya Imai',
      number: 37,
      profileLink: '/mlb/astros/tatsuya-imai',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5330833.png&w=350&h=254'
    },
    {
      name: 'Cristian Javier',
      number: 53,
      profileLink: '/mlb/astros/cristian-javier',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41261.png&w=350&h=254'
    },
    {
      name: 'Mike Burrows',
      number: 50,
      profileLink: '/mlb/astros/mike-burrows',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4918155.png&w=350&h=254'
    },
    {
      name: 'Lance McCullers Jr.',
      number: 43,
      profileLink: '/mlb/astros/lance-mccullers',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32764.png&w=350&h=254'
    }

  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Houston Astros — Starting Pitchers</h1>
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
