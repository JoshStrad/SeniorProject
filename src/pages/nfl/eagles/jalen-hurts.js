import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jalen-hurts.json';
import './eagles.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4040715.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Philadephia Eagles"
      jerseyNumber="1"
    />
  );
};

export default NFLQB;