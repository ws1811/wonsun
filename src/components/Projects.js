import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Projects.css';

const img = (name) => `${process.env.PUBLIC_URL}/images/projects/${name}`;

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [gallery, setGallery] = useState(null); // { title, shots, index }

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
      screenshots: [
        { src: img('hclub-app-1.png'), caption: "비밀번호 찾기 - 이메일/휴대폰 본인인증" },
        { src: img('hclub-app-2.png'), caption: "비밀번호 재설정 메일 발송 완료" }
      ],
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
      screenshots: [
        { src: img('hclub-web-1.png'), caption: "경기 상세 - 팀 레이팅 기반 매칭" },
        { src: img('hclub-web-2.png'), caption: "매치 히스토리 - 종목별 경기 결과" },
        { src: img('hclub-web-3.png'), caption: "마이페이지 - 레이팅 및 진행중인 매치" }
      ],
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
      screenshots: [
        { src: img('pete-1.png'), caption: "메인 페이지 - 리뷰/자랑 게시판 및 인기글" },
        { src: img('pete-2.png'), caption: "리뷰 작성 - 이미지 업로드 및 별점" }
      ],
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
      screenshots: [
        { src: img('together-1.png'), caption: "오프라인 공동구매 게시판 - 지역 검색 및 페이지네이션" },
        { src: img('together-2.png'), caption: "공동구매 상세 - Ajax 기반 댓글" }
      ],
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

  const openGallery = (project) => {
    setGallery({ title: project.title, shots: project.screenshots, index: 0 });
  };

  const closeGallery = useCallback(() => setGallery(null), []);

  const moveGallery = useCallback((step) => {
    setGallery((prev) => {
      if (!prev) return prev;
      const total = prev.shots.length;
      return { ...prev, index: (prev.index + step + total) % total };
    });
  }, []);

  // 갤러리가 열려 있는 동안 키보드 조작 + 배경 스크롤 잠금
  useEffect(() => {
    if (!gallery) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeGallery();
      else if (e.key === 'ArrowRight') moveGallery(1);
      else if (e.key === 'ArrowLeft') moveGallery(-1);
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [gallery, closeGallery, moveGallery]);

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

                {/* 시연 화면 / 상세보기 버튼 */}
                <div className="project-actions">
                  {project.screenshots && (
                    <button
                      className="screenshot-btn"
                      onClick={() => openGallery(project)}
                    >
                      📷 시연 화면 ({project.screenshots.length})
                    </button>
                  )}
                  <button
                    className="detail-toggle-btn"
                    onClick={() => toggleProject(index)}
                  >
                    {expandedProject === index ? '접기 ▲' : '기술 선택 이유 & 트러블슈팅 ▼'}
                  </button>
                </div>

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

      {/* 시연 화면 갤러리 */}
      {gallery && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-header">
              <h3>{gallery.title} <span className="gallery-counter">{gallery.index + 1} / {gallery.shots.length}</span></h3>
              <button className="gallery-close" onClick={closeGallery} aria-label="닫기">✕</button>
            </div>

            <div className="gallery-stage">
              {gallery.shots.length > 1 && (
                <button className="gallery-nav prev" onClick={() => moveGallery(-1)} aria-label="이전 화면">‹</button>
              )}
              <img
                src={gallery.shots[gallery.index].src}
                alt={gallery.shots[gallery.index].caption}
                className="gallery-image"
              />
              {gallery.shots.length > 1 && (
                <button className="gallery-nav next" onClick={() => moveGallery(1)} aria-label="다음 화면">›</button>
              )}
            </div>

            <p className="gallery-caption">{gallery.shots[gallery.index].caption}</p>

            {gallery.shots.length > 1 && (
              <div className="gallery-dots">
                {gallery.shots.map((shot, idx) => (
                  <button
                    key={idx}
                    className={`gallery-dot ${idx === gallery.index ? 'active' : ''}`}
                    onClick={() => setGallery({ ...gallery, index: idx })}
                    aria-label={`${idx + 1}번째 화면`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;