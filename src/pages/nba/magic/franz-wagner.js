 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './magic-player.css';
 import playerData from '../../../../scrapeddata/nba/players/franz-wagner.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4566434.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Orlando Magic"
         jerseyNumber="22"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;