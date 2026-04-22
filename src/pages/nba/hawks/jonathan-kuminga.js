import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './hawks-player.css';
import playerData from '../../../../scrapeddata/nba/players/jonathan-kuminga.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433247.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Atlanta Hawks"
        jerseyNumber="0"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;