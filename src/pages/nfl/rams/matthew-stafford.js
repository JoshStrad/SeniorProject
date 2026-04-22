import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/matthew-stafford.json';
import './rams.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12483.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Los Angeles Rams"
      jerseyNumber="9"
    />
  );
};

export default NFLQB;