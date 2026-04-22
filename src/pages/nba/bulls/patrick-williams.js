import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './bulls-player.css';
import playerData from '../../../../scrapeddata/nba/players/patrick-williams.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431687.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Chicago Bulls"
        jerseyNumber="44"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;