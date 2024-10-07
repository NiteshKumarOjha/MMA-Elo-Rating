// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#111] text-white">
      <header className="p-6">
        <h1 className="text-4xl font-bold text-center">LIVE MMA ELO RATINGS</h1>
        <p className="text-center mt-2 text-gray-400">
          Last update: {new Date().toLocaleString()}
        </p>
      </header>

      <nav className=" bg-gray-800 ">
        <ul className="flex justify-center space-x-8 p-4 border-t border-gray-700">
          <li>
            <a
              href="/"
              className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out"
            >
              Live Ratings
            </a>
          </li>
          <li>
            <a
              href="/women"
              className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out"
            >
              Women
            </a>
          </li>
          <li>
            <a
              href="/database"
              className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out"
            >
              Database
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out"
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
