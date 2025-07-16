import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cv from "../assets/Shrey shah.pdf";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close navbar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = navbarRef.current;
      const isNavbarOpen = document.querySelector(".navbar-collapse.show");

      if (
        isNavbarOpen &&
        navbar &&
        !navbar.contains(event.target)
      ) {
        const bsCollapse = new window.bootstrap.Collapse(
          document.getElementById("navbarNavAltMarkup"),
          { toggle: false }
        );
        bsCollapse.hide();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg px-4" ref={navbarRef}>
      <div className="container-fluid">
        {/* Logo */}
        <Link 
          className="navbar-brand d-flex align-items-center" 
          to="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img
            src={logo}
            alt="Logo"
            height="30"
            className="d-inline-block me-2"
          />
          <span className="fw-bold text-info">Port</span>
          <span className="text-white fw-bold">folio</span>
        </Link>

        {/* Toggle Button (Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          {/* Centered Nav Links */}
          <div className="navbar-nav mx-auto gap-lg-4 gap-3 text-center">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                className="nav-link custom-nav-link"
                to={`/${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* CV Button (right side) */}
          <div className="d-flex justify-content-end mt-3 mt-lg-0">
            <button
              className="btn my-cv-button fw-semibold w-100 w-lg-30"
              onClick={() => window.open(cv, "_blank")}
            >
              View My CV
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
