import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/drake-maye.json';
import './pats.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431452.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="New England Patriots"
      jerseyNumber="10"
    />
  );
};

export default NFLQB;