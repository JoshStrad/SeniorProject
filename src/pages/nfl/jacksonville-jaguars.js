import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const JacksonvilleJaguarsQBs = () => {
  const qbs = [
    {
      name: 'Trevor Lawrence',
      number: 16,
      profileLink: '/nfl/jags/trevor-lawrence',
      headshot: 'https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/jaguars/leehtodhqxljzouuytn8'
    },
    {
      name: 'Mac Jones',
      number: 10,
      profileLink: '/nfl/jaguars/mac-jones',
      headshot: ''
    }
  ];

  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Jacksonville Jaguars — Quarterbacks</h1>
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

export default JacksonvilleJaguarsQBs;
