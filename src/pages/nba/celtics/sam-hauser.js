import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './celtics-player.css';
import playerData from '../../../../scrapeddata/nba/players/sam-hauser.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065804.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Boston Celtics"
        jerseyNumber="30"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;