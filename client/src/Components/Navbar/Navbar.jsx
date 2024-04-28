import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import for navigation
import './Navbar.css';
function Navbar(props) {
  // A simple state to simulate a logout action
  

  return (
    <nav id="navbar" className='Navbar'>
       <div className="title">Karina</div>
      {props.isLoggedIn && (

        <Link to="/Login" id="right"><button className='btn-shine' onClick={props.handleLogout}>Logout</button></Link>
        
      )}
     
    </nav>
  );
}

export default Navbar;
