import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> rnsjtm0811@gmail.com
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> 
              <a href="https://github.com/ws1811" target="_blank" rel="noopener noreferrer">
                github.com/ws1811
              </a>
            </div>
            <div className="contact-item">
              <strong>Blog:</strong>  <a href="https://wscodingrecord.tistory.com/" target="_blank" rel="noopener noreferrer">https://wscodingrecord.tistory.com/</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;