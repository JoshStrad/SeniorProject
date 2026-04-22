import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/mitchell-trubisky.json';
import './titans.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3039707.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Tennessee Titans"
      jerseyNumber="10"
    />
  );
};

export default NFLQB;