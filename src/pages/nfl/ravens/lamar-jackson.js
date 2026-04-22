import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/lamar-jackson.json';
import './ravens.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3916387.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Baltimore Ravens"
      jerseyNumber="8"
    />
  );
};

export default NFLQB;