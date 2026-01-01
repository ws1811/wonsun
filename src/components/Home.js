import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        
        <div className="home-content">
          <h1>Wonsun's Portfolio</h1>
          {/* <p>창의적이고 효율적인 솔루션을 만들어나가고 있습니다.</p> */}
          <div className="home-buttons">
           <a href="#projects" className="btn btn-projects">프로젝트</a>
           <a href="#Education" className="btn btn-education">학력/경력/교육/자격</a>
            <a href="#skills" className="btn btn-skills">기술</a>
            <a href="#contact" className="btn btn-secondary">연락처</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;