import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Aadhil. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a> | 
          <a href="#projects">Projects</a> | 
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
