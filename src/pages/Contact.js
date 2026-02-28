import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import image from "../images/contact-img4.jpg";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="page-wrapper">
      <div className="row justify-content-start head">
        <h1>[ Contact Me ]</h1>
      </div>
      <div className="row justify-content-center align-items-center contact-background">
        <p className="contact-intro">
          I'm always open to connecting. Please feel free to reach out!
        </p>
        <div className="contact-container">
          <div className="contact-item">
            <a
              href="https://www.linkedin.com/in/dylanytran/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="contact-icon" />
            </a>
            <p className="contact-text">linkedin.com/in/dylanytran</p>
          </div>
          <div className="contact-item">
            <a
              href="https://github.com/dylanytran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="contact-icon" />
            </a>
            <p className="contact-text">github.com/dylanytran</p>
          </div>
          <div className="contact-item">
            <a href="mailto:dylanytran@gmail.com">
              <Email className="contact-icon" />
            </a>
            <p className="contact-text">dylanytran@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
