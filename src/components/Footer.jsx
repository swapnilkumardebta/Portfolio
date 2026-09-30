import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-content">
          <p className="copyright">
            &copy; 2026 Swapnil Kumar Debta
          </p>
          
          <div className="footer-socials">
            <a href="https://github.com/swapnilkumardebta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/swapnil-kumar-debta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
          
          <div className="footer-built-with">
            <FaCode className="code-icon" /> 
            <span>Built with React</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
