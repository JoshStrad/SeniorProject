import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/cj-stroud.json';
import './texans.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432577.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Houston Texans"
      jerseyNumber="7"
    />
  );
};

export default NFLQB;