 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pacers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/kam-jones.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4697268.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Indiana Pacers"
         jerseyNumber="7"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;