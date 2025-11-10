import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const NewEnglandPatriotsQBs = () => {
  const qbs = [
    {
      name: 'Drake Maye',
      number: 10,
      profileLink: '/nfl/pats/drake-maye',
      headshot: 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fnew-england-patriots-drake-maye---fazjljg.png&w=180&h=180&f=webp'
    },
    {
      name: 'Joshua Dobbs',
      number: 11,
      profileLink: '/nfl/patriots/joshua-dobbs',
      headshot: 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fnew-england-patriots-joshua-dobbs-01---qbjqj7k.png&w=180&h=180&f=webp'
    },
    {
      name: 'Tommy Devito',
      number: 12,
      profileLink: '/nfl/patriots/tommy-devito',
      headshot: 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fnew-england-patriots-joshua-dobbs-01---qbjqj7k.png&w=180&h=180&f=webp'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>New England Patriots — Quarterbacks</h1>
        <p>Click a QB to open their player page.</p>

        <div className="qb-grid">
          {qbs.map((qb) => (
            <a className="qb-card" href={qb.profileLink} key={qb.name}>
              <div className="qb-photo">
                {qb.headshot ? (
                  <img src={qb.headshot} alt={`${qb.name} headshot`} loading="lazy" />
                ) : (
                  <div className="qb-photo--ph" aria-hidden="true" />
                )}
              </div>
              <div className="qb-info">
                <div className="qb-name">{qb.name}</div>
                {qb.number !== undefined && <div className="qb-num">#{qb.number}</div>}
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewEnglandPatriotsQBs;
