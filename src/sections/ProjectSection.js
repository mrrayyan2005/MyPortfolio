import React from "react";
import styles from "../assets/CSS/ProjectSection.module.css";
import projectsData from "../data/projectsData.json";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import SchoolMangImage from "../assets/img/SchoolMang.png";
import RayyanEstateImage from "../assets/img/RayyanEstate.png";
import SignLearnImage from "../assets/img/SignLearn.png";
const ProjectSection = () => {
  const getImage = (title) => {
     if (title === "School Management System") {
      return SchoolMangImage;
    }else if (title === "SignLearn") {
      return SignLearnImage;
    }  
    else if (title === "RayyanEstate") {
      return RayyanEstateImage;
    } 
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.project_container}>
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <div className={styles.project_list}>
          {projectsData.projects.map((project, index) => (
            <motion.div 
              className={styles.project_card} 
              key={index}
              {...animations.zoomIn}
            >
              <div className={styles.project_image}>
                <img src={getImage(project.title)} alt={project.title} />
              </div>
              <div className={styles.project_content}>
                <h3>{project.title}</h3>
                <p>{project.longDescription}</p>
                <div className={styles.live_button_container}>
                  <a 
                    href={project.liveDemoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.live_button}
                  >
                    Live Demo
                  </a>
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