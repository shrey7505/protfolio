import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cv from "../../assets/Shrey shah.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";
import profileImg from "../../assets/s.png";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("a");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-paragraph">
              Hi, I'm <span className="about-highlight">Shrey Shah</span>, a
              passionate Full Stack Web Developer specializing in the
              <span className="about-highlight"> MERN Stack</span> — MongoDB,
              Express.js, React.js, and Node.js.
            </p>
            <p className="about-paragraph">
              Currently, I'm in my 7th semester of Information Technology at
              A.D. Patel Institute of Technology, CVM University, with an
              <strong> 8.80 CGPA</strong>. I build real-world applications
              mirroring platforms like <strong>Zerodha</strong>.
            </p>
            <p className="about-paragraph">
              My journey began with a curiosity about how websites work,
              evolving into a passion for development. I love both frontend and
              backend work — transforming ideas into seamless experiences backed
              by clean, scalable code.
            </p>
          </div>

          <div className="about-image">
            <img src={profileImg} alt="Shrey Shah" />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="about-tabs">
          <button
            className={`tab-btn ${activeTab === "a" ? "active" : ""}`}
            onClick={() => setActiveTab("a")}
          >
            What I Do
          </button>
          <button
            className={`tab-btn ${activeTab === "b" ? "active" : ""}`}
            onClick={() => setActiveTab("b")}
          >
            Tech Stack
          </button>
          <button
            className={`tab-btn ${activeTab === "c" ? "active" : ""}`}
            onClick={() => setActiveTab("c")}
          >
            More About Me
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "a" && (
            <div className="tab-pane active">
              <h3 className="section-subtitle">What I Do:</h3>
              <ul className="about-list">
                <li>
                  <FaCheckCircle className="about-icon" /> Build dynamic web
                  apps using React.js and Node.js
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Design responsive
                  interfaces with HTML, CSS, Tailwind, and modern systems
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Work with REST APIs &
                  MongoDB for server-side logic
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Collaborate via
                  GitHub, follow best practices, and write clean code
                </li>
                <li>
                  <FaCheckCircle className="about-icon" /> Solve DSA problems to
                  improve logic and performance
                </li>
              </ul>
            </div>
          )}

          {activeTab === "b" && (
            <div className="tab-pane active">
              <h3 className="section-subtitle">Tech Stack:</h3>
              <p className="about-paragraph">
                <strong>Languages:</strong> JavaScript, C++, HTML, CSS
              </p>
              <p className="about-paragraph">
                <strong>Frameworks & Libraries:</strong> React.js, Node.js,
                Express.js, Bootstrap, Tailwind
              </p>
              <p className="about-paragraph">
                <strong>Database:</strong> MongoDB
              </p>
              <p className="about-paragraph">
                <strong>Tools:</strong> Git, GitHub, VS Code, Postman, Vercel,
                Netlify
              </p>
            </div>
          )}

          {activeTab === "c" && (
            <div className="tab-pane active">
              <h3 className="section-subtitle">A Bit More About Me:</h3>
              <p className="about-paragraph">
                When I'm not coding, I'm most likely singing or playing musical
                instruments like the keyboard or guitar. Music keeps me balanced
                and sparks creativity. I believe great developers blend logic
                and creativity — and I bring both to the table.
              </p>
              <p className="about-paragraph">
                I'm currently looking for opportunities to work on exciting
                projects or intern with a tech-focused company where I can
                contribute, learn, and grow as a developer.
              </p>
            </div>
          )}
        </div>

        {/* Buttons and Socials */}
        <div className="about-actions">
          <div className="about-buttons">
            <a
              href="/Shrey Shah.pdf"
              download="Shrey_Shah_Resume.pdf"
              className="about-btn"
            >
              Download Resume
            </a>

            <a href="#contact" className="about-btn secondary">
              Hire Me
            </a>
          </div>

          <div className="about-socials">
            <Link
              to="https://www.facebook.com/share/17CgMCFuiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              to="https://github.com/shrey7505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              to="https://www.instagram.com/shrey_shah_sjs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shrey7505/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
