import React, { useState } from "react";
import LogoWhite from "./logo-white.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("");

  const handleNavbarBg = () => {
    setNavbarBg((prevNavbarBg) =>
      prevNavbarBg === "" ? "navbar-bg-style" : ""
    );
  };

  return (
    <nav className={`navbar navbar-expand-md ${navbarBg}`}>
      <div className="container-fluid container">
        <div className="logo-container">
          <Link to="/">
            <img className="navbar-brand" src={LogoWhite} alt="Logo" />
          </Link>
          <div className="logo-circle"></div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavbarBg}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div></div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#properties">
                  Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
