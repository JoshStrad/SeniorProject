 import React from 'react';
 import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
 import './rockets-player.css';
 import playerData from '../../../../scrapeddata/nba/players/tari-eason.json';
 
 const  NBAPlayer = () => {
   return (
     <div>
       <NBAPlayerProfile
         data={playerData}
         headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433192.png&w=350&h=254"
         auraClass="nba-aura"
         teamName="Houston Rcokets"
         jerseyNumber="17"
         bio=""
       />
     </div>
   );
 };
 
 export default NBAPlayer;