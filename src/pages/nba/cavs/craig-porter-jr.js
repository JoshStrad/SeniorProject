import React from 'react';
import NBAPlayerProfile from '../../../components/NBAPlayerProfile';
import './cavs-player.css';
import tatumData from '../../../../scrapeddata/nba/players/craig-porter-jr.json';

const  NBAPlayer = () => {
  return (
    <div>
      <NBAPlayerProfile
        data={tatumData}
        headshot="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4701233.png&w=350&h=254"
        auraClass="nba-aura"
        teamName="Cleveland Cavaliers"
        jerseyNumber="9"
        bio=""
      />
    </div>
  );
};

export default NBAPlayer;