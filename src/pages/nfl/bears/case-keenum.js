import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/case-keenum.json';
import './bears.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15168.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Chicago Bears"
      jerseyNumber="11"
    />
  );
};

export default NFLQB;