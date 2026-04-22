import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/dj-uiagalelei.json';
import './chargers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429020.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Los Angeles Chargers"
      jerseyNumber="7"
    />
  );
};

export default NFLQB;