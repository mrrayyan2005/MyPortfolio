import React from "react";
import fileImage from "../assets/img/about.jpg";
import styles from "../assets/CSS/AboutSection.module.css";
import { Link } from 'react-router-dom';
import aboutData from "../data/infoData.json"
import { motion } from "framer-motion";
import { animations } from "../components/animations.js";

const AboutSection = () => {
    const { about, longAbout, socialLinks } = aboutData;


    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div className={styles.sectionHeader} {...animations.fadeInUp}>
                    <h2 className={styles.sectionTitle}>About <span>Me</span></h2>
                    <p className={styles.sectionSubtitle}>
                        Get to know more about my journey, expertise, and achievements
                    </p>
                </motion.div>

                {/* Main About Content */}
                <div className={styles.aboutContent}>
                    {/* Left Column - Image and Stats */}
                    <motion.div className={styles.leftColumn} {...animations.fadeInLeft1}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <img src={fileImage} alt="Mohd Rayyan" className={styles.aboutImage} />
                                <div className={styles.imageOverlay}></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div className={styles.rightColumn} {...animations.fadeInRight1}>
                        <div className={styles.contentWrapper}>

                            <motion.div className={styles.description} {...animations.fadeInUp}>
                                <p>{about}</p>
                            </motion.div>

                            {/* Key Highlights */}
                            <motion.div className={styles.highlights} {...animations.fadeInUp}>
                                <h4 className={styles.highlightsTitle}>What I Do</h4>
                                <div className={styles.highlightsList}>
                                    <div className={styles.highlight}>
                                        <span className={styles.highlightIcon}>🏗️</span>
                                        <span>Backend Services & API Development</span>
                                    </div>
                                    <div className={styles.highlight}>
                                        <span className={styles.highlightIcon}>🔍</span>
                                        <span>Performance Optimization & Debugging</span>
                                    </div>
                                    <div className={styles.highlight}>
                                        <span className={styles.highlightIcon}>💼</span>
                                        <span>Real-time Payment Solutions</span>
                                    </div>
                                    <div className={styles.highlight}>
                                        <span className={styles.highlightIcon}>🌐</span>
                                        <span>Full-Stack Web Development</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div className={styles.actionButtons} {...animations.fadeInUp}>
                                <Link to="/about" className={styles.primaryButton}>
                                    Read Full Story
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 8C18.2091 8 20.2091 8.79018 21.6569 10.2379C23.1046 11.6857 23.8947 13.6857 23.8947 15.8947V21H19.3684V15.8947C19.3684 15.1287 19.0643 14.3942 18.5221 13.852C17.9799 13.3098 17.2454 13.0058 16.4795 13.0058C15.7135 13.0058 14.979 13.3098 14.4368 13.852C13.8946 14.3942 13.5906 15.1287 13.5906 15.8947V21H9.06433V15.8947C9.06433 13.6857 9.85451 11.6857 11.3023 10.2379C12.75 8.79018 14.75 8 16.9591 8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5.52632 9H1V21H5.52632V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3.26316 5.52632C4.4558 5.52632 5.42105 4.56107 5.42105 3.36842C5.42105 2.17578 4.4558 1.21053 3.26316 1.21053C2.07051 1.21053 1.10526 2.17578 1.10526 3.36842C1.10526 4.56107 2.07051 5.52632 3.26316 5.52632Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
