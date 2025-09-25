import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "프로젝트 1",
      description: "이 프로젝트에 대한 간단한 설명입니다. 사용한 기술과 구현한 기능들을 설명합니다.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "프로젝트 2", 
      description: "두 번째 프로젝트에 대한 설명입니다. 어떤 문제를 해결했는지 설명합니다.",
      tech: ["Vue.js", "Express", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "프로젝트 3",
      description: "세 번째 프로젝트 설명입니다. 특별한 기능이나 도전했던 부분을 소개합니다.",
      tech: ["Python", "Django", "PostgreSQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-small">GitHub</a>
                  <a href={project.demo} className="btn btn-small btn-primary">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;