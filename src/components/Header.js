import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* Add sports options before the search bar */}
            <li className="dropdown">
              <span className="dropdown-btn">Sports</span>
              <div className="dropdown-content">
                <Link to="/nba">NBA</Link>
                <Link to="/mlb">MLB</Link>
                <Link to="/nfl">NFL</Link>
              </div>
            </li>
            {/* Add the search bar */}
            <li>
              <div className="search-bar">
                <input type="text" placeholder="Search players..." />
                <button type="submit">Search</button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;