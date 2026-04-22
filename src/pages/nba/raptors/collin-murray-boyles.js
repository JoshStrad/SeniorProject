 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './raptors-player.css';
 import playerData from '../../../../scrapeddata/nba/players/collin-murray-boyles.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/5093267.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Toronto Raptors"
         jerseyNumber="12"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;