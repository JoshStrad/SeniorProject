import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/trevor-lawrence.json';
import './jags.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360310.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Jacksonville Jaguars"
      jerseyNumber="16"
    />
  );
};

export default NFLQB;