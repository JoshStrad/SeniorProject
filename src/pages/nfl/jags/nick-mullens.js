import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/nick-mullens.json';
import './jags.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3059989.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Jacksonville Jaguars"
      jerseyNumber="14"
    />
  );
};

export default NFLQB;