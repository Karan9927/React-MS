import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve dark mode state from local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode === "true");
    }
  }, []);

  const toggleDark = () => {
    // Toggle dark mode
    document.body.classList.toggle("dark-mode");
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    // Save dark mode state to local storage
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  return (
    <div
      className={
        !isDarkMode
          ? "bg-white text-black px-[12px] py-[8px] border-b-2"
          : "bg-black px-[12px] py-[8px] border-b-2 border-b-gray-600 text-white"
      }
    >
      <ul className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <li className="text-[22px] text-[#06B6D4] font-semibold">
            TextUtils
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </div>
        <div>
          <button onClick={toggleDark}>
            {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
