import React from "react";
import "./Home.css";
import HomeNav from "../../components/Home/HomeNav";
import { useFade } from "../../hooks/useFade";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { fadeIn, fadeOut, triggerFadeOut } = useFade();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    triggerFadeOut(() => navigate(path), 1200);
  };

  return (
    <div className={`home-container ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-up" : ""}`}>
      <h1 className="home-title">
        Welcome to <span className="highlight">MBP</span>
      </h1>
      <p className="home-subtitle">A Creative Original by Madisen Patrick</p>
      <HomeNav fadeOut={fadeOut} onLinkClick={handleNavigation} />
    </div>
  );
}
