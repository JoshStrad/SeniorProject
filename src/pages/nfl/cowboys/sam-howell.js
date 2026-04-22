import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/sam-howell.json';
import './cowboys.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426875.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Dallas Cowboys"
      jerseyNumber="13"
    />
  );
};

export default NFLQB;