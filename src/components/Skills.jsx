import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  const constraintsRef = useRef(null);

  // We map the colors to ensure they match the vibrant solid blocks look from the reference
  const getSolidColor = (name) => {
    const colorMap = {
      'Python': '#3776AB',
      'Django': '#092E20',
      'Flask': '#000000',
      'Frappe': '#0089FF',
      'JavaScript': '#F7DF1E',
      'React': '#61DAFB',
      'Preact': '#673AB7',
      'PostgreSQL': '#336791',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'Bootstrap': '#7952B3',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Docker': '#2496ED',
      'MQTT': '#660066',
      'Grafana': '#F46800',
      'TimescaleDB': '#FDB515',
      'REST API': '#009688',
    };
    return colorMap[name] || '#333';
  };

  const getTextColor = (bgColor) => {
    // Simple logic to keep text readable on light backgrounds
    if (['#F7DF1E', '#61DAFB', '#FDB515'].includes(bgColor)) {
      return '#000000';
    }
    return '#ffffff';
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <motion.h2 
            className="section-heading text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Skills Playground
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Technologies I use to build applications, APIs, dashboards and automation systems.
          </motion.p>
        </div>

        {/* Playground Area for Draggable items */}
        <div className="skills-playground" ref={constraintsRef}>
          {skills.map((skill, index) => {
            const bgColor = getSolidColor(skill.name);
            const textColor = getTextColor(bgColor);
            
            // Randomize initial layout slightly for the scattered look
            const isLarge = index % 4 === 0;
            const sizeClass = isLarge ? 'skill-block-large' : 'skill-block-normal';

            return (
              <motion.div 
                key={skill.name}
                className={`skill-block ${sizeClass}`}
                style={{ 
                  backgroundColor: bgColor,
                  color: textColor
                }}
                drag
                dragConstraints={constraintsRef}
                whileDrag={{ scale: 1.1, zIndex: 100, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                dragElastic={0.2}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.03, 
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
              >
                <skill.icon className="skill-block-icon" />
                <span className="skill-block-name">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
