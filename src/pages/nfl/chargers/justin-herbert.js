import React from 'react';
import Header from '../../../components/Header';
import './justin-herbert.css';
import herbert from '../../../../scrapeddata/justin-herbert.json';

const COLUMNS = [
  "Season","Age","Team","Lg","Pos","G","GS","Cmp","Att","Cmp%","Yds","TD","Int",
  "Rate","Sk","Y/A","AY/A","Y/G","Rush","RuYds","RuTD","Awards"
];

export default function JustinHerbert() {
  const rows = herbert.per_season.map(r => ({ ...r, Team: r.Tm }));

  return (
    <>
      <Header />
      <main className="profile-container chargers-aura">
        <h1>{herbert.player}</h1>
        <p>Number: {herbert.number}</p>
        <p>Height: {herbert.height}</p>
        <p>Age: {herbert.age}</p>
        <p>Position: {herbert.position}</p>
        <p>College: {herbert.college}</p>
        <p>Drafted: {herbert.draft}</p>

        <div className="player-image">
          <img src={herbert.image} alt={herbert.player} className="profile-img" />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>{herbert.bio}</p>
        </div>

        <div className="stats">
          <h2>{herbert.player} Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>{COLUMNS.map(h => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {COLUMNS.map(h => {
                    const val = row[h];
                    return (
                      <td key={h}>
                        {typeof val === 'number' && !Number.isInteger(val)
                          ? val.toFixed(1)
                          : val ?? ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <small>Source: pro-football-reference.com</small>
        </div>
      </main>
    </>
  );
}
