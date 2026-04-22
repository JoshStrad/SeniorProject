import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jacoby-brissett.json';
import './cardinals.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2578570.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Arizona Cardinals"
      jerseyNumber="7"
    />
  );
};

export default NFLQB;