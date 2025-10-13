import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; 
import { animations } from "../components/animations.js";
import styles from "../assets/CSS/Contact.module.css";
import CV from "../assets/documents/CV.pdf";
import emailjs from "emailjs-com";
import infoData from "../data/infoData.json";
import { ReactComponent as Githubicon } from "../assets/Svg/bxl-github.svg";
import { ReactComponent as Linkedinicon } from "../assets/Svg/bxl-linkedin.svg";
import { ReactComponent as Instaicon } from "../assets/Svg/bxl-instagram-alt.svg";
import { ReactComponent as PhoneIcon} from "../assets/Svg/bxs-phone.svg";
import { ReactComponent as EmailIcon} from "../assets/Svg/email.svg";
import { ReactComponent as HomeIcon} from "../assets/Svg/home.svg";
import { ReactComponent as LeetCodeIcon} from "../assets/Svg/bxl-leetcode.svg";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { email, phone, location, socialLinks } = infoData;

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(form.current);
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        from_phone: formData.get('phone'),
        message: formData.get('message'),
        reply_to: formData.get('email'),
        to_name: 'Mohd Rayyan', // Your name
        to_email: 'mr.rayyan2005@gmail.com' // Your email
      };

      const result = await emailjs.send(
        "service_cl5utxq",          // your EmailJS service ID
        "template_ke93ri4",         // your EmailJS template ID
        templateParams,
        "1JtIV_X75xMgwj8e6"         // your public key
      );

      console.log("Email sent:", result.text);
      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Email send failed:", error.text);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className={styles.contactIcon} />,
      label: "Phone",
      value: phone,
      link: `tel:${phone}`,
      description: "Call me directly"
    },
    {
      icon: <EmailIcon className={styles.contactIcon} />,
      label: "Email",
      value: email,
      link: `mailto:${email}`,
      description: "Send me an email"
    },
    {
      icon: <HomeIcon className={styles.contactIcon} />,
      label: "Location",
      value: location,
      link: null,
      description: "Where I'm based"
    }
  ];

  const socialPlatforms = [
    {
      icon: <Githubicon className={styles.socialIcon} />,
      name: "GitHub",
      link: socialLinks.github,
      description: "View my repositories"
    },
    {
      icon: <Linkedinicon className={styles.socialIcon} />,
      name: "LinkedIn",
      link: socialLinks.linkedin,
      description: "Connect professionally"
    },
    {
      icon: <LeetCodeIcon className={styles.socialIcon} />,
      name: "LeetCode",
      link: socialLinks.leetcode,
      description: "Check my coding progress"
    }
  ];

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div className={styles.sectionHeader} {...animations.fadeInUp}>
          <h2 className={styles.sectionTitle}>
            Let's <span>Connect</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Ready to start a project or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          {/* Contact Form */}
          <motion.div className={styles.formSection} {...animations.fadeInLeft1}>
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>Send me a message</h3>
              <p className={styles.formSubtitle}>
                Fill out the form below and I'll get back to you as soon as possible
              </p>

              <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className={styles.inputField}
                      placeholder="Enter your full name"
                      required 
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Mobile Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className={styles.inputField}
                      placeholder="Enter your mobile number"
                      required 
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    className={styles.inputField}
                    placeholder="Enter your email address"
                    required 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Message</label>
                  <textarea 
                    name="message" 
                    className={styles.textareaField}
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus && (
                  <motion.div 
                    className={`${styles.submitMessage} ${styles[submitStatus]}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitStatus === "success" ? (
                      <>✓ Email sent successfully! I'll get back to you soon.</>
                    ) : (
                      <>✗ Unable to send mail. Please check your email and try again.</>
                    )}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className={styles.infoSection} {...animations.fadeInRight1}>
            <div className={styles.contactMethods}>
              <h3 className={styles.infoTitle}>Get in touch</h3>
              <div className={styles.methodsGrid}>
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className={styles.contactMethod}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.methodIcon}>{method.icon}</div>
                    <div className={styles.methodContent}>
                      <h4 className={styles.methodLabel}>{method.label}</h4>
                      <p className={styles.methodDescription}>{method.description}</p>
                      {method.link ? (
                        <a href={method.link} className={styles.methodValue}>
                          {method.value}
                        </a>
                      ) : (
                        <span className={styles.methodValue}>{method.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.infoTitle}>Follow me</h3>
              <div className={styles.socialGrid}>
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className={styles.socialIconWrapper}>
                      {platform.icon}
                    </div>
                    <h4 className={styles.socialName}>{platform.name}</h4>
                    <p className={styles.socialDescription}>{platform.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickActions}>
              <h3 className={styles.infoTitle}>Quick actions</h3>
              <div className={styles.actionsGrid}>
                <motion.a
                  href={CV}
                  download="Mohd Rayyan Resume.pdf"
                  className={styles.actionCard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.actionIcon}>📄</div>
                  <span>Download Resume</span>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className={styles.actionCard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.actionIcon}>🚀</div>
                  <span>View Projects</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
