import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/adrian-martinez.json';
import './49ers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361182.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="San Francisco 49ers"
      jerseyNumber="4"
    />
  );
};

export default NFLQB;