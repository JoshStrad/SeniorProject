import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/tyler-shough.json';
import './saints.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360689.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="New Orleans Saints"
      jerseyNumber="6"
    />
  );
};

export default NFLQB;