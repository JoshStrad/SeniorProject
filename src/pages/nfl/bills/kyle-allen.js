import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/kyle-allen.json';
import './bills.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3115293.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Buffalo Bills"
      jerseyNumber="11"
    />
  );
};

export default NFLQB;