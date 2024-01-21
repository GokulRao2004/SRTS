import React,{ useEffect }from 'react'
import styles from "./Philosophy.module.css"
import {getImageUrl} from "../../utils"
import AOS from "aos"
import "aos/dist/aos.css"

export const Philosophy = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <section  className={styles.container} > 
        <h2 className={styles.title}>Our Philosophy</h2>
        <div className={styles.projects}>           
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="00">
                    <img src={getImageUrl("icons/head-hunting.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Hunt</h3>
                    <p className={styles.description}>
                    "<b>Hunt</b>" embodies our recruitment ethos – a strategic, proactive pursuit of top-tier tech and product talent. We go beyond filling positions, aiming for the perfect fit through innovative approaches and market insights.
                    </p>
                </div>
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="300">
                    <img src={getImageUrl("icons/employee.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Hire</h3>
                    <p className={styles.description}>
                     "<b>Hire</b>" signifies strategic precision in securing top-tier tech and product talent. Each hire is curated as a strategic asset, enhancing our clients' success in the dynamic industry landscape.
                    </p>
                </div>  
                <div className={styles.container2} data-aos="flip-left" data-aos-delay="600">
                    <img src={getImageUrl("icons/growth.png")} className={styles.icon}/>
                    <h3 className={styles.title2}>Thrive</h3>
                    <p className={styles.description}>
                    “<b>Thrive</b>” 
 guides our approach, cultivating strategic growth for tech talent. We empower individuals through impactful matches, driving transformative success for clients in the ever evolving  tech domain.
                    </p>
                </div>       
        </div>
    </section>
  )
}

