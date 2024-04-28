import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import for navigation
import './Navbar.css';
function Navbar() {
  // A simple state to simulate a logout action
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Replace with your actual logout logic (e.g., clear token, redirect)
  };

  return (
    <nav id="navbar" className='Navbar'>
       <div className="title">Karina</div>
      {isLoggedIn && (

        <Link to="/Login" id="right"><button className='btn-shine' onClick={handleLogout}>Logout</button></Link>
        
      )}
     
    </nav>
  );
}

export default Navbar;
