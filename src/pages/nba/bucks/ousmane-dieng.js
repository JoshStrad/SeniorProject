import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './bucks-player.css';
import playerData from '../../../../scrapeddata/nba/players/blake-wesley.json';

const NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot=""
        auraClass="nba-aura"
        teamName="Milwaukee Bucks"
        jerseyNumber="1"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;