import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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

  const buttonVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        delay: 0.6 // Slightly delayed to create a staggered effect
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <motion.div 
          className="bg-shape bg-shape-1"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-shape bg-shape-2"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 50, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.div 
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Yogesh Chandra
        </motion.h1>
        <motion.h2 variants={itemVariants}>
          Software Engineer & Web Developer
        </motion.h2>
        <motion.p variants={itemVariants}>
          Crafting innovative digital solutions with a passion for creating 
          intuitive and performant web experiences.
        </motion.p>
        <motion.div 
          className="hero-cta"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.a 
            href="#contact" 
            className="btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="#projects" 
            className="btn btn-outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 