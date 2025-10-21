import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        {/* Logo / Brand */}
        <Link to="/" className="mbp-logo fs-3">
          MBP
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link navbar-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about_me" className="nav-link navbar-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/videos" className="nav-link navbar-link">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link navbar-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link navbar-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/code" className="nav-link navbar-link">
                CS Code
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
