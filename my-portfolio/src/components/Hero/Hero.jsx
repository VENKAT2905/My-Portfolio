import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1>Venkat Chitrakavi</h1>
      <p>Full Stack Developer</p>
      <button onClick={() => window.open("/resume.pdf", "_blank")}>View Resume</button>
    </section>
  );
};

export default Hero;
