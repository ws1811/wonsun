import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p>프로젝트나 협업 문의는 언제든지 환영합니다!</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> your-email@example.com
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> 
              <a href="https://github.com/ws1811" target="_blank" rel="noopener noreferrer">
                github.com/ws1811
              </a>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong> your-linkedin-profile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;