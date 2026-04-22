import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/kedon-slovis.json';
import './cardinals.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4428512.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Arizona Cardinals"
      jerseyNumber="19"
    />
  );
};

export default NFLQB;