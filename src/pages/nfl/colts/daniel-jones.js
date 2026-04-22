import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/daniel-jones.json';
import './colts.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917792.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Indianapolis Colts"
      jerseyNumber="17"
    />
  );
};

export default NFLQB;