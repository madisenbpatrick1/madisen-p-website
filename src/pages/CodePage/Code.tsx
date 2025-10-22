import React from "react";
import Navbar from "../../components/common/Navbar";
import { useFade } from "../../hooks/useFade";
import "./Code.css";
import codeProjectData from "../../data/code";

export default function Code() {
  const { fadeIn } = useFade();

  return (
    <>
      <Navbar />
      <div className={`code-container ${fadeIn ? "fade-in" : ""}`}>
        <header className="code-header">
          <h1 className="code-title">Code & Projects</h1>
          <p className="code-subtitle">
            A collection of my engineering work — blending creativity, design,
            and technical precision.
          </p>
        </header>

        <div className="code-grid">
          {codeProjectData.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}