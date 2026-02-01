import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: "💼",
      title: "ERP 회계 모듈 개발",
      description: "회계원장, 손익관리, 전자세금계산서 등 회계 업무 프로세스를 디지털화하는 ERP 모듈을 개발했습니다. JSP 기반의 복잡한 재무 보고 화면과 계층적 데이터 구조를 구현했습니다."
    },
    {
      id: 2,
      icon: "⚡",
      title: "쿼리 최적화 (90초 → 3초)",
      description: "부서/부문/계정별 월별 손익 집계표화면에서 반복문을 통해 생성되는 JOIN이 50개가 넘어가 로딩에 90초 소요되던 화면을 쿼리 구조 개선과 메모리 기반 피벗 방식을 활용해 3초로 단축시켰습니다."
    },
    {
      id: 3,
      icon: "🗄️",
      title: "Oracle/MySQL DB 운영",
      description: "회계원장 등 복잡한 쿼리를 MySQL/ORACLE 모두에서 호환 가능하게 개발하고 있으며, GROUP BY 절, 날짜 포맷, NULL 처리 등 DB 간 호환성 이슈를 해결했습니다. 두 DBMS 환경 모두에서 안정적인 시스템 운영 경험이 있습니다."
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
            <span className="greeting-tag">안녕하세요 👋</span>
            <h1>Java 개발자 <span className="highlight">송원선</span>입니다</h1>
          </div>
          
          <div className="intro-section">
            <p className="intro-main">
              ERP 회계 시스템 개발 경험을 바탕으로<br/>
              <strong>효율적이고 안정적인 솔루션</strong>을 만들어나가고 있습니다.
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