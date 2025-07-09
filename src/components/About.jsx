import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const skillsData = [
  { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools', skills: ['Git', 'Docker', 'Webpack', 'Vite', 'CI/CD', 'Figma'] }
];

const About = () => {
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
    <section id="about" className="about-section">
      <motion.div 
        className="about-container container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>
          About Me
        </motion.h2>
        
        <motion.div className="about-content" variants={containerVariants}>
          <motion.div className="about-text" variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 24px rgba(74,108,247,0.10)",
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 2px 16px rgba(74,108,247,0.15)",
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <p>
              I'm a passionate Software Engineer with a keen interest in creating 
              innovative digital solutions that solve real-world problems. My journey 
              in technology began with a fascination for how complex systems can be 
              simplified through elegant code and intuitive design.
            </p>
            <p>
              With a strong background in web development, I specialize in building 
              responsive, performant, and user-centric applications. My approach 
              combines technical expertise with creative problem-solving, always 
              aiming to push the boundaries of what's possible in web technologies.
            </p>
          </motion.div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3>My Technical Skills</h3>
            <div className="skills-grid">
              {skillsData.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="skills-category"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 4px 24px rgba(74,108,247,0.10)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{
                    scale: 0.97,
                    boxShadow: "0 2px 16px rgba(74,108,247,0.15)",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <h4>{category.category}</h4>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex} 
                        className="skill-tag"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { 
                            type: "spring", 
                            stiffness: 300 
                          }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: { 
                            type: "spring", 
                            stiffness: 300 
                          }
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="about-highlights" variants={itemVariants}>
          <motion.div 
            className="highlight-item"
            whileHover={{ 
              scale: 1.02,
              transition: { 
                type: "spring", 
                stiffness: 300 
              }
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 2px 16px rgba(74,108,247,0.15)",
              transition: {
                type: "spring",
                stiffness: 400
              }
            }}
          >
            <h3>Education</h3>
            <p>Bachelor of Technology in Computer Science</p>
            <p>Specialized in Web Technologies and Software Engineering</p>
          </motion.div>
          <motion.div 
            className="highlight-item"
            whileHover={{ 
              scale: 1.02,
              transition: { 
                type: "spring", 
                stiffness: 300 
              }
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 2px 16px rgba(74,108,247,0.15)",
              transition: {
                type: "spring",
                stiffness: 400
              }
            }}
          >
            <h3>Experience</h3>
            <p>3+ Years of Professional Software Development</p>
            <p>Full-stack Web Development and DevOps</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;