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

            {/* Default Text Sections */}
            {section?.key === "contactMe" ? (
              <div className="contact-links">
                <a href="mailto:madisen.bpatrick@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                  📧 madisen.bpatrick@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/madisen-patrick-238686195/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn Profile
                </a>
              </div>
            ) : (
              section?.content && <p className="about-section-text">{section.content}</p>
            )}


            {/* Experience & Education Cards */}
            {section?.items && (
              <div className="about-card-grid">
                {section.items.map((item, index) => (
                  <div key={index} className="about-card">
                    <img src={item.logo} alt={("company" in item ? item.company : item.institution) || ""} className="about-logo" />
                    <div>
                      <h3>{("company" in item ? item.company : item.institution)}</h3>
                      <p className="about-role">{"role" in item ? item.role : item.degree}</p>
                      <p className="about-description">{item.description}</p>
                      <p className="about-years">{item.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
