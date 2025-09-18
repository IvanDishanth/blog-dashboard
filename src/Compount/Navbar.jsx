import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-lg p-5 z-50 backdrop-blur-md bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-90 transition-colors duration-500">
        <ul className="absolute right-4 top-2 text-white space-x-4 flex items-center">
          <li>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:bg-pink-700 rounded-lg px-3 transition-colors duration-300"
              >
                Menu
              </button>
              <button
                id="darkmodeBtn"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 text-white hover:bg-pink-700 rounded-lg px-3 py-1 transition-colors duration-300"
              >
                
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg dark:bg-gray-800 dark:text-gray-200 transition-all duration-300">
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Log in
                  </Link>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
