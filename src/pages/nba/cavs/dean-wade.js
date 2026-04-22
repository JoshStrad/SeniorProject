import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './cavs-player.css';
import playerData from '../../../../scrapeddata/nba/players/dean-wade.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3912848.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Cleveland Cavaliers"
        jerseyNumber="0"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;