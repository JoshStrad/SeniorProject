import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Matthew Liberatore',
      number: 32,
      profileLink: '/mlb/cardinals/matthew-liberatore',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41173.png&w=350&h=254'
    },
    {
      name: 'Dustin May',
      number: 3,
      profileLink: '/mlb/cardinals/dustin-may',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40937.png&w=350&h=254'
    },
    {
      name: 'Michael McGreevy',
      number: 36,
      profileLink: '/mlb/cardinals/michael-mcgreevy',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4424141.png&w=350&h=254'
    },
    {
      name: 'Andre Pallante',
      number: 53,
      profileLink: '/mlb/cardinals/andre-pallante',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4109034.png&w=350&h=254'
    },
    {
      name: 'Kyle Leahy ',
      number: 50,
      profileLink: '/mlb/cardinals/kyle-leahy',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5006093.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>St. Louis Cardinals — Starting Pitchers</h1>
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
