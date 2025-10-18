import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300); // small delay for smoothness
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home-container ${fadeIn ? "fade-in" : ""}`}>
      <h1 className="home-title">Welcome to <span className="highlight">MBP</span></h1>
      <p className="home-subtitle">A Creative Original by Madisen Patrick</p>
      <div className="navbar-home">
        <ul className="navbar-nav-home">
          <li className="nav-item">
            <Link to="/videos" className="nav-link-home">
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/business" className="nav-link-home">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link-home">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link-home">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/code" className="nav-link-home">
              CS Code
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
