import React from 'react';
import Header from '../../../components/Header';
import './patrick-mahomes.css';
import mahomes from '../../../../scrapeddata/patrick-mahomes.json';

const COLUMNS = [
  'Season',
  'Age',
  'Team',
  'Lg',
  'Pos',
  'G',
  'GS',
  'Cmp',
  'Att',
  'Cmp%',
  'Yds',
  'TD',
  'Int',
  'Rate',
  'Sk',
  'Y/A',
  'AY/A',
  'Y/G',
  'Rush',
  'RuYds',
  'RuTD',
  'Awards',
];

const staticRows = [
  {
    Season: '2017', Age: 22, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 1, GS: 1, Cmp: 22, Att: 35, 'Cmp%': 62.9,
    Yds: 284, TD: 0, Int: 1, Rate: 76.4,
    Sk: 2, 'Y/A': 8.1, 'AY/A': 4.7, 'Y/G': 284.0,
    Rush: 7, RuYds: 10, RuTD: 0, Awards: '',
  },
  {
    Season: '2018', Age: 23, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 16, GS: 16, Cmp: 383, Att: 580, 'Cmp%': 66.0,
    Yds: 5097, TD: 50, Int: 12, Rate: 113.8,
    Sk: 26, 'Y/A': 8.8, 'AY/A': 9.6, 'Y/G': 318.6,
    Rush: 60, RuYds: 272, RuTD: 2, Awards: 'MVP, AP1, PB',
  },
  {
    Season: '2019', Age: 24, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 14, GS: 14, Cmp: 319, Att: 484, 'Cmp%': 65.9,
    Yds: 4031, TD: 26, Int: 5, Rate: 105.3,
    Sk: 17, 'Y/A': 8.3, 'AY/A': 8.9, 'Y/G': 288.0,
    Rush: 43, RuYds: 218, RuTD: 2, Awards: 'SB MVP',
  },
  {
    Season: '2020', Age: 25, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 15, GS: 15, Cmp: 390, Att: 588, 'Cmp%': 66.3,
    Yds: 4740, TD: 38, Int: 6, Rate: 108.2,
    Sk: 22, 'Y/A': 8.1, 'AY/A': 8.9, 'Y/G': 316.0,
    Rush: 62, RuYds: 308, RuTD: 2, Awards: 'PB',
  },
  {
    Season: '2021', Age: 26, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 17, GS: 17, Cmp: 436, Att: 658, 'Cmp%': 66.3,
    Yds: 4839, TD: 37, Int: 13, Rate: 98.5,
    Sk: 28, 'Y/A': 7.4, 'AY/A': 7.3, 'Y/G': 284.6,
    Rush: 66, RuYds: 381, RuTD: 2, Awards: 'PB',
  },
  {
    Season: '2022', Age: 27, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 17, GS: 17, Cmp: 435, Att: 648, 'Cmp%': 67.1,
    Yds: 5250, TD: 41, Int: 12, Rate: 105.2,
    Sk: 26, 'Y/A': 8.1, 'AY/A': 8.5, 'Y/G': 308.8,
    Rush: 61, RuYds: 358, RuTD: 4, Awards: 'MVP, SB MVP, AP1',
  },
  {
    Season: '2023', Age: 28, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 16, GS: 16, Cmp: 401, Att: 597, 'Cmp%': 67.2,
    Yds: 4183, TD: 27, Int: 14, Rate: 92.6,
    Sk: 27, 'Y/A': 7.0, 'AY/A': 6.8, 'Y/G': 261.4,
    Rush: 75, RuYds: 389, RuTD: 0, Awards: 'SB MVP',
  },
  {
    Season: '2024', Age: 29, Team: 'KAN', Lg: 'NFL', Pos: 'QB',
    G: 17, GS: 17, Cmp: 425, Att: 628, 'Cmp%': 67.7,
    Yds: 4590, TD: 35, Int: 11, Rate: 105.0,
    Sk: 28, 'Y/A': 7.3, 'AY/A': 8.0, 'Y/G': 270.0,
    Rush: 68, RuYds: 355, RuTD: 3, Awards: 'PB',
  },
];

const formatCell = (header, value) => {
  if (value == null) return '';
  if (typeof value === 'number' && !Number.isInteger(value)) {
    return value.toFixed(1);
  }
  return value;
};

const PatrickMahomes = () => {
  const scrapedRows = Array.isArray(mahomes.per_season)
    ? mahomes.per_season.map((row) => ({ ...row, Team: row.Tm }))
    : [];

  const useScraped = scrapedRows.length > 0;

  const rowsToRender = useScraped ? scrapedRows : staticRows;

  return (
    <>
      <Header />
      <main className="profile-container chiefs-aura">
        <h1>{mahomes.player || 'Patrick Mahomes'}</h1>
        <p>Number: {mahomes.number ?? 15}</p>
        <p>Height: {mahomes.height || `6'3"`}</p>
        <p>Age: {mahomes.age ?? 30}</p>
        <p>Position: Quarterback</p>
        <p>College: {mahomes.college || 'Texas Tech'}</p>
        <p>Drafted: {mahomes.draft || '10th overall in the 2017 NFL Draft by the Kansas City Chiefs'}</p>

        <div className="player-image">
          <img
            src={
              mahomes.image ||
              'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png'
            }
            alt="Patrick Mahomes"
            className="profile-img"
          />
        </div>

        <div className="bio">
          <h2>Bio</h2>
          <p>
            {mahomes.bio ||
              'Patrick Mahomes is the face of the Kansas City Chiefs and one of the most dynamic quarterbacks in NFL history.'}
          </p>
        </div>

        <div className="stats">
          <h2>Patrick Mahomes Stats</h2>
          <table className="stats-table">
            <thead>
              <tr>
                {COLUMNS.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowsToRender.map((row, i) => (
                <tr key={i}>
                  {COLUMNS.map((header) => (
                    <td key={header}>
                      {formatCell(header, header === 'Team' ? row.Team : row[header])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="stats-note">
            {useScraped
              ? 'Note: Stats pulled from Pro-Football-Reference (regular season).'
              : 'Note: Stats are currently hard-coded placeholders.'}
          </p>
        </div>

        <div className="highlight-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C2oHFGh5QdQ"
            title="Patrick Mahomes Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default PatrickMahomes;
