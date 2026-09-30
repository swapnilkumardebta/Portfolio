import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaReact, FaJs, FaDatabase, FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Glowing Shapes */}
      <div className="bg-shape shape-cyan"></div>
      <div className="bg-shape shape-yellow"></div>
      
      {/* Floating Tech Icons */}
      <motion.div className="floating-icon icon-python" animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><FaPython /></motion.div>
      <motion.div className="floating-icon icon-react" animate={{ y: [0, -30, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}><FaReact /></motion.div>
      <motion.div className="floating-icon icon-js" animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><FaJs /></motion.div>
      <motion.div className="floating-icon icon-db" animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}><FaDatabase /></motion.div>
      <motion.div className="floating-icon icon-code" animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}><FaCode /></motion.div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Swapnil Kumar Debta
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer / Full Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I build scalable backend systems, modern web applications and automation workflows.
          </motion.p>
          
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="https://github.com/swapnilkumardebta" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/swapnil-kumar-debta/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
