import React from "react";
import "../styles/Experience.css";

function JobCard({ company, position, date, location, description, skills, logo, link }) {
  return (
    <div className="jobCard">
      <div className="row justify-content-center align-items-start job-row">
        <div className="col-auto job-logo-container">
          <img className="job-logo" src={logo} alt={`${company} logo`} />
        </div>
        <div className="col job-text">
          <div className="job-header">
            <h2>{position}</h2>
            <p className="company-name">
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {company}
                </a>
              ) : (
                company
              )}
            </p>
          </div>
          <p className="job-date-location">
            <span className="date">{date}</span>
            <span className="separator">•</span>
            <span className="location">{location}</span>
          </p>
          <p className="job-description">{description}</p>
          <div className="skills-container">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
