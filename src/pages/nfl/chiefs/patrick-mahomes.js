import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/patrick-mahomes.json';
import './chiefs.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png&w=350&h=254"
      bio="Patrick Mahomes is an elite NFL quarterback known for his arm talent, creativity, and playmaking ability."
      auraClass="nfl-team-aura"
      teamName="Kansas City Chiefs"
      jerseyNumber="15"
    />
  );
};

export default NFLQB;