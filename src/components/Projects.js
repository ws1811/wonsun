import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI 식당추천",
      gubun : "개인",
      description: "위치, 날씨, 인원 수, 메뉴 선호도 등 다양한 맥락 정보를 종합하여 AI가 최적의 식당을 추천해주는 웹 애플리케이션입니다.",
      contribution : "전체 구현",
      tech: ["React", "AWS", "Google Gemini AI"],
      github: "https://github.com/ws1811/restaurant-finder",
      demo: "https://dh16eh1zyeeii.cloudfront.net"
    },
    {
      title: "H-CLUB", 
      gubun : "팀",
      description: "NFC 태깅 기반 백화점 시설 이용 및 혜택 제공 안드로이드 애플리케이션",
      contribution : "Firebase Auth 사용 인증 기능, 소셜로그인, 온보딩 페이지",
      tech: ["Kotlin", "Android Studio", "Firebase", "Firestore"],
      github: "https://github.com/Hyundai-4in",
      demo: "#"
    },
    {
      title: "H-CLUB",
      gubun : "팀",
      description: "사내 동아리 관리 및 스포츠경기 매칭 서비스",
      contribution : "스포츠경기 매칭시스템, Elo알고리즘 사용 랭킹시스템, 사내동아리CRUD 일부",
      tech: ["Spring Framework", "Oracle", "MyBatis", "Redis"],
      github: "https://github.com/HyundaiHCLUB",
      demo: "#"
    }
    ,
    {
      title: "펫&E",
      gubun : "팀",
      description: "반려동물 커뮤니티 및 반려동물 상품 크롤링",
      contribution : "커뮤니티 CRUD REST API 구현, 크롤링",
      tech: ["Spring Framework", "Oracle", "Jsoup", "Selenium"],
      github: "https://github.com/HyundaiFirstProject",
      demo: "#"
    }
    ,
    {
      title: "t09ether",
      gubun : "팀",
      description: "온&오프라인 공동구매 커뮤니티",
      contribution : "오프라인 공동구매 게시판 CRUD",
      tech: ["Spring Framework", "Oracle", "Bootstrap"],
      github: "https://github.com/ws1811/together",
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
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-gubun ${project.gubun === '개인' ? 'personal' : 'team'}`}>
                    {project.gubun}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-contribution">
                  <span className="contribution-label">💡역할</span>
                  <p className="contribution-text">{project.contribution}</p>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">GitHub</a>
                  {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-primary">Demo</a> */}
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