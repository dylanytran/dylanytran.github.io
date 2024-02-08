import React from "react";
import ProjectCard from "../components/ProjectCard";
import image from "../images/profile2.jpg";
import image2 from "../images/statify-bg.jpg";
import image3 from "../images/workout-tracker-bg2.jpg";
import image4 from "../images/divinetale-bg.jpg";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="container-fluid">
      <div className="projectList">
        <div className="row justify-content-start header">
          <h1>⇢ My Projects</h1>
        </div>
        <ProjectCard
          name="Statify"
          desc="Web application where users can log in to their Spotify accounts and view their top artists and songs"
          image={image2}
          tech="React, TypeScript, Node.js"
          link="https://github.com/dylanytran/Statify"
        />
        <ProjectCard
          name="Workout Tracker"
          desc="Mobile iOS app that allows users to log workouts and evaluate progress over time"
          image={image3}
          tech="XCode, Swift"
          link="https://github.com/dylanytran/Workout-Tracker-2022"
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
