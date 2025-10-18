import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import aboutSections from "../../data/aboutSections";
import { useFade } from "../../hooks/useFade";
import "./AboutMe.css";

export default function AboutMe() {
  const { fadeIn } = useFade(300);
  const [activeSection, setActiveSection] = useState("overview");

  const section = aboutSections.find((s) => s.key === activeSection);

  return (
    <>
      <Navbar />
      <div className={`about-container ${fadeIn ? "fade-in" : ""}`}>
        <header className="about-header">
          <h1 className="about-name">Madisen Patrick</h1>
        </header>

        <div className="about-content">
          <aside className="about-sidebar">
            {aboutSections.map((section) => (
              <button
                key={section.key}
                className={`about-tab ${activeSection === section.key ? "active" : ""}`}
                onClick={() => setActiveSection(section.key)}
              >
                {section.title}
              </button>
            ))}
          </aside>

          <main className="about-details">
            <h2 className="about-section-title">{section?.title}</h2>
            <p className="about-section-text">{section?.content}</p>
          </main>
        </div>
      </div>
    </>
  );
}
