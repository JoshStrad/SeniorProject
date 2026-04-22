import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/jake-browning.json';
import './bucs.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3886812.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Tampa Bay Buccaneers"
      jerseyNumber=""
    />
  );
};

export default NFLQB;