import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (formStatus === 'error') {
      setFormStatus('');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setFormStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please enter a message.');
      return;
    }
    
    setFormStatus('sending');
    
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    if (!endpoint) {
      console.warn('VITE_FORMSPREE_ENDPOINT is not configured.');
      setFormStatus('error');
      setErrorMessage('Form configuration is missing. Please configure Formspree endpoint.');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      } else {
        setFormStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

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
          <div className="contact-info">
            <h2 className="contact-heading">Let's Build Something Together</h2>
            <p className="contact-text">
              I'm open to software development opportunities, interesting projects and collaborations.
            </p>
            
            <div className="contact-links">
              <a href="mailto:swapnil.debta@example.com" className="contact-link">
                <div className="contact-icon-wrapper"><FaEnvelope /></div>
                <span>Email Me</span>
              </a>
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
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  autoComplete="name"
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                  className={formStatus === 'error' && errorMessage.includes('name') ? 'error' : ''}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  autoComplete="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                  className={formStatus === 'error' && errorMessage.includes('email') ? 'error' : ''}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Hello Swapnil..."
                  className={formStatus === 'error' && errorMessage.includes('message') ? 'error' : ''}
                ></textarea>
              </div>
              
              {formStatus === 'error' && (
                <p className="form-msg error-msg">{errorMessage}</p>
              )}
              
              {formStatus === 'success' && (
                <p className="form-msg success-msg">Message Sent ✓</p>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
