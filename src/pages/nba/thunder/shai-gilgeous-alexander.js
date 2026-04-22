  import React from 'react';
  import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
  import './thunder-player.css';
  import playerData from '../../../../scrapeddata/nba/players/shai-gilgeous-alexander.json';
  
  const  NBAPlayer = () => {
    return (
      <div>
        <NBAPlayerProfile
          data={playerData}
          headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png&w=350&h=254"
          auraClass="nba-aura"
          teamName="Oklahoma City Thunder"
          jerseyNumber="0"
          bio=""
        />
      </div>
    );
  };
  
  export default NBAPlayer;