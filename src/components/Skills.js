import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "주력 기술",
      caption: "실무에서 회계 ERP를 개발하고 운영하며 매일 사용합니다.",
      skills: [
        {
          name: "Java",
          experience: "회계 ERP의 손익관리 메뉴 전체를 개발했고, 은행 CMS를 연동해 카드·계좌 거래내역을 수신하고 회계 처리하는 기능을 구현했습니다."
        },
        {
          name: "Oracle · MySQL",
          experience: "회계원장처럼 복잡한 쿼리를 두 DBMS 양쪽에서 동작하도록 개발했습니다. JOIN이 50개를 넘어 90초 걸리던 손익 집계 화면을 쿼리 구조 개선과 메모리 기반 피벗으로 3초까지 줄였습니다. SQLD를 취득했습니다."
        },
        {
          name: "JSP / Servlet",
          experience: "ERP의 재무 보고 화면을 개발했습니다. 부서·부문·계정별 집계표처럼 계층 구조를 가진 복잡한 화면을 주로 다뤘습니다."
        }
      ]
    },
    {
      title: "프로젝트에서 사용한 기술",
      caption: "교육과정 팀 프로젝트와 개인 프로젝트에서 직접 구현하며 익혔습니다.",
      skills: [
        {
          name: "Spring Framework · MyBatis",
          experience: "H-CLUB에서 스포츠 경기 매칭 API와 Elo 알고리즘 기반 랭킹 시스템을 구현했고, 펫&E와 t09ether에서는 게시판·댓글 기능을 REST API로 개발했습니다.",
          links: [{ label: "H-CLUB", url: "https://github.com/HyundaiHCLUB" }]
        },
        {
          name: "React",
          experience: "AI 식당추천 서비스와 지금 보고 계신 이 포트폴리오를 만들었습니다. 화면을 컴포넌트 단위로 나누고 상태를 관리하는 방식으로 개발합니다.",
          links: [{ label: "AI 식당추천", url: "https://github.com/ws1811/restaurant-finder" }]
        },
        {
          name: "Kotlin / Android",
          experience: "H-CLUB 안드로이드 앱에서 Firebase Auth 기반 로그인·회원가입과 온보딩 화면을 개발했습니다.",
          links: [{ label: "H-Tap", url: "https://github.com/ws1811/H-Tap" }]
        },
        {
          name: "Jsoup · Selenium",
          experience: "펫&E에서 쇼핑몰 상품 정보를 크롤링했습니다. 정적 페이지는 Jsoup으로 처리했지만 동적 렌더링 페이지에서 막혀 Selenium으로 전환했습니다.",
          links: [{ label: "펫&E", url: "https://github.com/HyundaiFirstProject" }]
        }
      ]
    },
    {
      title: "배포 · 협업",
      caption: "프로젝트를 굴리는 데 필요한 만큼 사용합니다.",
      skills: [
        {
          name: "AWS · GitHub Actions",
          experience: "AI 식당추천은 CloudFront로 배포했고, 이 포트폴리오는 main 브랜치에 푸시하면 GitHub Actions가 빌드해 GitHub Pages로 자동 배포되도록 구성했습니다."
        },
        {
          name: "Git · GitHub",
          experience: "팀 프로젝트에서 브랜치를 나눠 작업하고 병합하며 사용했습니다."
        },
        {
          name: "Jira · Notion · Figma",
          experience: "교육과정 팀 프로젝트에서 이슈 관리와 기획·디자인 공유에 사용했습니다."
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="skills-note">
          숙련도를 수치로 표시하는 대신, 각 기술로 실제 무엇을 만들고 다뤘는지 적었습니다.
        </p>

        <div className="skill-groups">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="skill-group">
              <div className="skill-group-head">
                <h3>{group.title}</h3>
                <p>{group.caption}</p>
              </div>

              <ul className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <p className="skill-experience">{skill.experience}</p>
                    {skill.links && (
                      <div className="skill-links">
                        {skill.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skill-link"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a
          href="https://wscodingrecord.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
          className="skills-blog-link"
        >
          📝 공부하고 막혔던 내용은 블로그에 정리하고 있습니다 ↗
        </a>
      </div>
    </section>
  );
};

export default Skills;
