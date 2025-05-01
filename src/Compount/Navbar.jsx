import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md p-5 z-50">
      <ul className="absolute right-4 top-2 text-white space-x-4 flex">
        <li><div className="relative"><button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:bg-red-700 rounded-lg px-3">Menu</button>
              <button id="darkmodeBtn"className="text-white hover:bg-red-700 rounded-lg px-3 right-4 top-2">Dark Mode</button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                <Link to="/Loginpage"className="block px-4 py-2 hover:bg-gray-100">Log in</Link>
                {/* <Link to="/profile"className="block px-4 py-2 hover:bg-gray-100">Profile</Link> */}
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
    
  );
}

export default Navbar;