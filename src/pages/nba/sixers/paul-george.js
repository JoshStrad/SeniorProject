 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './sixers-player.css';
 import playerData from '../../../../scrapeddata/nba/players/paul-george.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4251.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Philadephia 76ers"
         jerseyNumber="8"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;