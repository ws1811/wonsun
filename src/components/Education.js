import React from 'react';
import '../styles/Education.css';
// 학력/교육 섹션
const Education = () => {
  const educationData = [
    {
      institution: "경희대학교",
      degree: "수학과 학사",
      period: "2017.03 - 2023.02",
      status: "졸업",
      gpa: "3.0/4.3",
      description: "컴퓨터공학 전공, 소프트웨어개발 집중 과정 이수"
    },
    {
      institution: "돌마고등학교",
      degree: "인문계열",
      period: "2013.03 - 2016.02",
      status: "졸업",
      description: "수학, 과학 중점 과정"
    }
  ];

  const certifications = [
    { name: "정보처리기사", issuer: "한국산업인력공단", date: "2024.06.18" },
    { name: "SQLD", issuer: "ETS", date: "2023.12.15" },
    { name: "컴활 1급", issuer: "대한상공회의소", date: "2021.10.22" }
  ];

  const courses = [
    { name: "MSA기반 Full Stack 개발자 양성과정", provider: "한국소프트웨어산업협회", period: "2023.10.16 - 2024.03.15", hour:840 },
    { name: "백엔드 개발자 취업캠프(Java) ", provider: "멀티캠퍼스", period: "2022.12.26 - 2023.05.09", hour:784 }
  ];

  const experiences = [
    {
      company: "아이비센터(주)",
      position: "ERP 회계모듈 개발 및 유지보수",
      period: "2024.05 - 현재",
      type: "정규직",
      description: "회계원장, 전자세금계산서, 은행CMS연동 등"
    },
  ];

  return (
    <section id="Education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="education-grid-four">
          {/* 학력 */}
          <div className="education-card">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">학력</h3>
            <div className="education-list">
              {educationData.map((edu, index) => (
                <div key={index} className="edu-item">
                  <div className="edu-main">
                    <h4 className="edu-school">{edu.institution}</h4>
                    <p className="edu-major">{edu.degree}</p>
                    <span className="edu-period">{edu.period}</span>
                    {edu.gpa && <span className="edu-gpa">평점: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 경력 */}
          <div className="education-card">
            <div className="card-icon">💼</div>
            <h3 className="card-title">경력</h3>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="exp-item">
                  <div className="exp-main">
                    <h4 className="exp-company">{exp.company}</h4>
                    <p className="exp-position">{exp.position}</p>
                    <div className="exp-meta">
                      <span className="exp-period">{exp.period}</span>
                      <span className="exp-type">{exp.type}</span>
                    </div>
                    <p className="exp-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 자격증 */}
          <div className="education-card">
            <div className="card-icon">🏆</div>
            <h3 className="card-title">자격증</h3>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <div className="cert-info">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">취득일 : {cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 교육과정 */}
          <div className="education-card">
            <div className="card-icon">📚</div>
            <h3 className="card-title">교육과정</h3>
            <div className="course-list">
              {courses.map((course, index) => (
                <div key={index} className="course-item">
                  <div className="course-info">
                    <h4 className="course-name">{course.name}</h4>
                    <p className="course-provider">{course.provider}</p>
                    <span className="course-period">{course.period} ({course.hour}h)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Education;