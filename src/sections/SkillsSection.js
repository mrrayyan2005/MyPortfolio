import React, { useState } from "react";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import styles from "../assets/CSS/SkillsSection.module.css";
import skillsData from "../data/skillsData.json";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('ProgrammingLanguages');

  const skillCategories = [
    {
      key: 'ProgrammingLanguages',
      title: 'Programming Languages',
      icon: '💻',
      color: '#3b82f6'
    },
    {
      key: 'WebTechnologies',
      title: 'Web Technologies',
      icon: '🌐',
      color: '#10b981'
    },
    {
      key: 'DeveloperTools',
      title: 'Developer Tools',
      icon: '🛠️',
      color: '#f59e0b'
    },
    {
      key: 'CsFundamentals',
      title: 'CS Fundamentals',
      icon: '🧠',
      color: '#8b5cf6'
    },
    {
      key: 'ProductIntegration',
      title: 'Product Integration',
      icon: '🔗',
      color: '#ef4444'
    }
  ];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div className={styles.sectionHeader} {...animations.fadeInUp}>
          <h2 className={styles.sectionTitle}>My <span>Skills</span></h2>
          <p className={styles.sectionSubtitle}>
            Explore my technical expertise across different domains
          </p>
        </motion.div>

        {/* Skills Navigation */}
        <motion.div className={styles.skillsNav} {...animations.fadeInUp}>
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.key}
              className={`${styles.navButton} ${activeCategory === category.key ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.key)}
              style={{ '--category-color': category.color }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.navIcon}>{category.icon}</span>
              <span className={styles.navText}>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <div className={styles.skillsContent}>
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              className={`${styles.skillsGrid} ${activeCategory === category.key ? styles.activeGrid : ''}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeCategory === category.key ? 1 : 0,
                x: activeCategory === category.key ? 0 : 20
              }}
              transition={{ duration: 0.3 }}
            >
              {skillsData[category.key]?.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.skillCard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: activeCategory === category.key ? 1 : 0,
                    y: activeCategory === category.key ? 0 : 30
                  }}
                  transition={{ 
                    delay: activeCategory === category.key ? index * 0.1 : 0,
                    duration: 0.5 
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={styles.skillHeader}>
                    <h4 className={styles.skillName}>{skill.name}</h4>
                  </div>
                  
                  <div className={styles.skillFooter}>
                    <div 
                      className={styles.categoryBadge}
                      style={{ '--category-color': category.color }}
                    >
                      {category.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
