import * as React from "react";
import "./projects.scss";
import { projects } from "./projectsData";
export const Projects = () => {
  return (
    <div className="project-main">
      <div className="bg-overlay" />
      <div className="header">Projects</div>
      <hr style={{ width: "50%", borderColor: "white" }} />
      <div className="project-container">
        {projects.map((proj, i) => {
          return (
            <div key={proj.id} className="card">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={proj.preview || "#"}
                className="link"
              >
                <h3 className="project-title">
                  {/* {proj.title} */}
                  <img
                    className={proj.className || "project-logo"}
                    src={proj.img}
                    alt="Project Logo"
                  />
                </h3>

                <p className="project-desc">{proj.description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
