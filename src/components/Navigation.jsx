import React from "react";
import "../styles/nav.css";
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#">Account</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
