 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './warriors-player.css';
 import playerData from '../../../../scrapeddata/nba/players/brandin-podziemski.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4709138.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Golden State Warriors"
         jerseyNumber="2"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;