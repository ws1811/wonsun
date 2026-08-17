import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: "⚡",
      title: "손익 집계 화면 90초 → 3초",
      description: "부서·부문·계정별 월별 손익 집계표에서 반복문으로 생성되는 JOIN이 50개를 넘어가 로딩에 90초가 걸렸습니다. 쿼리 구조를 다시 짜고 집계를 메모리 기반 피벗 방식으로 옮겨 3초로 줄였습니다. 느린 화면은 사용자가 참을 일이 아니라 구조를 고칠 일이라는 걸 배운 작업이었습니다."
    },
    {
      id: 2,
      icon: "🏦",
      title: "은행 CMS 연동 회계처리 개발",
      description: "은행 CMS 시스템과 연동해 카드·계좌 거래내역 데이터를 수신하고 회계 처리하는 기능을 개발했습니다. 숫자 하나가 틀리면 장부 전체가 틀어지는 영역이라, 동작하는 코드보다 왜 이 값이 맞는지 설명할 수 있는 코드를 먼저 생각하게 됐습니다."
    },
    {
      id: 3,
      icon: "🔀",
      title: "Oracle · MySQL 양쪽 호환 개발",
      description: "회계원장처럼 복잡한 쿼리를 Oracle과 MySQL 양쪽에서 모두 동작하도록 개발하고 운영했습니다. GROUP BY 처리, 날짜 포맷, NULL 정렬 등 DBMS 간 방언 차이를 하나씩 맞춰가며 두 환경을 함께 유지했습니다."
    }
  ];

  const toggleDetail = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="greeting">
            <span className="greeting-tag">안녕하세요, </span>
            <h1>Java 개발자 <span className="highlight">송원선</span>입니다</h1>
          </div>
          
          <div className="intro-section">
            <p className="intro-main">
              <strong>회계 ERP</strong>를 개발·운영하며,<br/>
              복잡한 재무 데이터를 <strong>정확하고 빠르게</strong> 다루는 일을 합니다.
            </p>
            
            <div className="intro-highlights">
              {highlights.map((item) => (
                <div key={item.id} className="highlight-wrapper">
                  <div 
                    className={`highlight-item ${selectedItem === item.id ? 'active' : ''}`}
                    onClick={() => toggleDetail(item.id)}
                  >
                    <span className="icon">{item.icon}</span>
                    <span>{item.title}</span>
                    <span className="arrow">{selectedItem === item.id ? '▲' : '▼'}</span>
                  </div>
                  
                  {selectedItem === item.id && (
                    <div className="detail-box">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-secondary">프로젝트</a>
            <a href="#Education" className="btn btn-secondary">학력/경력/교육/자격</a>
            <a href="#skills" className="btn btn-secondary">기술</a>
            <a href="#contact" className="btn btn-secondary">연락처</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;