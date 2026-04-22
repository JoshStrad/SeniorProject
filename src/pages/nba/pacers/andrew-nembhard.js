 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pacers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/andrew-nembhard.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395712.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Indiana Pacers"
         jerseyNumber="2"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;