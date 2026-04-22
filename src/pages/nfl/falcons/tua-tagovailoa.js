import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/tua-tagovailoa.json';
import './falcons.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241479.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Atlanta Falcons"
      jerseyNumber=""
    />
  );
};

export default NFLQB;