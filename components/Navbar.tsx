"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bgone p-4 fixed top-0 w-screen z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">CareerFlow</div>

        <div className="hidden md:flex justify-between items-center px-60 flex-1">
          <a href="/home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-white"
          >
            About
          </button>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
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
          <a
            href="#"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700"
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("about")}
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 w-full text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
