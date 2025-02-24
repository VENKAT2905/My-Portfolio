import React from 'react';
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '100%' },
    { name: 'CSS', level: '100%' },
    { name: 'JavaScript', level: '90%' },
    { name: 'React', level: '80%' },
    { name: 'Node.js', level: '60%' },
    { name: 'Python', level: '50%' },
    { name: 'Git', level: '70%' },
    { name: 'SQL', level: '50%' }
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" data-skill={skill.name}>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;