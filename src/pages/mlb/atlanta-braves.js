import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const NewYorkYankeesPitchers = () => {
  const pitchers = [
    {
      name: 'Spencer Strider',
      number: 45,
      profileLink: '/mlb/braves/spencer-strider',
      headshot: ''
    },
    {
      name: 'Spencer Schwellenbach',
      number: 55,
      profileLink: '/mlb/braves/spencer-schwellenbach',
      headshot: ''
    },
     {
      name: 'Chris Sale',
      number: 55,
      profileLink: '/mlb/yankees/chris-sale',
      headshot: ''
    },
     {
      name: 'Hurston Waldrep',
      number: 55,
      profileLink: '/mlb/braves/hurston-waldrep',
      headshot: ''
    }, 
    {
      name: 'AJ Smith-Shawver',
      number: 55,
      profileLink: '/mlb/braves/aj-smith',
      headshot: ''
    },
    {
      name: '.',
      number: 65,
      profileLink: '/mlb/braves/aj-smith',
      headshot: ''
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New York Yankees — Starting Pitchers</h1>
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

export default NewYorkYankeesPitchers;
