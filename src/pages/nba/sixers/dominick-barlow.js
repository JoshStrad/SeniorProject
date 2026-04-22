 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './sixers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/dominick-barlow.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot=""
         auraClass="nba-aura"
         teamName="Philadephia 76ers"
         jerseyNumber="0"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;