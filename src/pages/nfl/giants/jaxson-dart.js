import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jaxson-dart.json';
import './giants.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4689114.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="New York Giants"
      jerseyNumber="6"
    />
  );
};

export default NFLQB;