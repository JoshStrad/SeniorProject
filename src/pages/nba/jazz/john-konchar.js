 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './jazz-player.css';
 import playerData from '../../../../scrapeddata/nba/players/john-konchar.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot=""
         auraClass="nba-aura"
         teamName="Utah Jazz"
         jerseyNumber="0"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;