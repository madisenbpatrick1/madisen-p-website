import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import videosData from "../../data/videosData";
import { useFade } from "../../hooks/useFade";
import "./Videos.css";

export default function Videos() {
  const { fadeIn, fadeOut } = useFade(300);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videosData.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev === videosData.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videosData[currentIndex];



  return (
    <>
      <Navbar />
      <div className={`videos-page ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-out" : ""}`}>
        <h1 className="videos-title">Portugal Films</h1>
        <p className="videos-subtitle">
          Click through my favorite moments from my trip to Portugal.
        </p>

        <div className="video-carousel">
          <button className="carousel-btn prev" onClick={prevVideo}>
            ←
          </button>

          <div className="video-card featured">
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${currentVideo.id}`}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{currentVideo.title}</p>
          </div>

          <button className="carousel-btn next" onClick={nextVideo}>
            →
          </button>
        </div>

        <div className="video-dots">
          {videosData.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>

        <p className="videos-subtitle">
          For more videos, visit my{" "}
          <a
            href="https://www.youtube.com/@madipat"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>.
        </p>
      </div>
    </>
  );
}
