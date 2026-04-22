import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './heat-player.css';
import playerData from '../../../../scrapeddata/nba/players/dru-smith.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066993.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Miami Heat"
        jerseyNumber="12"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;