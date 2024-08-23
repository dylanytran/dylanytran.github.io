import React from "react";
import image from "../images/profile3.jpg";
import image2 from "../images/about.jpg";
import Illinois from "../logos/illinois.png";
import Illinois2 from "../logos/illinois2.png";
import Interos from "../logos/interos.png";
import Interos2 from "../logos/interos2.png";
import Lavner from "../logos/lavner.png";
import Lavner2 from "../logos/lavner2.png";
import Postech from "../logos/postech.png";
import Postech2 from "../logos/postech2.png";
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
import { SiTailwindcss } from "react-icons/si";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center profile-background">
        <div className="col-lg-5">
          <img className="profile-img" src={image}></img>
        </div>
        <div className="col-lg-5 profile-text">
          <h1>
            Hi, I'm{" "}
            <span className="name" style={{ color: "#3399FF" }}>
              Dylan
            </span>
            .
          </h1>
          <p>
            ↳ Computer Science Student{" "}
            <span style={{ color: "#FFB646" }}>
              [ University of Illinois Urbana-Champaign ]
            </span>
          </p>
          <p>
            ↳ Looking For{" "}
            <span style={{ color: "#FF6060" }}>
              [ Summer 2025 Internship Opportunities ]
            </span>
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

      <div className="row justify-content-center align-items-center skills-background">
        <div className="row justify-content-center align-items-center">
          <h1>[ My Skills ]</h1>
        </div>
        <div className="logos">
          <div className="logos-slide">
            <div className="icon-container">
              <SiCplusplus className="icons" />
              <span className="icon-label">C++</span>
            </div>
            <div className="icon-container">
              <FaPython className="icons" />
              <span className="icon-label">Python</span>
            </div>
            <div className="icon-container">
              <FaJava className="icons" />
              <span className="icon-label">Java</span>
            </div>
            <div className="icon-container">
              <FaReact className="icons" />
              <span className="icon-label">React</span>
            </div>
            <div className="icon-container">
              <RiJavascriptFill className="icons" />
              <span className="icon-label">JavaScript</span>
            </div>
            <div className="icon-container">
              <BiLogoTypescript className="icons" />
              <span className="icon-label">TypeScript</span>
            </div>
            <div className="icon-container">
              <FaHtml5 className="icons" />
              <span className="icon-label">HTML</span>
            </div>
            <div className="icon-container">
              <FaCss3Alt className="icons" />
              <span className="icon-label">CSS</span>
            </div>
            <div className="icon-container">
              <SiTailwindcss className="icons" />
              <span className="icon-label">Tailwind</span>
            </div>
            <div className="icon-container">
              <FaBootstrap className="icons" />
              <span className="icon-label">Bootstrap</span>
            </div>
            <div className="icon-container">
              <FaGitAlt className="icons" />
              <span className="icon-label">Git</span>
            </div>
          </div>
          <div className="logos-slide">
            <div className="icon-container">
              <SiCplusplus className="icons" />
              <span className="icon-label">C++</span>
            </div>
            <div className="icon-container">
              <FaPython className="icons" />
              <span className="icon-label">Python</span>
            </div>
            <div className="icon-container">
              <FaJava className="icons" />
              <span className="icon-label">Java</span>
            </div>
            <div className="icon-container">
              <FaReact className="icons" />
              <span className="icon-label">React</span>
            </div>
            <div className="icon-container">
              <RiJavascriptFill className="icons" />
              <span className="icon-label">JavaScript</span>
            </div>
            <div className="icon-container">
              <BiLogoTypescript className="icons" />
              <span className="icon-label">TypeScript</span>
            </div>
            <div className="icon-container">
              <FaHtml5 className="icons" />
              <span className="icon-label">HTML</span>
            </div>
            <div className="icon-container">
              <FaCss3Alt className="icons" />
              <span className="icon-label">CSS</span>
            </div>
            <div className="icon-container">
              <SiTailwindcss className="icons" />
              <span className="icon-label">Tailwind</span>
            </div>
            <div className="icon-container">
              <FaBootstrap className="icons" />
              <span className="icon-label">Bootstrap</span>
            </div>
            <div className="icon-container">
              <FaGitAlt className="icons" />
              <span className="icon-label">Git</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center about-background">
        <div className="col-lg-4 about-text">
          <h1>[ About Me ]</h1>
          <p>
            My name is Dylan Tran, and I am a third-year computer science
            student at the University of Illinois Urbana-Champaign! I was born
            in Chicago, Illinois and grew up in a small suburb north of the
            city. I'm passionate about creating elegant user interfaces, full
            stack development, and machine learning. Last summer, I interned at
            an EdTech company in Chicago, where I taught young students
            object-oriented programming and game design. This summer, I worked
            as a software engineer intern at Interos, where I developed several
            dashboard UI tools to help customers manage companies within their
            supply chains and evaluate risk. Please don't hesitate to reach out
            to me!
          </p>
          <div className="interests">
            <div className="interest">Table Tennis 🏓</div>
            <div className="interest">Soccer ⚽</div>
            <div className="interest">Hip-Hop 🔥</div>
            <div className="interest">Chipotle 🌯</div>
          </div>
        </div>
        <div className="col-lg-4">
          <img className="about-img" src={image2}></img>
        </div>
      </div>

      <div className="work-background">
        <div className="row justify-content-center align-items-center">
          <h1>[ Worked With ]</h1>
        </div>
        <div className="company-logos">
          <a href="https://www.lavnercamps.com" target="_blank">
            <div className="lavner-logo"></div>
          </a>
          <a href="https://siebelschool.illinois.edu/" target="_blank">
            <div className="illinois-logo"></div>
          </a>
          <a href="https://www.postech.ac.kr/eng/" target="_blank">
            <div className="postech-logo"></div>
          </a>
          <a href="https://interos.ai/" target="_blank">
            <div className="interos-logo"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
