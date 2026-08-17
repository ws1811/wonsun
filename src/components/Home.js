import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: "🙋",
      title: "사용자 경험을 먼저 생각합니다",
      description: "회계 담당자가 매일 여는 화면을 만들다 보니, 요청받은 대로 바로 구현하기보다 이 기능을 실제로 어떤 순서로 쓰는지부터 확인하게 됐습니다. 클릭 한 번을 줄이는 일이 기능을 하나 더 넣는 것보다 나을 때가 많았습니다."
    },
    {
      id: 2,
      icon: "🔍",
      title: "증상이 아니라 원인을 찾습니다",
      description: "눈에 보이는 증상만 덮으면 같은 문제가 얼마 뒤 다른 얼굴로 다시 돌아옵니다. 화면이 느리거나 값이 어긋날 때 임시로 가리는 대신 로그와 쿼리 실행 계획을 따라가며 근본 원인까지 좁혀 들어가고, 구조 자체를 고치는 쪽을 택합니다."
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
            <h1>안녕하세요, Java 개발자 <span className="highlight">송원선</span>입니다</h1>
          </div>

          <div className="intro-section">
            <p className="intro-main">
              <strong>회계 ERP</strong>를 개발·운영하며, 쓰는 사람이 편한 시스템을 고민합니다.
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