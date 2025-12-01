import React from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  return (
    <section className="stats-leaders aura-bg">
      <h2 className="aura-title">Stats Leaders</h2>

      <div className="leaders-grid">
        {/* NFL Leaders */}
        <div className="leader-card aura-card">
          <h3>NFL Passing Yards (2024)</h3>
          <ul>
            <li><a href="/nfl/chiefs/patrick-mahomes">Patrick Mahomes — 5,100</a></li>
            <li><a href="/nfl/chargers/justin-herbert">Justin Herbert — 4,900</a></li>
            <li><a href="/nfl/bills/josh-allen">Josh Allen — 4,600</a></li>
          </ul>
        </div>

        {/* NBA Leaders */}
        <div className="leader-card aura-card">
          <h3>NBA PPG (2024–25)</h3>
          <ul>
            <li><a href="/nba/players/luka-doncic">Luka Dončić — 33.7</a></li>
            <li><a href="/nba/celtics/jayson-tatum">Jayson Tatum — 31.5</a></li>
            <li><a href="/nba/players/shai-gilgeous-alexander">S. G. Alexander — 30.8</a></li>
          </ul>
        </div>

        {/* MLB Leaders */}
        <div className="leader-card aura-card">
          <h3>MLB ERA Leaders (2025)</h3>
          <ul>
            <li><a href="/mlb/players/shohei-ohtani">Shohei Ohtani — 2.11</a></li>
            <li><a href="/mlb/players/spencer-strider">Spencer Strider — 2.45</a></li>
            <li><a href="/mlb/players/gerrit-cole">Gerrit Cole — 2.67</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
