import React,{useEffect} from 'react';
import styles from '../assets/CSS/About.module.css'
import HomeImg from '../assets/img/home.png'
import fileImage from "../assets/img/about.jpg";
import CV from '../assets/documents/CV.pdf';
import infoData from '../data/infoData.json'
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import { ReactComponent as Githubicon } from "../assets/Svg/bxl-github.svg";
import { ReactComponent as Linkedinicon } from "../assets/Svg/bxl-linkedin.svg";
import { ReactComponent as Instaicon } from "../assets/Svg/bxl-instagram-alt.svg";
import { ReactComponent as PhoneIcon} from "../assets/Svg/bxs-phone.svg";
import { ReactComponent as EmailIcon} from "../assets/Svg/email.svg";
import { ReactComponent as HomeIcon} from "../assets/Svg/home.svg";
import ChangeText from '../components/ChangeText';
import Education from '../sections/Education';

function About() {
  const { name, longAbout, email, phone, location, socialLinks } = infoData;

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <section id="about" class="about show-animate">
        <div class={styles.about_row}>
    
            <motion.div class={styles.about_col}
            {...animations.fadeInLeft1}
            >
                <div class={styles.about_image}>
                    <div class={styles.img_box}>
                        <img  src={fileImage} alt=""/>
                    </div>
        
            </div>
                
            </motion.div>

            <motion.div class={styles.about_col}
            {...animations.fadeInRight1}
            >
                <div class={styles.about_content} >
                    <h1>I'm {name}
                        {/* <span class="animate" style="--i:2;"></span> */}
                        </h1>
                        <div className={styles.change_text}>
                  <h3>And I'm</h3>
                  <h3>
                   <ChangeText />
                  </h3>
                  {/* <span
                    className={styles.animate}
                    style={{ "--i": 2 }}
                  ></span> */}
                </div>

        
                    <p class={styles.p_text}>
                       {longAbout}
                       
                    </p>
                </div>
            </motion.div>
        </div>

    </section>
        <Education />

        <div class={styles.contact_div}>
            <div class={styles.contact_row}>

                <motion.div class={styles.contact_col}
                {...animations.fadeInUp}
                >
                    <div class={styles.contact_info}>
                    <div className={styles.contact_data}>
                            <div className={styles.contact_data_col}>
                            <h5>Mobile</h5>
                                <p>< PhoneIcon className={styles.sicon}/> {phone}</p>

                                <h5>Email</h5>
                                <p><EmailIcon className={styles.sicon} /> {email}</p>
        
                            </div>

                            <div className={styles.contact_data_col}>
    
                            <h5>Location</h5>
                            <p><HomeIcon className={styles.sicon}/> {location}</p>

                            </div>
    
                        </div>

                        
                        <div className={styles.contact_social}>
                            <div className={styles.social_icon}>
                                <a target="_blank"  href={socialLinks.github} rel="noreferrer"><Githubicon className={styles.icon}/></a>
                                <a target="_blank"  href={socialLinks.linkedin} rel="noreferrer"><Linkedinicon className={styles.icon}/></a>
                                <a target="_blank"  href={socialLinks.instagram} rel="noreferrer"><Instaicon className={styles.icon} /></a>
                                
                            </div>
                        </div>

                        <div class={styles.contact_button}>
                            <div class="btn-box">
                                <a href={CV} download="Mohd Rayyan Resume.pdf" class="btn">Download CV</a>
                                {/* <span class="animate " style="--i:7;"></span> */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </>
)
}

export default About;