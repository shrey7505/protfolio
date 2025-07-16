import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import pic from "../../assets/shrey shah.jpg";

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);
  const phrases = [
    "Web Developer.",
    "MERN Stack Enthusiast.",
    "Tech Innovator.",
    "Frontend Developer.",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const typingRef = useRef(null);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingSpeed = 150;
    const pauseDuration = 2000;
    let timeout;

    const type = () => {
      if (i < phrases[currentPhraseIndex].length) {
        setText(phrases[currentPhraseIndex].substring(0, i + 1));
        i++;
        timeout = setTimeout(type, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setTimeout(erase, pauseDuration);
        }, pauseDuration);
      }
    };

    const erase = () => {
      if (i > 0) {
        setText(phrases[currentPhraseIndex].substring(0, i - 1));
        i--;
        timeout = setTimeout(erase, typingSpeed / 2);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
        timeout = setTimeout(type, typingSpeed);
      }
    };

    if (isTyping) {
      timeout = setTimeout(type, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex, isTyping]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <section className={`home ${isVisible ? "visible" : ""}`} id="home" ref={homeRef}>
      <div className="home-container">
        <div className="home-grid">
          <div className={`home-img ${isVisible ? "animate" : ""}`}>
            <img src={pic} alt="Shrey Shah" />
          </div>
          <div className="home-content">
            <span className={`greeting ${isVisible ? "animate" : ""}`}>HELLO, I'M</span>
            <h1 className={`name ${isVisible ? "animate" : ""}`}>Shrey Shah</h1>
            <h2 className={`role ${isVisible ? "animate" : ""}`}>
              and I am a{" "}
              <span className="typing-text" ref={typingRef}>
                {text}
              </span>
            </h2>
            <p className={`about-text ${isVisible ? "animate" : ""}`}>
              Hi, I'm Shrey Shah, a final-year IT student at A.D. Patel
              Institute of Technology with a CGPA of 8.80. I specialize in the
              MERN stack and love building full-stack applications that solve
              real-world problems. I enjoy blending problem-solving skills with
              a creative mindset to deliver smooth, user-friendly web
              experiences.
            </p>

            {/* Social Media and Buttons */}
            <div className={`social-and-buttons ${isVisible ? "animate" : ""}`}>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/share/17CgMCFuiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isVisible ? "animate" : ""}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://github.com/shrey7505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isVisible ? "animate" : ""}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.instagram.com/shrey_shah_sjs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isVisible ? "animate" : ""}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shrey7505/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isVisible ? "animate" : ""}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="home-buttons">
                <Link
                  to="/#contact"
                  className={`btn home-btn hire-btn ${isVisible ? "animate" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Hire Me
                </Link>
                <Link
                  to="/#contact"
                  className={`btn home-btn contact-btn ${isVisible ? "animate" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;