import React, { useState } from "react";
import logo from "./logo2.png";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-container">
      <div className="desktop-menu">
        <img src={logo} alt="Logo" />
        <ul className="menu-item">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <div className="menu-btn" onClick={menuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={`mobile-menu ${showMenu ? "open" : ""}`}>
        <ul>
          <li onClick={menuToggle}>Home</li>
          <li onClick={menuToggle}>About</li>
          <li onClick={menuToggle}>Projects</li>
          <li onClick={menuToggle}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
