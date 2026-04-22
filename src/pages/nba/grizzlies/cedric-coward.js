import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './grizzlies-player.css';
import playerData from '../../../../scrapeddata/nba/players/cedric-coward.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4903027.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Memphis Grizzlies"
        jerseyNumber="23"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;