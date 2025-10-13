import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import styles from '../assets/CSS/Education.module.css';
import { ReactComponent as Calendar } from '../assets/Svg/bx-calendar.svg';
import educationData from '../data/educationData.json'; 

function Education() {
  const [activeTab, setActiveTab] = useState('timeline');

  const allItems = [
    ...educationData.education.map(item => ({ ...item, type: 'education' })),
    ...educationData.experience.map(item => ({ ...item, type: 'experience' }))
  ].sort((a, b) => {
    // Sort by year, most recent first
    const yearA = parseInt(a.year.split('-')[0] || a.year.split(' ')[0]);
    const yearB = parseInt(b.year.split('-')[0] || b.year.split(' ')[0]);
    return yearB - yearA;
  });


  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div className={styles.sectionHeader} {...animations.fadeInUp}>
          <h2 className={styles.sectionTitle}>My <span>Journey</span></h2>
          <p className={styles.sectionSubtitle}>
            Explore my educational background and professional experience
          </p>
        </motion.div>


        {/* Timeline View */}
        <motion.div 
          className={styles.timelineContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
            <div className={styles.timeline}>
              <div className={styles.timelineLine}></div>
              
              {allItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${styles.timelineItem} ${item.type === 'education' ? styles.education : styles.experience}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <div className={styles.timelineIcon}>
                        {item.type === 'education' ? '🎓' : '💼'}
                      </div>
                      <div className={styles.timelineDate}>
                        <Calendar className={styles.calendarIcon} />
                        {item.year}
                      </div>
                    </div>
                    
                    <div className={styles.timelineBody}>
                      {item.type === 'education' ? (
                        <>
                          <h3 className={styles.timelineTitle}>{item.degree}</h3>
                          <h4 className={styles.timelineSubtitle}>{item.institute}</h4>
                          <div className={styles.timelineGrade}>
                            {item.CGPA ? (
                              <span className={styles.gradeValue}>CGPA: {item.CGPA}</span>
                            ) : (
                              <span className={styles.gradeValue}>Percentage: {item.Percentage}</span>
                            )}
                          </div>
                          {item.specialization && (
                            <p className={styles.timelineDescription}>
                              Specialization: {item.specialization}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          <h3 className={styles.timelineTitle}>{item.role}</h3>
                          <h4 className={styles.timelineSubtitle}>{item.company}</h4>
                          <p className={styles.timelineDescription}>{item.description}</p>
                          
                          {/* Experience Highlights */}
                          <div className={styles.experienceHighlights}>
                            <div className={styles.highlight}>
                              <span className={styles.highlightIcon}>🌍</span>
                              <span>Domestic & International Merchants</span>
                            </div>
                            <div className={styles.highlight}>
                              <span className={styles.highlightIcon}>⚡</span>
                              <span>Real-time Systems</span>
                            </div>
                            <div className={styles.highlight}>
                              <span className={styles.highlightIcon}>🔗</span>
                              <span>API Development</span>
                            </div>
                             <div className={styles.highlight}>
                              <span className={styles.highlightIcon}>⚡</span>
                              <span>Debugging</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className={styles.timelineBadge}>
                      {item.type === 'education' ? 'Academic' : 'Professional'}
                    </div>
                  </div>
                  
                  <div className={styles.timelineConnector}>
                    <div className={styles.connectorDot}></div>
                  </div>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
