 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pacers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/kobe-brown.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431752.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Indiana Pacers"
         jerseyNumber="24"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;