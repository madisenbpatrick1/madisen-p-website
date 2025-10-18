// AIzaSyARaVrVryzG5re3r1pn-Gnd34p0TvTjnBU

import Navbar from "../../components/common/Navbar";
import React, { useState } from "react";
import "./Videos.css";

// Your 7 Portugal video IDs and titles
const videos = [
  { id: "J4dqsZjtJKM?si=UdvVnEGszsuJXwSA", title: "Life with my Sony ZV-E10 | First Day in Algarve, Portugal" },
  { id: "VDUxRFVXHyI?si=S2Bp1qiWoK74Jvn9", title: "Life with my Sony ZV-E10 | Algarve, Portugal Day 2 | Resort, Octopus and Mall Food Court" },
  { id: "vspETfe1og8?si=u3Z2WMaXWvv11zHY", title: "Life with my Sony ZV-E10 | Portugal Day 3 | Pine Cliff Resort" },
  { id: "qDwaBzVeAGw?si=UHIBOc90hxNRafO", title: "Life with my Sony ZV-E10 | Exploring Faro & Olhão | Fish Market & City Views" },
  { id: "3b5mNVrdN4w?si=s29PyiFhS4tt3570", title: "Life with my Sony ZV-E10 | Exploring the End of the World 🌍 | Portugal Vlog (Silves, Lagos & Sagres)" },
  { id: "2IzIoJ02WbU?si=_UMUDd92kQtTxTk7", title: "Life with my Sony ZV-E10 | Portugal | Resort Fun | We play our own version of Pickleball" },
];

export default function Videos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videos[currentIndex];

  return (
    <>
      <Navbar />

      <div className="videos-page">
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
          {videos.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
        <p className="videos-subtitle">
          For more videos, visit my{" "}<a href="https://www.youtube.com/@madipat" target="_blank" rel="noopener noreferrer">YouTube channel</a>.
        </p>
      </div>
    </>
  );
}