 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './nets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/noah-clowney.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4712896.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Brooklyn Nets"
         jerseyNumber="21"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;