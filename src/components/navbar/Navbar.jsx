import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-[#0077b6]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
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
        </div>

        {/* Navbar Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-wrap md:justify-between space-y-2 md:space-y-0 md:space-x-8 text-white py-4`}
        >
          <li className="hover:underline">
            <a href="#home">Home</a>
          </li>
          <li className="hover:underline">
            <a href="#get-to-know-us">Get To Know Us</a>
          </li>
          <li className="hover:underline">
            <a href="#meet-us">Meet Us</a>
          </li>
          <li className="hover:underline">
            <a href="#travel-stories">Travel Stories</a>
          </li>
          <li className="hover:underline">
            <a href="#current">Current</a>
          </li>
          <li className="hover:underline">
            <a href="#become-a-zra">Want To Become A ZRA Yourself</a>
          </li>
          <li className="hover:underline">
            <a href="#head-office">Head Office</a>
          </li>
          <li className="hover:underline">
            <a href="#vacancies">Vacancies</a>
          </li>
          <li className="hover:underline">
            <a href="#contact-head-office">Contact Head Office</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
