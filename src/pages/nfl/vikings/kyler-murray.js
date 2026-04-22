import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/kyler-murray.json';
import './vikings.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917315.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Minnesota Vikings"
      jerseyNumber="1"
    />
  );
};

export default NFLQB;