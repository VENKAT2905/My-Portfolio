import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="background-overlay" />
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
