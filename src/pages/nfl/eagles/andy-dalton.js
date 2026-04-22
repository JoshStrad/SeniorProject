import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/andy-dalton.json';
import './eagles.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14012.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Philadephia Eagles"
      jerseyNumber="14"
    />
  );
};

export default NFLQB;