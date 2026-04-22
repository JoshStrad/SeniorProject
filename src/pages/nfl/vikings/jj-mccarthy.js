import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jj-mccarthy.json';
import './vikings.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4433970.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Minnesota Vikings"
      jerseyNumber="9"
    />
  );
};

export default NFLQB;