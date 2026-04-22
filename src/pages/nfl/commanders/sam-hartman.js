import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/sam-hartman.json';
import './commanders.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361994.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Washington Commanders"
      jerseyNumber="15"
    />
  );
};

export default NFLQB;