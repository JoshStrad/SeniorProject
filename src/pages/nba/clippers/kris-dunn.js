import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './clippers-player.css';
import playerData from '../../../../scrapeddata/nba/players/kris-dunn.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991139.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Los Angeles Clippers"
        jerseyNumber="8"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;