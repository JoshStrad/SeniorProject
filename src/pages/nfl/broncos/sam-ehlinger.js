import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/sam-ehlinger.json';
import './broncos.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241820.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Denver Broncos"
      jerseyNumber="4"
    />
  );
};

export default NFLQB;