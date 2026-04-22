import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/kenny-pickett.json';
import './panthers.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4240703.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Carolina Panthers"
      jerseyNumber=""
    />
  );
};

export default NFLQB;