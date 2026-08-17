import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'Education', label: 'Education & Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  // 스크롤 위치에 따라 현재 보고 있는 섹션을 표시
  useEffect(() => {
    const updateActiveSection = () => {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (sections.length === 0) return;

      // 페이지 최하단에서는 마지막 섹션이 화면을 다 채우지 못해도 활성 처리
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      if (reachedBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // 헤더 바로 아래를 기준선으로 삼아, 그 선을 지난 마지막 섹션을 선택
      const line = window.scrollY + headerHeight + 1;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.offsetTop <= line) current = section.id;
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        {/* <div className="logo">
          <h2>WonSun</h2>
        </div> */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              aria-current={activeSection === item.id ? 'true' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
