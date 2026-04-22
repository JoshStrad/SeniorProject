 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './magic-player.css';
 import playerData from '../../../../scrapeddata/nba/players/paolo-banchero.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432573.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Orlando Magic"
         jerseyNumber="5"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;