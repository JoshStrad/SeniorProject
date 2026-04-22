import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './heat-player.css';
import playerData from '../../../../scrapeddata/nba/players/tyler-herro.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Miami Heat"
        jerseyNumber="14"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;