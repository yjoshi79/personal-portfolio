import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setFormStatus({
        submitted: true,
        error: false
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false
        });
      }, 3000);

    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-container interactive-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>
          Get in Touch
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="contact-form"
          variants={containerVariants}
        >
          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>

          <motion.button 
            type="submit" 
            className="btn submit-btn"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: "spring", 
                stiffness: 300 
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {formStatus.submitted && (
            <motion.div 
              className="form-status success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully!
            </motion.div>
          )}

          {formStatus.error && (
            <motion.div 
              className="form-status error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Something went wrong. Please try again.
            </motion.div>
          )}
        </motion.form>

        <motion.div className="contact-info" variants={itemVariants}>
          <h3>Contact Information</h3>
          <div className="contact-details">
            <p>📧 youremail@example.com</p>
            <p>📱 +1 (123) 456-7890</p>
            <div className="social-links">
              <motion.a 
                href="#" 
                className="social-icon"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="#" 
                className="social-icon"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 