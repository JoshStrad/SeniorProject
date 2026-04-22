 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './mavs-player.css';
 import playerData from '../../../../scrapeddata/nba/players/caleb-martin.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3138160.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Dallas Mavericks"
         jerseyNumber="16"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;