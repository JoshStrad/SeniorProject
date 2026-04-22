import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jordan-love.json';
import './packers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Green Bay Packers"
      jerseyNumber="10"
    />
  );
};

export default NFLQB;