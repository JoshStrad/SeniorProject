import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/teddy-bridgewater.json';
import './lions.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16728.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Detroit Lions"
      jerseyNumber=""
    />
  );
};

export default NFLQB;