import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=swapnildebta556@gmail.com&su=Let's%20Work%20Together&body=Hi%20Swapnil,%0A%0AI'd%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AThanks.";

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
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary email-btn"
              aria-label="Email Me"
            >
              <FaEnvelope /> Email Me
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
