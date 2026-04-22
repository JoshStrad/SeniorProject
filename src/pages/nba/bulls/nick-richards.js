import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './bulls-player.css';
import playerData from '../../../../scrapeddata/nba/players/nick-richards.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278076.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Chicago Bulls"
        jerseyNumber="13"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;