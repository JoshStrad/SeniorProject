import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/bryce-young.json';
import './panthers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685720.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Carolina Panthers"
      jerseyNumber="9"
    />
  );
};

export default NFLQB;