import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/desmond-ridder.json';
import './packers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4239086.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Green Bay Packers"
      jerseyNumber="18"
    />
  );
};

export default NFLQB;