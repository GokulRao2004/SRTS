import React,{useEffect} from 'react'
import { getImageUrl } from '../../utils'
import styles from "./about.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

function About() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <div className={styles.mainContainer} >
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>About Us</h2>
        
        <div className={styles.content}>

          <div className={styles.content2}>
            <p className={styles.para} data-aos="fade-up">Welcome to Shree Rama Talent Solutions (SRTS), a cutting-edge recruitment firm at the forefront of talent acquisition in the digital age. Our team, comprised of highly skilled professionals with robust technical backgrounds, serves as trusted advisors in Tech & Product Hiring. In the ever-evolving technology landscape, we recognize talent acquisition not just as a task but as a strategic imperative.</p>
            
            <p className={styles.para} data-aos="fade-up">SRTS stands out through its commitment to understanding the unique needs of clients and candidates. Our team, equipped with diverse technical expertise, navigates the complex tech industry with finesse. Beyond transactional interactions, we emphasize transformative relationships, weaving a holistic and client-centric approach into our methodologies. SRTS is more than a recruitment partner; we are strategic allies dedicated to aligning organizational goals with the right talent.</p>
            
            <p className={styles.para} data-aos="fade-up">In the digital age, where adaptability is paramount, SRTS is a beacon of reliability. Our proactive stance on technological advancements positions us to anticipate industry shifts and identify talent that propels organizational success. As you explore our comprehensive suite of services, tailored for both tech giants and startups, envision SRTS as your strategic partner in navigating the competitive landscape of talent acquisition. Join us in the pursuit of excellence – where innovation, expertise, and unwavering commitment converge to shape the future of talent acquisition. Welcome to SRTS, the future of recruitment.</p>
            
            
            </div>
        </div>
    </section></div>
  )
}

export default About