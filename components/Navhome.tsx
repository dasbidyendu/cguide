'use client'

import React, { useState } from 'react';

interface NavbarProps {
  // Add any specific props your navbar might need
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bgone p-4 fixed top-0 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Logo
        </div>

        <div className="hidden md:flex justify-between items-center px-60 flex-1 ">
           <div> <a href="#" className="text-gray-300 hover:text-white ">Home</a></div>
           <div> <a href="#" className="text-gray-300 hover:text-white">carreer guide</a></div>
           <div><a href="#" className="text-gray-300 hover:text-white">connect</a></div> 
           <div><a href="#" className="text-gray-300 hover:text-white">profile</a></div> 
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Home</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">carrer guide</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">connect</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">profile</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;