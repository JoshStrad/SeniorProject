import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/aidan-oconnell.json';
import './raiders.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4260394.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Las Vegas Raiders"
      jerseyNumber="12"
    />
  );
};

export default NFLQB;