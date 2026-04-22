import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/mason-rudolph.json';
import './steelers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3116407.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Pittsburgh Steelers"
      jerseyNumber="2"
    />
  );
};

export default NFLQB;