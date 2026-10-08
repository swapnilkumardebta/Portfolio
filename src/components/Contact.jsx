import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Simple check for Android or iOS devices
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const recipient = 'swapnildebta556@gmail.com';
  const subject = "Let's Work Together";
  const body = `Hi Swapnil,\n\nI'd like to discuss a potential opportunity with you.\n\nThanks.`;
  
  // Standard mailto for mobile devices
  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Web compose for desktop devices
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const emailUrl = isMobile ? mailtoUrl : gmailWebUrl;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-container glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-content">
            <h2 className="contact-heading">Let's Build Something Together</h2>
            <p className="contact-text">
              I'm open to software development opportunities, interesting projects and collaborations.
            </p>
            
            <a 
              href={emailUrl} 
              target={isMobile ? undefined : "_blank"}
              rel={isMobile ? undefined : "noopener noreferrer"}
              className="btn btn-primary email-btn"
              aria-label="Email Me"
            >
              <FaEnvelope />
              <span>Email Me</span>
            </a>
            
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/swapnil-kumar-debta/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon-wrapper"><FaLinkedin /></div>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/swapnilkumardebta" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon-wrapper"><FaGithub /></div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
