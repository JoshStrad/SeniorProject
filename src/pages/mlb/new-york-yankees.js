import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './mlb-pitchers.css';

const NewYorkYankeesPitchers = () => {
  const pitchers = [
    {
      name: 'Gerrit Cole',
      number: 45,
      profileLink: '/mlb/yankees/gerrit-cole',
      headshot: ''
    },
    {
      name: 'Max Fried',
      number: 55,
      profileLink: '/mlb/yankees/carlos-rodon',
      headshot: ''
    },
     {
      name: 'Carlos Rodón',
      number: 55,
      profileLink: '/mlb/yankees/carlos-rodon',
      headshot: ''
    },
     {
      name: 'Luis Gil',
      number: 55,
      profileLink: '/mlb/yankees/carlos-rodon',
      headshot: ''
    }, 
    {
      name: 'Cam Schittler',
      number: 55,
      profileLink: '/mlb/yankees/carlos-rodon',
      headshot: ''
    },
    {
      name: 'Nestor Cortes Jr.',
      number: 65,
      profileLink: '/mlb/yankees/nestor-cortes',
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
