import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <h1>안녕하세요!</h1>
          <h2>저는 개발자<span className="highlight">송원선</span> 입니다</h2>
          {/* <p>창의적이고 효율적인 솔루션을 만들어나가고 있습니다.</p> */}
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
            <a href="#contact" className="btn btn-secondary">연락하기</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;