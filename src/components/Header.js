import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (searchQuery.trim()) {
      const formattedQuery = searchQuery.trim().toLowerCase().replace(/\s+/g, '-');
      navigate(`/nba/celtics/${formattedQuery}`); // Redirect to the player's page
    } else {
      alert('Please enter a valid player name!');
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
                <Link to="/nba">Stat Comparison</Link>
              </div>
            </li>
            <li>
              <div className="search-bar">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search players..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit">Search</button>
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
