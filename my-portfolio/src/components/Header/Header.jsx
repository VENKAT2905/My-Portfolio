import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    navigate('/blog'); // Changed this line to use navigate instead of window.open
  };

  return (
    <header className="header">
      <h1 className="logo">VC</h1>
      <nav>
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
        <a href="/blog" onClick={handleBlogClick}>Blogs</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
