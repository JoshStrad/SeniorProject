import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/joe-flacco.json';
import './bengals.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11252.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Cincinnati Bengals"
      jerseyNumber="16"
    />
  );
};

export default NFLQB;