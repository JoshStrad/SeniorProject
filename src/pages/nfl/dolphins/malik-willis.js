import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/malik-willis.json';
import './dolphins.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4242512.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Miami Dolphins"
      jerseyNumber="2"
    />
  );
};

export default NFLQB;