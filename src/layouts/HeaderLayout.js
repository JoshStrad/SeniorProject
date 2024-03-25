import React from 'react';
import Header from '../components/Header'; // Import the Header component
import '../components/Header.css'

const Layout = ({ children }) => {
    return (
      <div>
        <Header /> {/* Render the Header component */}
        <main>{children}</main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    );
  };
  
  export default Layout;