import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './heat-player.css';
import playerData from '../../../../scrapeddata/nba/players/kel-el-ware.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5105623.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Miami Heat"
        jerseyNumber="7"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;