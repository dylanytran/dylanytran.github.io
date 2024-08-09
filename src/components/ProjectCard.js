import React from "react";
import "../styles/Projects.css";
import GitHub from "@mui/icons-material/GitHub";

function ProjectCard({ name, desc, image, tech, link }) {
  return (
    <div className="projectCard">
      <div className="row justify-content-center align-items-center project-row">
        <div className="col-xl-5">
          <img className="project-img" src={image} alt={`${name} project`} />
        </div>
        <div className="col-xl-5 project-text">
          <h1>{name}</h1>
          <p>{desc}</p>
          <p className="tech">{tech}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="view-code-link"
          >
            <GitHub className="socials" />
            See Code →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
