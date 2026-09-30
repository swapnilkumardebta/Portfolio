import React, { useEffect, useRef, useState } from 'react';
import './CursorFollower.css';

const CursorFollower = () => {
  const dotsRef = useRef([]);
  const requestRef = useRef(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const dotsPos = useRef([
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 }
  ]);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const NUM_DOTS = 4;
  // Each dot has a different interpolation speed to create the chain effect
  const lerpFactors = [0.25, 0.20, 0.15, 0.10]; 

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsSupported(false);
      return;
    }

    // Disable if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsSupported(false);
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, .project-row-card, .skill-block, .experience-card, .nav-link, .nav-btn, .theme-toggle, input, textarea');
      if (isClickable) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseOut = (e) => {
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    // Teleport dots on first interaction
    window.addEventListener('mousemove', (e) => {
      if (!isVisible) {
        for(let i = 0; i < NUM_DOTS; i++) {
          dotsPos.current[i] = { x: e.clientX, y: e.clientY };
        }
      }
    }, { once: true });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    const animate = () => {
      for (let i = 0; i < NUM_DOTS; i++) {
        // Dot 0 follows mouse, Dot i follows Dot i-1
        const target = i === 0 ? mousePos.current : dotsPos.current[i - 1];
        
        dotsPos.current[i].x += (target.x - dotsPos.current[i].x) * lerpFactors[i];
        dotsPos.current[i].y += (target.y - dotsPos.current[i].y) * lerpFactors[i];

        if (dotsRef.current[i]) {
          dotsRef.current[i].style.transform = `translate3d(${dotsPos.current[i].x}px, ${dotsPos.current[i].y}px, 0) translate(-50%, -50%)`;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isSupported) return null;

  return (
    <div className={`cursor-container ${isVisible ? 'visible' : ''}`}>
      {[...Array(NUM_DOTS)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className={`cursor-dot dot-${i} ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default CursorFollower;
