 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './knicks-player.css';
 import playerData from '../../../../scrapeddata/nba/players/ariel-hukporti.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4871141.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="New York Knicks"
         jerseyNumber="55"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;