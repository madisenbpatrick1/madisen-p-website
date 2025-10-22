import React from "react";
import Navbar from "../../components/common/Navbar";
import { useFade } from "../../hooks/useFade";
import "./Gallery.css";

export default function Gallery() {
  const { fadeIn } = useFade(400);

  return (
    <>
      <Navbar />
      <div className={`gallery-container ${fadeIn ? "fade-in" : ""}`}>
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-subtitle">Photos Coming Soon</p>
      </div>
    </>
  );
}
