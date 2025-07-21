import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import logo from "../../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState("pre-load"); // pre-load -> logo-in -> logo-out -> name-reveal

  useEffect(() => {
    const timeline = [
      { time: 500, action: () => setPhase("particles") },
      { time: 1500, action: () => setPhase("logo-in") },
      { time: 3000, action: () => setPhase("logo-out") },
      { time: 4000, action: () => setPhase("name-reveal") },
      { time: 5000, action: () => onFinish() }
    ];

    const timers = timeline.map(({ time, action }) =>
      setTimeout(action, time)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onFinish]);

  return (
    <div className={`splash-screen ${phase}`}>
      {/* Background Particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--size': `${Math.random() * 8 + 2}px`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 2}s`,
              '--duration': `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Logo Display */}
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="logo" />
          <div className="logo-aura" />
        </div>
        <div className="particle-ring" />
      </div>

      {/* Name Reveal */}
      <div className="name-wrapper">
        <h1 className="name">Shrey Shah</h1>
        <div className="name-glow" />
      </div>
    </div>
  );
};

export default SplashScreen;
