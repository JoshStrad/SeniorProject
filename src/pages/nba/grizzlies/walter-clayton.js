import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './grizzlies-player.css';
import playerData from '../../../../scrapeddata/nba/players/walter-clayton.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4896372.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Memphis Grizzlies"
        jerseyNumber="4"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;