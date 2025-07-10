import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
  {
    title: 'AI Travel Planner',
    description: 'A frontend-only web application that generates mock travel itineraries based on user input like destination, dates, budget, and interests. Built using React and Vite, with Framer Motion for smooth animations and a fully responsive layout.',
    technologies: ['React', 'Vite', 'Framer Motion'],
    githubLink: 'https://github.com/yjoshi79/ai-travel-planner', // replace with your actual repo link
    liveLink: 'https://ai-travel-planner.vercel.app/' // replace with your deployed link
  }
  ,
  {
    title: 'Algoviz - CPU & Disk Scheduler',
    description: 'An interactive visualizer that simulates various CPU scheduling (FCFS, SJF, Round Robin) and disk scheduling algorithms (SCAN, LOOK, etc.). Built to help students understand how these algorithms work through real-time animations and charts.',
    technologies: ['React', 'Chart.js', 'Framer Motion'],
    githubLink: 'https://github.com/yjoshi79/algoviz-scheduler',
    liveLink: 'https://harshitpbl.netlify.app/'
  }
  ,
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