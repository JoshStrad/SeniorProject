 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pelicans-player.css';
 import playerData from '../../../../scrapeddata/nba/players/micah-peavy.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432185.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="New Orleans Pelicans"
         jerseyNumber="14"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;