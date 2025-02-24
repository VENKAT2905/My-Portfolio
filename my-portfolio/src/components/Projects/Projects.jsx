import React from "react";
import "./Projects.css";
import img1 from "../../assets/img1.jpg"; // Make sure image exists in assets folder

const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      image: img1,
      link: "https://github.com/VENKAT2905/Projects",
      description: "Netflix Clone using React and Firebase"
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
