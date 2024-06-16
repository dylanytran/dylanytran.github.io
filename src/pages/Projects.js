import React from "react";
import ProjectCard from "../components/ProjectCard";
import image from "../images/profile2.jpg";
import image2 from "../images/statify-bg.jpg";
import image3 from "../images/workout-tracker-bg2.jpg";
import image4 from "../images/divinetale-bg.jpg";
import image5 from "../images/true-rng-bg.jpg";
import image6 from "../images/kcards.jpg";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="container-fluid">
      <div className="projectList">
        <div className="row justify-content-start header">
          <h1>⇢ My Projects</h1>
        </div>
        <ProjectCard
          name="K-Cards"
          desc="Web3 trading card game with K-pop idol NFTs"
          image={image6}
          tech="React, TypeScript, Polygon, thirdweb"
          link="https://github.com/dylanytran/K-Cards"
        />
        <ProjectCard
          name="True RNG"
          desc="True random number generator based on large langauge model and atmospheric noise"
          image={image5}
          tech="React, JavaScript, Django, PyTorch"
          link="https://github.com/dylanytran/true-rng"
        />
        <ProjectCard
          name="Statify"
          desc="Web application where users can log in to their Spotify accounts and view their top artists and songs"
          image={image2}
          tech="React, TypeScript, Node.js"
          link="https://github.com/dylanytran/Statify"
        />
        <ProjectCard
          name="DIVINETALE"
          desc="A fun and unique spin-off of the 2015 hit game Undertale"
          image={image4}
          tech="Unity, C#"
          link="https://github.com/dylanytran/DIVINETALE-AAD-2021"
        />
      </div>
    </div>
  );
}

export default Projects;
