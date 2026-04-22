import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/dak-prescott.json';
import './cowboys.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122840.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Dallas Cowboys"
      jerseyNumber="4"
    />
  );
};

export default NFLQB;