import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/spencer-rattler.json';
import './saints.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426339.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="New Orleans Saints"
      jerseyNumber="2"
    />
  );
};

export default NFLQB;