import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Java", "Express"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;