import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const BuffaloBillsQBs = () => {
  const qbs = [
    {
      name: 'Josh Allen',
      number: 17,
      profileLink: '/nfl/joshallen/josh-allen',
      headshot: 'https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fbuffalo-bills-josh-allen2025--qcoxd6nl.png&w=200&h=200&f=webp'
    },
    {
      name: 'Mitch Tribusky',
      number: 9,
      profileLink: '/nfl/bills/mitch-tribusky',
      headshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcHqRb9ZECLeYVc0CrxyWSxutZB9Vup1GiQ&s'
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Buffalo Bills — Quarterbacks</h1>
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

export default BuffaloBillsQBs;
