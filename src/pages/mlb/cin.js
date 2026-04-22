import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const MLBTeamPage = () => {
  const pitchers = [
    {
      name: 'Hunter Greene',
      number: 21,
      profileLink: '/mlb/reds/hunter-greene',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39635.png&w=350&h=254'
    },
    {
      name: 'Andrew Abbott',
      number: 41,
      profileLink: '/mlb/reds/andrew-abbott',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4414528.png&w=350&h=254'
    },
    {
      name: 'Nick Lodolo',
      number: 40,
      profileLink: '/mlb/reds/nick-lodolo',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42433.png&w=350&h=254'
    },
    {
      name: 'Brady Singer',
      number: 51,
      profileLink: '/mlb/reds/brady-singer',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41172.png&w=350&h=254'
    },
    {
      name: 'Chase Burns',
      number: 26,
      profileLink: '/mlb/reds/chase-burns',
      headshot: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4927516.png&w=350&h=254'
    }


  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Cincinnati Reds — Starting Pitchers</h1>
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
