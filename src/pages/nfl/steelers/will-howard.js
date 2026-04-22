import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/will-howard.json';
import './steelers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429955.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Pittsburgh Steelers"
      jerseyNumber="18"
    />
  );
};

export default NFLQB;