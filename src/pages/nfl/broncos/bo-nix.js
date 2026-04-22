import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/bo-nix.json';
import './broncos.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426338.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Denver Broncos"
      jerseyNumber="10"
    />
  );
};

export default NFLQB;