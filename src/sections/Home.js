import React from 'react';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import fileImage from "../assets/img/about.jpg";
import infoData from '../data/infoData.json';
import styles from '../assets/CSS/Home.module.css'; 
import CV from '../assets/documents/CV.pdf';
import { ReactComponent as GitHubIcon } from '../assets/Svg/bxl-github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/Svg/bxl-linkedin.svg';
import { ReactComponent as InstagramIcon } from '../assets/Svg/bxl-instagram-alt.svg';
import { ReactComponent as LeetCodeIcon } from '../assets/Svg/bxl-leetcode.svg';

const Home = () => {
    const { name, bio, email, socialLinks, location, currentRole } = infoData;
  
    return (
        <section id="home" className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.heroBackground}>
                <div className={styles.gradientOrb}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.floatingShapes}>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                </div>
            </div>

            <div className={styles.heroContainer}>
                {/* Main Hero Content */}
                <div className={styles.heroContent}>
                    <motion.div className={styles.heroText} {...animations.fadeInLeft1}>
                        <motion.div className={styles.greetingBadge} {...animations.fadeInUp}>
                            <span className={styles.wavingHand}>👋</span>
                            <span>Hello, I'm</span>
                        </motion.div>
                        
                        <motion.h1 className={styles.heroTitle} {...animations.fadeInLeft1}>
                            {name}
                        </motion.h1>
                        

                        <motion.p className={styles.heroDescription} {...animations.fadeInLeft1}>
                            {bio}
                        </motion.p>

                        {/* Quick Info Cards */}
                        <motion.div className={styles.quickInfo} {...animations.fadeInUp}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📧</div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Email</span>
                                    <a href={`mailto:${email}`} className={styles.infoValue}>
                                        {email}
                                    </a>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>📍</div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Location</span>
                                    <span className={styles.infoValue}>{location}</span>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>💼</div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Current Role</span>
                                    <span className={styles.infoValue}>{currentRole}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div className={styles.heroActions} {...animations.fadeInLeft1}>
                            <a href="#contact" className={styles.primaryBtn}>
                                <span>Let's Work Together</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a href={CV} download="Mohd Rayyan Resume.pdf" className={styles.secondaryBtn}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div className={styles.socialSection} {...animations.fadeInUp}>
                            <span className={styles.socialLabel}>Connect with me</span>
                            <div className={styles.socialLinks}>
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <GitHubIcon />
                                </a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <LinkedInIcon />
                                </a>
                                <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <LeetCodeIcon />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div className={styles.heroImageSection} {...animations.fadeInRight1}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <img src={fileImage} alt={name} className={styles.heroImage} />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <span>Scroll to explore</span>
                    <div className={styles.scrollArrow}></div>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
