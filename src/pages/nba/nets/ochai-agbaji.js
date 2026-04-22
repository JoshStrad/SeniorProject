 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './nets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/ochai-agbaji.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397018.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Brooklyn Nets"
         jerseyNumber="30"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;