import React, { useEffect, useRef } from "react";
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiAngular,
} from "react-icons/si";
import { DiTerminal } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            // Observe individual skill items for staggered animation
            const skillItems = entry.target.querySelectorAll(".skill-item");
            skillItems.forEach((item, index) => {
              item.style.animationDelay = `${index * 0.1}s`;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "C",
          icon: (
            <span className="skill-icon" style={{ color: "#A8B9CC" }}>
              C
            </span>
          ),
        },
        { name: "C++", icon: <SiCplusplus style={{ color: "#00599C" }} /> },
        { name: "Java", icon: <FaJava style={{ color: "#f89820" }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
        { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
        { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> },
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
        {
          name: "Express.js",
          icon: <SiExpress style={{ color: "#ffffff" }} />,
        },
        { name: "AngularJS", icon: <SiAngular style={{ color: "#DD0031" }} /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "SQL", icon: <GrMysql style={{ color: "#4479A1" }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
      ],
    },
    {
      category: "Tools & Libraries",
      skills: [
        { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
        { name: "Terminal", icon: <DiTerminal style={{ color: "#ffffff" }} /> },
        { name: "Redux", icon: <SiRedux style={{ color: "#764ABC" }} /> },
        { name: "Material UI", icon: <SiMui style={{ color: "#007FFF" }} /> },
        {
          name: "Bootstrap",
          icon: <FaBootstrap style={{ color: "#7952B3" }} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
        },
        {
          name: "EJS",
          icon: (
            <span className="skill-icon" style={{ color: "#ffffff" }}>
              EJS
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="container" ref={containerRef}>
        <h2 className="section-title">
          <span className="highlight">S</span>kills
        </h2>

        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div
              className="skill-category"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-icon-container">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
