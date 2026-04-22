 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pistons-player.css';
 import playerData from '../../../../scrapeddata/nba/players/tobias-harris.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6440.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Detorit Pistons"
         jerseyNumber="12"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;