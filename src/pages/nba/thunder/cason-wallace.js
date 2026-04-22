  import React from 'react';
  import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
  import './thunder-player.css';
  import playerData from '../../../../scrapeddata/nba/players/cason-wallace.json';
  
  const  NBAPlayer = () => {
    return (
      <div>
        <NBAPlayerProfile
          data={playerData}
          headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4683692.png&w=350&h=254"
          auraClass="nba-aura"
          teamName="Oklahoma City Thunder"
          jerseyNumber="22"
          bio=""
        />
      </div>
    );
  };
  
  export default NBAPlayer;