import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/trey-lance.json';
import './chargers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4383351.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Los Angeles Chargers"
      jerseyNumber="5"
    />
  );
};

export default NFLQB;