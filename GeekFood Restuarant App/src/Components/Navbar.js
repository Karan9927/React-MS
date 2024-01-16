import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [location, setLocation] = useState();
  const [activeLink, setActiveLink] = useState();

  const changeActive = (value) => {
    setLocation(value);
  };
  
  return (
    <nav>
      <div className="logo">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Geekfood-logo"
        />
        <p>GeekFoods</p>
      </div>
      <div className="link-list">
        <ul>
          <li className="active">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li
            onClick={() => {
              changeActive("quote");
            }}
          >
            <Link to={"/quote"}>Quote</Link>
          </li>
          <li>
            <Link to={"/restaurant"}>Restaurants</Link>
          </li>
          <li>
            <Link to={"/food"}>Foods</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <button className="getstarted">Get Started</button>
    </nav>
  );
};

export default Navbar;
