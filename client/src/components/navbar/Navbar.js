import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand">
        Get That Bread!
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/result/:job/:location" className="nav-link">
              Result
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
