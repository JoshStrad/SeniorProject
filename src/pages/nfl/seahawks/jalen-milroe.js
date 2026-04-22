import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jalen-milroe.json';
import './seahawks.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432734.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Seattle Seahawks"
      jerseyNumber="6"
    />
  );
};

export default NFLQB;