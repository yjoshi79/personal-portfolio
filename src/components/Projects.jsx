import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Detailed project description goes here.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'Project 3',
    description: 'Third project description.',
    technologies: ['Python', 'Django', 'React Native'],
    githubLink: '#',
    liveLink: '#'
  }
];

const Projects = () => {
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

  const cardVariants = {
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
    <section id="projects" className="projects-section">
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={cardVariants}>
          My Projects
        </motion.h2>
        
        <motion.div className="projects-grid" variants={containerVariants}>
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card interactive-block"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { 
                  type: "spring", 
                  stiffness: 300 
                }
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <motion.a 
                  href={project.githubLink} 
                  className="btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  GitHub
                </motion.a>
                <motion.a 
                  href={project.liveLink} 
                  className="btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 