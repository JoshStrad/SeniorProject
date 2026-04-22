import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './hornets-player.css';
import playerData from '../../../../scrapeddata/nba/players/kon-knueppel.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5061575.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Charlotte Hornets"
        jerseyNumber="7"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;