import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/carson-wentz.json';
import './vikings.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2573079.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Minnesota Vikings"
      jerseyNumber="11"
    />
  );
};

export default NFLQB;