import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen.jsx";
import Navbar from "./components/navbar";
import Home from "./components/home/home";
import AboutMe from "./components/about/aboutMe";
import Skills from "./components/skill/Skills";
import Project from "./components/project/project";
import Contact from "./components/contect/contects";
import Footer from "./components/footer.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [splashDone, setSplashDone] = useState(false);

  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Skills />
              <Project />
              <Contact />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
