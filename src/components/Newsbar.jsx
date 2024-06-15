import React, { useState } from "react";

const Newsbar = ({setCategory}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black border-b border-gray-700">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0">
          <a href="#" title="" className="flex text-white fs-3" >
            <span className="bg-red-600 text-white text-2xl rounded-md ml-2 px-2 py-1">News</span>
          </a>
        </div>
  
        <button
          type="button"
          className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
  
        <div className="hidden md:flex md:items-center md:space-x-10">
          <ul className="flex space-x-10">
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("technology")}>
              Technology
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("sports")}>
              Sports
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("science")}>
              Science
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("business")}>
              Business
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("entertainment")}>
              Entertainment
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("general")}>
              General
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("health")}>
              Health
            </li>
          </ul>
        </div>
      </nav>
  
      {isMenuOpen && (
        <nav className="flex flex-col items-center mt-10 space-y-2 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("technology")}>
              Technology
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("sports")}>
              Sports
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("science")}>
              Science
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("business")}>
              Business
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("entertainment")}>
              Entertainment
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("general")}>
              General
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("health")}>
              Health
            </li>
            <li className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70" onClick={() => setCategory("pricing")}>
              Pricing
            </li>
          </ul>
        </nav>
      )}
    </div>
  </header>
  
  
  );
};

export default Newsbar;
