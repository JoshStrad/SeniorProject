import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/davis-mills.json';
import './texans.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4242546.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Houston Texans"
      jerseyNumber="10"
    />
  );
};

export default NFLQB;