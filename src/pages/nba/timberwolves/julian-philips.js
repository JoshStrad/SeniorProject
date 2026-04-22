 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './wolves-player.css';
 import playerData from '../../../../scrapeddata/nba/players/julian-strawther.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5105553.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Minnesota Timberwolves"
         jerseyNumber="4"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;