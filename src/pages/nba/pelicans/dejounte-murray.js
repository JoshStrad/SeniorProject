 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './pelicans-player.css';
 import playerData from '../../../../scrapeddata/nba/players/dejounte-murray.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907497.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="New Orleans Pelicans"
         jerseyNumber="5"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;