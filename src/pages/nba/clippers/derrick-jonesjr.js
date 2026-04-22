import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './clippers-player.css';
import playerData from '../../../../scrapeddata/nba/players/derrick-jones-jr.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3936099.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Los Angeles Clippers"
        jerseyNumber="5"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;