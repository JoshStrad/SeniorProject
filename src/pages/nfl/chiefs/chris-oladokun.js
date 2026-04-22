import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/chris-oladokun.json';
import './chiefs.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4044111.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Kansas City Chiefs"
      jerseyNumber="19"
    />
  );
};

export default NFLQB;