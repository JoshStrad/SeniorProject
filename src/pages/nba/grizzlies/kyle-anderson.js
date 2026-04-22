import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './grizzlies-player.css';
import playerData from '../../../../scrapeddata/nba/players/kyle-anderson.json';

const  GrizzliesPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={playerData}
        headshot=""
        auraClass="nba-aura"
        teamName="Memphis Grizzlies"
        jerseyNumber="0"
        bio=""
      />
    </div>
  );
};

export default GrizzliesPlayer;