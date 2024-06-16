import React from "react";
import image from "../images/profile2.jpg";
import image2 from "../images/about.jpg";
import "../styles/Home.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center profile-background">
        <div className="col-lg-5">
          <img className="profile-img" src={image}></img>
        </div>
        <div className="col-lg-5 profile-text">
          <h1>
            Hi, I'm <span className="name" style={{ color: "#3399FF" }}>Dylan</span>.
          </h1>
          <p>
          ↳ Computer Science Student /{" "}
            <span style={{ color: "#FFB646" }}>
              University of Illinois Urbana-Champaign
            </span>
          </p>
          <p>
          ↳ Software Engineer Intern / {" "}
            <span style={{ color: "#FF6060" }}>interos.ai</span>
          </p>
          <a
            href="https://www.linkedin.com/in/dylanytran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="socials" />
          </a>
          <a
            href="https://github.com/dylanytran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="socials" />
          </a>
        </div>
      </div>

      <div className="row justify-content-center align-items-center about-background">
        <div className="col-lg-4 about-text">
          <h1>⇢ About Me </h1>
          <p>
            My name is Dylan Tran and I am a third-year computer science
            student at the University of Illinois Urbana-Champaign! I was born
            in Chicago, Illinois and grew up in a small suburb north of the
            city. Over the last several years, I have worked on various projects
            relating to iOS and Android app development, web development, game
            development, and machine learning. Last summer, I interned at
            an EdTech company in Chicago where I taught young students
            object-oriented programming and game design. This summer, I am working
            as a software engineer intern at Interos. I am also a course
            assistant for Discrete Structures at UIUC. Away from the computer, I
            am passionate about table tennis, soccer, working out, and hip-hop
            music!
          </p>
        </div>
        <div className="col-lg-4">
          <img className="about-img" src={image2}></img>
        </div>
      </div>

      <div className="row justify-content-center align-items-center skills-background">
        <div className="row justify-content-center align-items-center skills-header">
          <h1>⇢ My Skills </h1>
        </div>
        <div className="row justify-content-center align-items-center skills1">
          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <SiCplusplus className="icons" />
            <p>C++</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaPython className="icons" />
            <p>Python</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaJava className="icons" />
            <p>Java</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <RiJavascriptFill className="icons" />
            <p>JavaScript</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaReact className="icons" />
            <p>React</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <BiLogoTypescript className="icons" />
            <p>TypeScript</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaHtml5 className="icons" />
            <p>HTML</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaCss3Alt className="icons" />
            <p>CSS</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaBootstrap className="icons" />
            <p>Bootstrap</p>
          </div>

          <div className="col-lg-1 col-md-2 col-sm-2 col-3 skills-icon-text">
            <FaGitAlt className="icons" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
