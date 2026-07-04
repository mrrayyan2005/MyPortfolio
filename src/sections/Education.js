import React from 'react';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import styles from '../assets/CSS/Education.module.css';
import { ReactComponent as Calendar } from '../assets/Svg/bx-calendar.svg';
import educationData from '../data/educationData.json'; 

function Education() {
  const monthNumbers = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11
  };

  const getTimelineStart = (yearRange) => {
    const match = yearRange.match(/([A-Za-z]+)\s+(\d{4})|(\d{4})/);

    if (!match) {
      return 0;
    }

    const year = Number(match[2] || match[3]);
    const month = match[1] ? monthNumbers[match[1].toLowerCase()] ?? 0 : 0;

    return new Date(year, month).getTime();
  };

  const allItems = [
    ...educationData.education.map(item => ({ ...item, type: 'education' })),
    ...educationData.experience.map(item => ({ ...item, type: 'experience' })),
    ...(educationData.achievements || []).map(item => ({ ...item, type: 'achievement' }))
  ].sort((a, b) => getTimelineStart(b.year) - getTimelineStart(a.year));


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
                        {item.type === 'education' ? '🎓' : item.type === 'achievement' ? '🏆' : '💼'}
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
                      ) : item.type === 'experience' ? (
                        <>
                          <h3 className={styles.timelineTitle}>{item.role}</h3>
                          <h4 className={styles.timelineSubtitle}>{item.company}</h4>
                          {item.location && (
                            <div className={styles.timelineMeta}>{item.location}</div>
                          )}
                          <p className={styles.timelineDescription}>{item.description}</p>

                          {/* Experience Highlights */}
                          <div className={styles.experienceHighlights}>
                            {(item.highlights || []).map((highlight, highlightIndex) => (
                              <div className={styles.highlight} key={highlight}>
                                <span className={styles.highlightIcon}>{highlightIndex === 0 ? '🌍' : '⚡'}</span>
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <h3 className={styles.timelineTitle}>{item.title}</h3>
                          <h4 className={styles.timelineSubtitle}>{item.organization}</h4>
                          <p className={styles.timelineDescription}>{item.description}</p>
                        </>
                      )}
                    </div>

                    <div className={styles.timelineBadge}>
                      {item.type === 'education' ? 'Academic' : item.type === 'achievement' ? 'Leadership' : 'Professional'}
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
