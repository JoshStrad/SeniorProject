 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './lakers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/lebron-james.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Los Angeles Lakers"
         jerseyNumber="23"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;