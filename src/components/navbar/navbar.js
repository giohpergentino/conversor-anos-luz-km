import React, { useState } from 'react';
import './navbar.css'
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className='containerNavbar'>
      <ul>
        <li><a href="/">Página inicial</a></li>
        <li><a href="/info">Info</a></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><button onClick={handleLogin}>Login</button></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
