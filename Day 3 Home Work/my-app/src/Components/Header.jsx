import "../App.css";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="heading">Family Wellness</h1>
      <h3 className="sub-heading">MASSAGE THERAPY</h3>
      <nav>
        <ul className="navlinks">
          <li className="active">HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>FAQ</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
