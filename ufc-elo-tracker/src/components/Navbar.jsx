// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/");
  };

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
            <Link to="/" className="text-gray-300 hover:text-orange-500">
              Live Ratings
            </Link>
          </li>
          <li>
            <Link to="/women" className="text-gray-300 hover:text-orange-500">
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/database"
              className="text-gray-300 hover:text-orange-500"
            >
              Database
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-gray-300 hover:text-orange-500">
              FAQ
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-orange-500"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="text-gray-300 hover:text-orange-500">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
