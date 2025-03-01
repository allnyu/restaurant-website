import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.jpg';

function Navbar() {
  return (
    <nav>
      <a href="/"><img src={logo} alt="Logo" className="logo"/></a>
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar"><i className="fa-solid fa-bars"></i></label>
      <ul className="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/gallery">Gallery</a></li>
      </ul>
    </nav>
  );
}

export default Navbar
