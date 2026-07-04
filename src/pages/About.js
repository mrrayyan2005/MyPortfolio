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
  const aboutParagraphs = Array.isArray(infoData.story) && infoData.story.length
    ? infoData.story
    : [longAbout];

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
                       {aboutParagraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                       ))}
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
