import React,{useEffect} from 'react'

import { getImageUrl } from "../../utils"
import styles from './Services.module.css'
import AOS from "aos"
import "aos/dist/aos.css"

export default function Services() {
    useEffect(()=>{
        AOS.init({duration: 1500})
      },[])
  return (
    <section id="services" className={styles.container} data-aos="fade"> 
        <h2 className={styles.title}>Services we offer</h2>
        <div className={styles.projects}>           
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="0">
                    <img src={getImageUrl("services/recruitment (4).png")} className={styles.icon}/>
                    <h3 className={styles.title2}>End-to-End Recruitment</h3>
                    <p className={styles.description}>
                    Strategic recruitment services designed to match top-tier talent with forward-thinking companies.<br /> Leveraging industry expertise to streamline the hiring process and build high-performing teams.
                    </p>
                </div>
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="300">
                    <img src={getImageUrl("services/onboarding (1).png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Employee Engagement</h3>
                    <p className={styles.description}>
                    Elevating workforce satisfaction and productivity through tailored employee engagement services. <br/>Specializing in creating dynamic and inclusive workplace cultures that empower teams to thrive.
                    </p>
                </div>  
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="600">
                    <img src={getImageUrl("services/building.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Vender-On-Premise(VOP)</h3>
                    <p className={styles.description}>
                    Connecting businesses with top talent while managing the entire on-site vendor relationship. Elevating your workforce strategy through seamless collaboration and optimized recruitment processes.
                    </p>
                </div>       
        </div>
    </section>
  )
}
