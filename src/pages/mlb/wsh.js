import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Cade Cavali',
      number: 24,
      profileLink: '/mlb/nationals/cade-cavalli',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4308037.png&w=350&h=254'
    },
    {
      name: 'Zach Littell',
      number: 18,
      profileLink: '/mlb/nationals/zack-littell',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36052.png&w=350&h=254'
    },
    {
      name: 'Jake Irvin',
      number: 27,
      profileLink: '/mlb/nationals/jake-irvin',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41290.png&w=350&h=254'
    },
    {
      name: 'Foster Griffin',
      number: 22,
      profileLink: '/mlb/nationals/foster-griffin',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33773.png&w=350&h=254'
    },
    {
      name: 'Miles Mikolas',
      number: 36,
      profileLink: '/mlb/nationals/miles-mikolas',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32116.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Washington Nationals — Starting Pitchers</h1>
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
