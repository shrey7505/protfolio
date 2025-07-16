import React, { useEffect, useRef } from "react";
import pic from "../assets/shrey shah.jpg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Animated Divider */}
      <div className="footer-divider" ref={dividerRef}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="var(--accent-color)"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="var(--accent-color)"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="var(--accent-color)"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="footer" ref={footerRef} id="footer">
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-column">
              <div className="footer-header">
                <img src={pic} alt="Shrey Shah" className="footer-image" />
                <h3 className="footer-heading">
                  <span className="footer-highlight">S</span>hrey Shah
                </h3>
              </div>
              <p className="footer-text">
                Full Stack Developer specializing in the MERN stack. I build
                modern, responsive web applications with clean code and great
                user experiences.
              </p>
              <div className="footer-socials">
                <a
                  href="https://github.com/shrey7505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shrey7505/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/shrey_shah_sjs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link
                    to="/"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("skills");
                    }}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Skills Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Tech Stack</h3>
              <ul className="footer-links">
                <li>
                  <span className="footer-link">React.js</span>
                </li>
                <li>
                  <span className="footer-link">Node.js</span>
                </li>
                <li>
                  <span className="footer-link">MongoDB</span>
                </li>
                <li>
                  <span className="footer-link">Express.js</span>
                </li>
                <li>
                  <span className="footer-link">JavaScript</span>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact Info</h3>
              <ul className="footer-contact">
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>shreyshahworldtech@gmail.com</span>
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <span>+91 9265075114</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Gujarat, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Shrey Shah. All rights reserved.
            </p>
            <p className="footer-note">Built with React.js and ❤️</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
