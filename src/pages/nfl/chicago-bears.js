import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './nfl-team-qbs.css';

const ChicagoBearsQBs = () => {
  const qbs = [
    { 
        name: 'Caleb Williams', 
        number: 13, 
        profileLink: '/nfl/bears/caleb-williams', 
        headshot: 'https://static.clubs.nfl.com/image/upload/t_person_squared_mobile/f_auto/v1715703686/bears/tejh8jk8nrvoulnxtab4.jpg' 
    },
    { 
        name: 'Tyson Bagent', 
        number: 17, 
        profileLink: '/nfl/bears/tyson-bagent', 
        headshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIiyeYhWXeVbQkCmX09e5ujjQ-BWELC4uEQ&s' 
    }
  ];
  return (
    <>
      <Header />
      <main className="team-container">
        <h1>Chicago Bears — Quarterbacks</h1>
        <p>Click a QB to open their player page.</p>
        <div className="qb-grid">{qbs.map(qb => (
          <a className="qb-card" href={qb.profileLink} key={qb.name}>
            <div className="qb-photo">{qb.headshot ? <img src={qb.headshot} alt={`${qb.name} headshot`} loading="lazy" /> : <div className="qb-photo--ph" />}</div>
            <div className="qb-info"><div className="qb-name">{qb.name}</div>{qb.number !== undefined && <div className="qb-num">#{qb.number}</div>}</div>
          </a>
        ))}</div>
      </main>
      <Footer />
    </>
  );
};
export default ChicagoBearsQBs;
