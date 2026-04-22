import React, { useState, useMemo } from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';

const Header = () => {

  // tracks what the user is typing in search bar
  const [searchQuery, setSearchQuery] = useState('');

  // controls whether dropdown results show or not
  const [showResults, setShowResults] = useState(false);

  // pulls player data from Gatsby GraphQL
  const data = useStaticQuery(graphql`
    query {
      allPlayersJson {
        nodes {
          player_name
          team
          team_slug
          league
          slug
        }
      }
      allPitchersJson {
        nodes {
          player_name
          team
          team_slug
          league
          slug
        }
      }
    }
  `);

  // nba and nfl players are stored here
  const players = data.allPlayersJson?.nodes || [];

  // mlb pitchers are stored here
  const pitchers = data.allPitchersJson?.nodes || [];


  // combine both lists into one searchable array
  const allSearchablePlayers = [...players, ...pitchers];

  // filters players based on search input
  const filteredPlayers = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();

    // if nothing is typed, return empty list
    if (!term) return [];

    return allSearchablePlayers
      .filter((player) =>
        player.player_name?.toLowerCase().includes(term)
      )
      .slice(0, 8);
  }, [searchQuery, allSearchablePlayers]);

  // handles clicking a player from the dropdown 
  const handlePlayerClick = (slug) => {
    if (!slug) return;

    // clear search and hide dropdown
    setSearchQuery('');
    setShowResults(false);

    // navigate to player page
    navigate(slug);
  };

  // handles pressing enter in search bar
  const handleSearch = (e) => {
    e.preventDefault();

    // if results exist, go to first match    
    if (filteredPlayers.length > 0) {
      handlePlayerClick(filteredPlayers[0].slug);
    } else {
      alert('Player not found!');
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nba">NBA</Link></li>
            <li><Link to="/nfl">NFL</Link></li>
            <li><Link to="/mlb">MLB</Link></li>
            <li><Link to="/about">About</Link></li>

            <li className="dropdown">
              <span className="dropdown-btn">More</span>
              <div className="dropdown-content">
                <Link to="/more/ranking-quiz">Ranking Quiz</Link>
                <Link to="/more/stat-comparison">Stat Comparison</Link>
              </div>
            </li>

            <li>
              <div className="search-bar">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search players..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowResults(true);
                    }}
                    onFocus={() => setShowResults(true)}
                  />
                  <button type="submit">Search</button>

                  {showResults && searchQuery.trim() && (
                    <div className="search-results">
                      {filteredPlayers.length > 0 ? (
                        filteredPlayers.map((player, index) => (
                          <div
                            key={`${player.slug}-${index}`}
                            className="search-item"
                            onClick={() => handlePlayerClick(player.slug)}
                          >
                            <span className="search-player-name">
                              {player.player_name}
                            </span>
                            <span className="search-team">
                              {player.league} {player.team ? `• ${player.team}` : ''}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="search-item">No players found</div>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;