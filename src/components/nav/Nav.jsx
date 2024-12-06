import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logo.png" // Replace with your logo URL
            alt="Logo"
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0077b6] md:hidden"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-grow w-full md:w-auto mt-2 md:mt-0 px-4 order-2 md:order-none`}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-96 border-2 border-[#0077b6] px-2 py-2 outline-none placeholder-gray-500"
          />
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-wrap justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4 order-1 md:order-none w-full md:w-auto mt-2 md:mt-0`}
        >
          <li>
            <a
              href="#home"
              className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#005f8a] transition-all block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#meet-us"
              className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#005f8a] transition-all block"
            >
              Meet Us
            </a>
          </li>
          <li>
            <a
              href="#colinda"
              className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#005f8a] transition-all block"
            >
              Colinda Vd Maagdenberg
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
