import React from "react";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import styles from "../assets/CSS/SkillsSection.module.css";
import skillsData from "../data/skillsData.json";

const SkillsSection = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      
      {/* First Row - Frontend & Backend */}
      <div className={styles.skills_row}>
        {/* Frontend Skills */}
        <motion.div className={styles.skills_colum} {...animations.fadeInLeft}>
          <h3 className={styles.title}>Frontend</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              {skillsData.FrontEndSkills.map((skill, index) => (
                <div className={styles.skill_item} key={index}>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div className={styles.skills_colum} {...animations.fadeInRight}>
          <h3 className={styles.title}>Backend</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              {skillsData.Backend.map((skill, index) => (
                <div className={styles.skill_item} key={index}>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Second Row - Databases & Programming */}
      <div className={styles.skills_row}>
        {/* Databases */}
        <motion.div className={styles.skills_colum} {...animations.fadeInLeft}>
          <h3 className={styles.title}>Databases</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              {skillsData.Databases.map((skill, index) => (
                <div className={styles.skill_item} key={index}>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Programming */}
        <motion.div className={styles.skills_colum} {...animations.fadeInRight}>
          <h3 className={styles.title}>Programming</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              {skillsData.Programming.map((skill, index) => (
                <div className={styles.skill_item} key={index}>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Third Row - CS Fundamentals & Data Structures */}
      <div className={styles.skills_row}>
        {/* CS Fundamentals */}
        <motion.div className={styles.skills_colum} {...animations.fadeInLeft}>
          <h3 className={styles.title}>CS Fundamentals</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              {skillsData.CsFundamentals.map((skill, index) => (
                <div className={styles.skill_item} key={index}>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data Structures */}
        <motion.div className={styles.skills_colum} {...animations.fadeInRight}>
          <h3 className={styles.title}>Data Structures</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              {skillsData.DataStructure.map((skill, index) => (
                <div className={styles.skill_item} key={index}>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;