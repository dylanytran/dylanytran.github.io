import React from "react";
import JobCard from "../components/JobCard";
import "../styles/Experience.css";
import etsy from "../logos/etsy-icon.png";
import interos from "../logos/interos-icon.jpg";
import illinois from "../logos/illinois-icon.jpg";
import lavner from "../logos/lavner-icon.jpeg";

function Experience() {
  return (
    <div className="experience-background">
      <div className="experience-header">
        <h1>[ My Experience ]</h1>
      </div>
      <div className="job-list">
        <JobCard
          company="Etsy"
          logo={etsy}
          link="https://www.etsy.com/"
          position="Software Engineer Intern"
          date="May 2025 - Aug 2025"
          location="Brooklyn, New York"
          description="Data Engineering — Developed a tool to automate the deletion of old, unused files in Etsy’s Google Cloud Storage database"
          skills={["Python", "Google Cloud Platform", "SQL", "Terraform"]}
        />
        <JobCard
          company="Human Memory & Cognition Lab"
          logo={illinois}
          link="https://publish.illinois.edu/benjaminlab/"
          position="Research Assistant"
          date="Jan 2025 - May 2025"
          location="Champaign, Illinois"
          description="Applied NLP and deep learning techniques to analyze conversations associated with successful problem-solving outcomes"
          skills={[
            "Python",
            "Transformers",
            "Scikit-Learn",
            "NumPy",
            "Data Analysis",
          ]}
        />
        <JobCard
          company="Interos"
          logo={interos}
          link="https://www.interos.ai/"
          position="Software Engineer Intern"
          date="Jun 2024 - Aug 2024"
          location="Arlington, Virginia"
          description="User Experience — Developed a dashboard UI component that enables customers to directly monitor companies within their supply chains, enhancing visibility into potential risks"
          skills={["React", "TypeScript", "TailwindCSS", "Node.js", "Jest"]}
        />
        <JobCard
          company="University of Illinois Urbana-Champaign"
          logo={illinois}
          link="https://illinois.edu/"
          position="Course Assistant"
          date="Aug 2023 - Dec 2023"
          location="Urbana, Illinois"
          description="Assisted students with weekly assignments and exam preparation in Discrete Structures (CS 173)"
          skills={[
            "Teaching",
            "Discrete Mathematics",
            "Algorithms",
            "Problem Solving",
            "Data Structures",
          ]}
        />
        <JobCard
          company="Lavner Education"
          logo={lavner}
          link="https://www.lavnercampsandprograms.com/"
          position="Information Technology Intern"
          date="Jun 2023 - Aug 2023"
          location="Chicago, Illinois"
          description="Taught young children Python, C++, and game design"
          skills={[
            "Teaching",
            "Software Development",
            "Python",
            "C++",
            "Game Design",
          ]}
        />
      </div>
    </div>
  );
}

export default Experience;
