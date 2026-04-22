  import React from 'react';
  import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
  import './thunder-player.css';
  import playerData from '../../../../scrapeddata/nba/players/isaiah-hartenstein.json';
  
  const  NBAPlayer = () => {
    return (
      <div>
        <NBAPlayerProfile
          data={playerData}
          headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4222252.png&w=350&h=254"
          auraClass="nba-aura"
          teamName="Oklahoma City Thunder"
          jerseyNumber="55"
          bio=""
        />
      </div>
    );
  };
  
  export default NBAPlayer;