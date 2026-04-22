import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Matthew Boyd',
      number: 16,
      profileLink: '/mlb/cubs/matthew-boyd',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34401.png&w=350&h=254'
    },
    {
      name: 'Shota Imanaga',
      number: 18,
      profileLink: '/mlb/cubs/shota-imanaga',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5134630.png&w=350&h=254'
    },
    {
      name: 'Edward Caberera',
      number: 30,
      profileLink: '/mlb/cubs/edward-cabrera',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40944.png&w=350&h=254'
    },
    {
      name: 'Jameson Taillon',
      number: 50,
      profileLink: '/mlb/cubs/jameson-taillon',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31258.png&w=350&h=254'
    },
    {
      name: 'Colin Rea',
      number: 53,
      profileLink: '/mlb/cubs/colin-rea',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33950.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Chicago Cubs — Starting Pitchers</h1>
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
