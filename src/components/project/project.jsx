import React, { useState, useRef, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Project.css";
import college from "../../assets/college.avif";
import hotel from "../../assets/hotel.avif";
import chat from "../../assets/chat.avif";
import zerodha from "../../assets/zerodha.avif";
import collage_timetable from "../../assets/COLLEGE_TIMETABLE.pdf";
import hotel_rating from "../../assets/Hotel-Management-and-Rating-System.pdf";
import chat_app from "../../assets/chat-app-layout.pdf";
import zerodha_clon from "../../assets/zerodha.pdf";
import imagefy from "../../assets/imagefy.png";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "College Timetable Management System",
      description:
        "Developed a web application to manage class timetables for all departments of the college. Included features like subject & faculty assignment, real-time clash detection, and print-friendly views.",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      category: "Full Stack",
      image: college,
      github: "https://github.com/shrey7505/COLLEGE_TIMETABLE",
      live: collage_timetable,
    },
    {
      id: 2,
      title: "Hotel Management and Rating System",
      description:
        "Built a user-friendly web platform allowing users to view hotel listings and submit ratings. Implemented CRUD operations and user authentication with dynamic rating system.",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      category: "Web Application",
      image: hotel,
      github: "https://github.com/shrey7505/Hotel-Management-and-Rating-System",
      live: hotel_rating,
    },
    {
      id: 3,
      title: "Chat App Layout",
      description:
        "Created a clean and modern front-end layout for a chat application interface with responsive design and user-friendly component structuring.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Material UI"],
      category: "Frontend Design",
      image: chat,
      github: "https://github.com/shrey7505/chat-app-layout",
      live: chat_app,
    },
    {
      id: 4,
      title: "Zerodha Clone",
      description:
        "Developed a full-stack web application replicating Zerodha's core trading platform features with user authentication, dashboard, and dynamic portfolio display.",
      tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Material UI"],
      category: "Full Stack",
      image: zerodha,
      github: "https://github.com/shrey7505/zerodha",
      live: zerodha_clon,
    },
    {
      id: 5,
      title: "Imagefy",
      description:
        "Imagefy is a powerful AI-powered platform that transforms text prompts into stunning, high-quality images in seconds. It offers a seamless experience with secure Razorpay integration for premium features, enabling users to generate and download ultra-high-resolution images effortlessly.",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Material UI",
        "Tailwind CSS",
        "clipdrop API",
        "Razorpay",
      ],
      category: "Full Stack",
      image: imagefy,
      github: "https://github.com/shrey7505/imagefy",
      live: "https://imagefy-frontend.onrender.com/",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="projects-container">
        <h2 className="section-title">
          <span className="highlight">M</span>y Projects
        </h2>
        <p className="section-subtitle">
          Showcasing my technical implementations and solutions
        </p>

        <div className="projects-filter">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
