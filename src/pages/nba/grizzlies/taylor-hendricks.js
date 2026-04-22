import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './grizzlies-player.css';
import playerData from '../../../../scrapeddata/nba/players/taylor-hendricks.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4684806.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Memphis Grizzlies"
        jerseyNumber="22"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;