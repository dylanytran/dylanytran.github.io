import React from "react";
import ProjectCard from "../components/ProjectCard";
import image2 from "../images/statify-bg.jpg";
import image4 from "../images/divinetale-bg.jpg";
import image5 from "../images/true-rng-bg.jpg";
import image6 from "../images/kcards.jpg";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="project-background">
      <div className="header">
        <h1>[ My Projects ]</h1>
      </div>
      <div className="project-list">
        <ProjectCard
          name="K-Cards"
          desc="Web3 trading card platform with K-pop idol NFTs"
          image={image6}
          tech="📚 React, TypeScript, Polygon, Thirdweb"
          link="https://github.com/dylanytran/K-Cards"
        />
        <ProjectCard
          name="True RNG"
          desc="True random number generator based on hashed LLM responses and atmospheric noise data"
          image={image5}
          tech="📚 React, JavaScript, Django, PyTorch"
          link="https://github.com/dylanytran/true-rng"
        />
        <ProjectCard
          name="Statify"
          desc="Web application where users can log in to their Spotify accounts and view their top artists and songs"
          image={image2}
          tech="📚 React, TypeScript"
          link="https://github.com/dylanytran/Statify"
        />
        <ProjectCard
          name="DIVINETALE"
          desc="A fun and unique spin-off of the 2015 hit game Undertale"
          image={image4}
          tech="📚 Unity, C#"
          link="https://github.com/dylanytran/DIVINETALE-AAD-2021"
        />
      </div>
    </div>
  );
}

export default Projects;
