import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const SteelersQBs = () => {
  const qbs = [
    {
      name: 'Aaron Rodgers',
      number: 8,
      profileLink: '/nfl/steelers/aaron-rodgers',
      headshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QKCQOLRT_MIKPq8gfO8Y1nCvT7BKlvNW2A&s'
    },
    {
      name: 'Mason Rudolph',
      number: 5,
      profileLink: '/nfl/jets/tyrod-taylor',
      headshot: ''
    },
    {
      name: 'Will Howard',
      number: 8,
      profileLink: '/nfl/steelers/will-howard',
      headshot: 'https://cdn.statmuse.com/forge-v2/aHR0cHM6Ly9jZG4uc3RhdG11c2UuY29tL2ltZy9uZmwvcGxheWVycy9uZXcteLS1oa3Nzd2lzYi5wbmc_Ymc9MTE1NzQwJnQ9dHdpdHRlcg==.png'
    },
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Pittsburgh Steelers — Quarterbacks</h1>
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

export default SteelersQBs;
