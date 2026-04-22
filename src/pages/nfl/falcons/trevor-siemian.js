import React from 'react';
import QBPlayerProfile from '../../../components/NFLQBPlayerProfile';
import data from '../../../../scrapeddata/nfl/players/trevor-siemian.json';
import './falcons.css';

const NFLQB = () => {
  return (
    <QBPlayerProfile
      data={data}
      headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2511109.png&w=350&h=254"
      bio=""
      auraClass="nfl-team-aura"
      teamName="Atlanta Falcons"
      jerseyNumber=""
    />
  );
};

export default NFLQB;