import React, { useState } from "react";
import styles from "../assets/CSS/ProjectSection.module.css";
import projectsData from "../data/projectsData.json";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import NeuraPrep from "../assets/img/NeuraPrep.png";
import RayyanEstateImage from "../assets/img/RayyanEstate.png";
import SignLearnImage from "../assets/img/SignLearn.png";
import InsightCrmImage from "../assets/img/InsightCrm.png";
import ExamprepImage from "../assets/img/Examprep.png";

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const getImage = (title) => {
    if (title === "InsightCRM") {
      return InsightCrmImage;
    } else if (title === "RayyanEstate") {
      return RayyanEstateImage;
    } else if (title === "Sign Language Learner") {
      return SignLearnImage;
    } else if (title === "NeuraPrep") {
      return NeuraPrep;
    } else if (title === "Examprep") {
      return ExamprepImage;
    }
  };

  const getProjectIcon = (title) => {
    switch(title) {
      case 'InsightCRM': return '📊';
      case 'RayyanEstate': return '🏠';
      case 'Sign Language Learner': return '🤝';
      case 'NeuraPrep': return '🎯';
      case 'Examprep': return '📚';
      default: return '💼';
    }
  };

  const getTechColor = (tech) => {
    const colors = {
      'React.js': '#61DAFB', 'React': '#61DAFB',
      'Node.js': '#339933',
      'MongoDB': '#47A248',
      'JavaScript': '#F7DF1E',
      'Python': '#3776AB',
      'Flask': '#000000',
      'Keras': '#D00000',
      'Gemini AI': '#4285F4',
      'JWT': '#000000',
      'Cloudinary': '#3448C5',
      'Express.js': '#000000',
      'Tailwind CSS': '#06B6D4',
      'Clerk': '#6C47FF',
      'TypeScript': '#3178C6',
      'Redux Toolkit': '#764ABC',
      'Vite': '#646CFF'
    };
    return colors[tech] || '#6366F1';
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div className={styles.sectionHeader} {...animations.fadeInUp}>
          <h2 className={styles.sectionTitle}>My <span>Projects</span></h2>
          <p className={styles.sectionSubtitle}>
            Explore my latest projects showcasing modern web development and AI integration
          </p>
        </motion.div>


        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className={styles.projectImageContainer}>
                <img 
                  src={getImage(project.title)} 
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectIcon}>
                    {getProjectIcon(project.title)}
                  </div>
                </div>
                <div className={styles.projectBadge}>
                  {project.date}
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>

                <p className={styles.projectDescription}>
                  {hoveredProject === index ? project.longDescription : project.shortDescription}
                </p>

                {/* Technology Stack */}
                <div className={styles.techStack}>
                  <h4 className={styles.techTitle}>Tech Stack</h4>
                  <div className={styles.techTags}>
                    {project.skills.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={styles.techTag}
                        style={{ '--tech-color': getTechColor(tech) }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className={styles.projectActions}>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryAction}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 4H20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Live Demo
                  </a>
                  
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryAction}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22 17 20.5 16 20.5S11 22 11 22V16.13C11.02 15.4 10.73 14.73 10.22 14.22C13.22 13.89 16.5 12.73 16.5 7.74C16.51 6.49 16.04 5.29 15.22 4.39C15.59 3.31 15.56 2.11 15.12 1.06C15.12 1.06 14.07 0.73 11.12 2.42C8.66 1.81 6.06 1.81 3.6 2.42C0.65 0.73 -0.4 1.06 -0.4 1.06C-0.84 2.11 -0.87 3.31 -0.5 4.39C-1.32 5.29 -1.79 6.49 -1.78 7.74C-1.78 12.73 1.5 13.89 4.5 14.22C3.99 14.73 3.7 15.4 3.72 16.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
