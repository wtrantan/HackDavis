import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import for navigation

function Navbar() {
  // A simple state to simulate a logout action
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Replace with your actual logout logic (e.g., clear token, redirect)
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/about" style={{ marginLeft: '1rem' }}>About</Link>
      </div>

      {isLoggedIn && (
        <Link to="/Login"><button onClick={handleLogout}>Logout</button></Link>
        
      )}
    </nav>
  );
}

export default Navbar;
