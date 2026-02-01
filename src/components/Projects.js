import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "AI 식당추천",
      gubun: "개인",
      description: "위치, 날씨, 인원 수, 메뉴 선호도 등 다양한 맥락 정보를 종합하여 AI가 최적의 식당을 추천해주는 웹 애플리케이션입니다.",
      contribution: "전체 구현",
      tech: ["React", "AWS", "Google Gemini AI"],
      github: "https://github.com/ws1811/restaurant-finder",
      details: {
        techReason: [
          { tech: "React", reason: "컴포넌트 기반 개발로 재사용성과 유지보수성 향상" },
          { tech: "AWS", reason: "CloudFront로 CDN 배포, 빠른 글로벌 서비스 제공" },
          { tech: "Google Gemini AI", reason: "맥락 기반 추천을 위한 고성능 AI 모델 활용" }
        ],
        troubleShooting: [
          {
            problem: "AI 응답 정확도 저하",
            solution: "(처리중)"
          },
          {
            problem: "위치 정보 권한 거부 시 처리",
            solution: "(처리중)"
          }
        ]
      }
    },
    {
      title: "H-CLUB (Android)",
      gubun: "팀",
      description: "NFC 태깅 기반 백화점 시설 이용 및 혜택 제공 안드로이드 애플리케이션",
      contribution: "Firebase Auth 사용 인증 기능, 소셜로그인, 온보딩 페이지",
      tech: ["Kotlin", "Android Studio", "Firebase", "Firestore"],
      github: "https://github.com/Hyundai-4in",
      demo: "#",
      details: {
        techReason: [
          { tech: "Firebase", reason: "프로젝트 기간 1주일로 매우 짧아서 빠르게 구현할 수 있는 Firebase 선택" },
          { tech: "Kotlin", reason: "null safety와 간결한 문법으로 안드로이드 개발 생산성 향상" },
          { tech: "Firestore", reason: "실시간 데이터 동기화 및 NoSQL의 유연한 스키마" }
        ],
        troubleShooting: [
          {
            problem: "소셜 로그인 토큰 만료 처리",
            solution: "자동 토큰 갱신 로직 구현 및 세션 관리 개선"
          }
        ]
      }
    },
    {
      title: "H-CLUB (Web)",
      gubun: "팀",
      description: "사내 동아리 관리 및 스포츠경기 매칭 서비스",
      contribution: "스포츠경기 매칭시스템, Elo알고리즘 사용 랭킹시스템, 사내동아리CRUD 일부",
      tech: ["Spring Framework", "Oracle", "MyBatis", "JSP"],
      github: "https://github.com/HyundaiHCLUB",
      demo: "#",
      details: {
        techReason: [
          { tech: "Elo 알고리즘", reason: "게임과 유사하게 Elo 알고리즘을 도입해 비슷한 점수대 유저들끼리 매칭될 수 있도록 공정한 경기 시스템 구현" },
          { tech: "MyBatis", reason: "복잡한 SQL 쿼리 관리 용이" }
        ],
        troubleShooting: []
      }
    },
    {
      title: "펫&E",
      gubun: "팀",
      description: "반려동물 자랑 커뮤니티 & 크롤링을 활용한 애완용품 가격 비교 사이트",
      contribution: "커뮤니티 백엔드 CRUD구현(REST API), 쇼핑몰 상품정보 크롤링",
      tech: ["Spring Framework", "Oracle", "Jsoup", "Selenium"],
      github: "https://github.com/HyundaiFirstProject",
      demo: "#",
      details: {
        techReason: [
          { tech: "Jsoup", reason: "정적 페이지 크롤링에 최적화된 경량 라이브러리" },
          { tech: "Selenium", reason: "동적 렌더링 페이지 크롤링 필요 시 활용" },
          { tech: "Spring Framework", reason: "REST API 표준 구현 및 트랜잭션 관리" }
        ],
        troubleShooting: [
          {
            problem: "동적 페이지 크롤링 실패",
            solution: "Jsoup에서 Selenium으로 전환하여 JavaScript 렌더링 대응"
          }
        ]
      }
    },
    {
      title: "t09ether",
      gubun: "팀",
      description: "온&오프라인 공동구매 커뮤니티",
      contribution: "오프라인 공동구매 게시판 CRUD",
      tech: ["Spring Framework", "Oracle", "Bootstrap"],
      github: "https://github.com/ws1811/together",
      demo: "#",
      details: {
        techReason: [
          { tech: "Spring Framework", reason: "MVC 패턴 기반 체계적인 웹 애플리케이션 구조" },
          { tech: "Bootstrap", reason: "빠른 반응형 UI 개발" },
          { tech: "Oracle", reason: "트랜잭션 안정성 및 데이터 무결성 보장" }
        ],
        troubleShooting: [
          {
            problem: "게시글 삭제 시 연관 데이터 처리",
            solution: "CASCADE 설정 및 soft delete 방식으로 데이터 무결성 유지"
          }
        ]
      }
    }
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

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
                  <span className="contribution-label">💡 역할</span>
                  <p className="contribution-text">{project.contribution}</p>
                </div>

                {/* 상세보기 토글 버튼 */}
                <button 
                  className="detail-toggle-btn"
                  onClick={() => toggleProject(index)}
                >
                  {expandedProject === index ? '접기 ▲' : '기술 선택 이유 & 트러블슈팅 ▼'}
                </button>

                {/* 상세 내용 */}
                {expandedProject === index && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>🔧 기술 선택 이유</h4>
                      <ul className="tech-reason-list">
                        {project.details.techReason.map((item, idx) => (
                          <li key={idx}>
                            <strong>{item.tech}:</strong> {item.reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4>🚀 트러블슈팅</h4>
                      <div className="troubleshooting-list">
                        {project.details.troubleShooting.map((trouble, idx) => (
                          <div key={idx} className="trouble-item">
                            <div className="trouble-problem">
                              <strong>문제:</strong> {trouble.problem}
                            </div>
                            <div className="trouble-solution">
                              <strong>해결:</strong> {trouble.solution}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">GitHub</a>
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