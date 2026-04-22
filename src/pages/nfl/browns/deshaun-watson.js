import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/deshaun-watson.json';
import './browns.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122840.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Cleveland Browns"
      jerseyNumber="4"
    />
  );
};

export default NFLQB;