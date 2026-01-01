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
      skills: ["Java", "Python", "Kotlin", "Spring Framework/Boot"]
    },
    {
      title: "Database",
      skills: ["MySQL", "Oracle"]
    },
    {
      title: "Tools",
      skills: ["Git", "Jira", "Figma"]
    },
    {
      title: "DevOps ",
      skills: ["Git", "Docker", "AWS", "Github Actions"]
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