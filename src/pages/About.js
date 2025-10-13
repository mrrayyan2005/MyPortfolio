import React,{useEffect} from 'react';
import styles from '../assets/CSS/About.module.css'
import fileImage from "../assets/img/about.jpg";
import infoData from '../data/infoData.json'
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import Education from '../sections/Education';
import Contact from '../sections/Contact';

function About() {
  const { name, longAbout } = infoData;

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <section id="about" className="about show-animate">
        <div className={styles.about_row}>
    
            <motion.div className={styles.about_col}
            {...animations.fadeInLeft1}
            >
                <div className={styles.about_image}>
                    <div className={styles.img_box}>
                        <img  src={fileImage} alt=""/>
                    </div>
        
            </div>
                
            </motion.div>

            <motion.div className={styles.about_col}
            {...animations.fadeInRight1}
            >
                <div className={styles.about_content} >
                    <h1>I'm {name}
                        {/* <span className="animate" style="--i:2;"></span> */}
                        </h1>

        
                    <div className={styles.p_text}>
                       <p>
                          I'm a <strong>B.Tech Information Technology</strong> student at Noida Institute of Engineering & Technology with a CGPA of 8.71, currently working as a <strong>Product Solution Engineer Intern at Juspay</strong> since July 2025.
                       </p>
                       
                       <p>
                          At Juspay, I manage payment infrastructure for international merchants, design and implement <strong>RESTful APIs</strong> for payments, refunds, and checkout SDKs, and collaborate with product and engineering teams to develop real-time payment solutions.
                       </p>
                       
                       <p>
                          My technical expertise spans <strong>full-stack development using the MERN stack</strong>, Java for Data Structures and Algorithms, and payment technologies including Payment Gateways, Merchant Onboarding, and Transaction Flows.
                       </p>
                       
                       <p>
                          I have solved <strong>600+ DSA problems</strong> on LeetCode and GeeksforGeeks, demonstrating strong problem-solving skills. My projects include InsightCRM (AI-powered CRM with Gemini AI), RayyanEstate (full-stack real estate platform), and Sign Language Learner (ML-based web app).
                       </p>
                       
                       <p>
                          I led a team to achieve <strong>Top 5 in the NSUT National Hackathon</strong> and actively contribute to real-time payment solutions in production environments.
                       </p>
                    </div>
                </div>
            </motion.div>
        </div>

    </section>
        <Education />

        <Contact />
    </>
)
}

export default About;
