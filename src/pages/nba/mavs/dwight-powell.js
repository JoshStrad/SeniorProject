 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './mavs-player.css';
 import playerData from '../../../../scrapeddata/nba/players/dwight-powell.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2531367.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Dallas Mavericks"
         jerseyNumber="7"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;