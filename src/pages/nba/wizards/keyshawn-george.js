 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './wizards-player.css';
 import playerData from '../../../../scrapeddata/nba/players/kyshawn-george.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5174563.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Washington Wizards"
         jerseyNumber="18"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;