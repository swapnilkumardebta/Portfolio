import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaAngleRight } from 'react-icons/fa';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <motion.h2 
            className="section-heading text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Some of the systems and applications I've worked on.
          </motion.p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-row-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="project-left">
                {/* Visual placeholder mimicking the 3D logo in reference */}
                <div className="project-visual">
                  <div className="visual-text text-glow">{project.title.split(' ')[0]}</div>
                </div>
              </div>
              
              <div className="project-right">
                <div className="project-badge">Web Application / System</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-features">
                  <h4 className="features-title">KEY FEATURES</h4>
                  <ul className="features-list">
                    <li><FaCheckCircle className="check-icon" /> Core system architecture</li>
                    <li><FaCheckCircle className="check-icon" /> Custom API integration</li>
                    <li><FaCheckCircle className="check-icon" /> Performance optimization</li>
                  </ul>
                </div>
                
                <div className="project-tech-stack">
                  <h4 className="features-title">TECH STACK</h4>
                  <div className="tech-tags-row">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary btn-sm">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
