import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './celtics-player.css';
import playerData from '../../../../scrapeddata/nba/players/derrick-white.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3078576.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Boston Celtics"
        jerseyNumber="9"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;