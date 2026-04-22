import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './hornets-player.css';
import playerData from '../../../../scrapeddata/nba/players/pat-connaughton.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2578239.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Charlotte Hornets"
        jerseyNumber="21"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;