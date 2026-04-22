 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './nuggets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/julian-strawther.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432181.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Denver Nuggets"
         jerseyNumber="3"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;