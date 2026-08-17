import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const highlights = [
    {
      id: 1,
      icon: "🙋",
      title: "쓰는 사람을 먼저 생각합니다",
      description: "회계 담당자가 매일 여는 화면을 만들다 보니, 요청받은 대로 바로 구현하기보다 이 기능을 실제로 어떤 순서로 쓰는지부터 확인하게 됐습니다. 클릭 한 번을 줄이는 일이 기능을 하나 더 넣는 것보다 나을 때가 많았습니다."
    },
    {
      id: 2,
      icon: "⏱️",
      title: "기다리게 하지 않는 것도 기능입니다",
      description: "화면이 느리면 사용자에게는 기능이 없는 것과 크게 다르지 않습니다. 느린 화면은 사용자가 참을 일이 아니라 구조를 고칠 일이라고 생각해서, 눈에 보이는 증상만 덮지 않고 원인을 끝까지 따라가 보는 편입니다."
    },
    {
      id: 3,
      icon: "📝",
      title: "배운 건 기록해서 남깁니다",
      description: "막혔던 문제와 풀어낸 과정을 블로그에 정리하고 있습니다. 글로 옮기다 보면 대충 알고 넘어간 부분이 드러나서, 결국 제가 가장 많이 배우게 되더라고요."
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