import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDocker, FaDatabase, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiJavascript } from 'react-icons/si';
import './About.css';

const About = () => {
  const stats = [
    { name: 'Python', percent: 85, color: '#3776AB' },
    { name: 'Django', percent: 80, color: '#092E20' },
    { name: 'React', percent: 75, color: '#61DAFB' },
    { name: 'PostgreSQL', percent: 70, color: '#336791' },
  ];

  // Icons for the orbital ring
  const orbitIcons = [
    { Icon: FaPython, color: '#3776AB', angle: 0 },
    { Icon: SiDjango, color: '#092E20', angle: 45 },
    { Icon: SiJavascript, color: '#F7DF1E', angle: 90 },
    { Icon: FaReact, color: '#61DAFB', angle: 135 },
    { Icon: FaDatabase, color: '#336791', angle: 180 },
    { Icon: FaDocker, color: '#2496ED', angle: 225 },
    { Icon: FaHtml5, color: '#E34F26', angle: 270 },
    { Icon: FaCss3Alt, color: '#1572B6', angle: 315 },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <motion.h2 
            className="section-heading text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            B.Tech graduate with hands-on experience in full-stack development using Python, Django, Flask, Frappe, React and Preact. I build APIs, dashboards, automation workflows and computer-vision-based applications.
          </motion.p>
        </div>

        <div className="about-grid">
          {/* Left: Orbital Profile */}
          <motion.div 
            className="profile-orbit-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="orbit-ring orbit-ring-outer"></div>
            <div className="orbit-ring orbit-ring-inner"></div>
            
            {/* Center Profile Image Placeholder */}
            <div className="profile-center glass">
              <div className="profile-initials">SD</div>
            </div>

            {/* Orbiting Icons */}
            {orbitIcons.map((item, index) => {
              const radius = 140; // distance from center
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div 
                  key={index}
                  className="orbit-icon glass"
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    color: item.color
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <item.Icon size={20} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div 
            className="stats-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="stat-card glass">
              <div className="stat-header">
                <h3>Developer Stats</h3>
                <span className="stat-badge">Full Stack</span>
              </div>
              
              <div className="stat-metrics">
                <div className="metric-box">
                  <span className="metric-val">3+</span>
                  <span className="metric-label">Years Learning</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">15+</span>
                  <span className="metric-label">Projects</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">10+</span>
                  <span className="metric-label">Technologies</span>
                </div>
              </div>

              <div className="stat-bars">
                {stats.map((stat, i) => (
                  <div className="stat-row" key={i}>
                    <div className="stat-info">
                      <span>{stat.name}</span>
                      <span>{stat.percent}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <motion.div 
                        className="progress-bar-fill"
                        style={{ backgroundColor: stat.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
