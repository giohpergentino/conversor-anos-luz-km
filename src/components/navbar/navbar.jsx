import { useState } from 'react';
import './navbar.css'
import { RiAccountCircleLine } from "react-icons/ri";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='containerNavbar'>
      <h2>CONVERSOR ANOS-LUZ/KM</h2>
        <ul className='actions'>
          {isLoggedIn ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <li><button onClick={handleLogin}>Login</button></li>
            )}
            <li className='iconProfile'>
              <RiAccountCircleLine />
            </li>
        </ul>
      </div>
  );
}

export default Navbar;
