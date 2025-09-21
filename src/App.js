import React, { useState } from 'react';
import './App.css';

// 헤더 컴포넌트
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>WonSun</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

// 홈 섹션
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <h1>안녕하세요!</h1>
          <h2>저는 <span className="highlight">개발자</span> WonSun입니다</h2>
          <p>창의적이고 효율적인 솔루션을 만들어나가고 있습니다.</p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
            <a href="#contact" className="btn btn-secondary">연락하기</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 소개 섹션
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              안녕하세요! 저는 열정적인 개발자 WonSun입니다. 
              새로운 기술을 배우고 적용하는 것을 좋아하며, 
              사용자 경험을 중시하는 개발을 지향합니다.
            </p>
            <p>
              문제 해결을 통해 더 나은 서비스를 만들어나가는 것이 저의 목표입니다.
              항상 배움의 자세로 성장하는 개발자가 되고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 기술 스택 섹션
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

// 프로젝트 섹션
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

// 연락처 섹션
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p>프로젝트나 협업 문의는 언제든지 환영합니다!</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> your-email@example.com
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> 
              <a href="https://github.com/ws1811" target="_blank" rel="noopener noreferrer">
                github.com/ws1811
              </a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong> your-linkedin-profile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 푸터 컴포넌트
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 WonSun Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

// 메인 앱 컴포넌트
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;