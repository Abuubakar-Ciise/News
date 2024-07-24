import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Newsbar = ({ setCategory, interests }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = interests || ['technology', 'sports', 'science', 'business', 'entertainment', 'general', 'health'];

  return (
    <header className="bg-black border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section: News Link */}
          <div className="flex items-center">
            <a href="#" title="" className="flex items-center text-white text-2xl">
              <span className="bg-red-600 text-white rounded-md px-2 py-1">News</span>
            </a>
          </div>

          {/* Center Section: Menu Toggle Button */}
          <div className="hidden md:flex md:items-center md:space-x-10 flex-grow justify-center">
            <ul className="flex space-x-10">
              {categories.map((category) => (
                <li
                  key={category}
                  className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70 cursor-pointer"
                  onClick={() => setCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Login/Signup Button (Visible without toggling) */}
          <div className="flex items-center justify-center md:justify-end">
            <Link to="/login">
              <button
                type="button"
                className="py-2 px-4 text-white rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="ml-2 py-2 px-4 text-white rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                Signup
              </button>
            </Link>
          </div>

          {/* Right Section: Menu toggle button for small screens */}
          <div className="flex items-center justify-end md:hidden">
            <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Category navigation for smaller screens */}
        {isMenuOpen && (
          <nav className="flex items-center justify-center mt-4 md:hidden">
            <ul className="flex flex-wrap justify-center space-x-5 space-y-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className="py-2 px-4 font-medium text-white bg-gray-800 rounded-md transition-all duration-200 focus:text-opacity-70 cursor-pointer"
                  onClick={() => setCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Newsbar;
