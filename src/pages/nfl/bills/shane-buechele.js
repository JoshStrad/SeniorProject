import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/shane-buechele.json';
import './bills.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4039034.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Buffalo Bills"
      jerseyNumber="6"
    />
  );
};

export default NFLQB;