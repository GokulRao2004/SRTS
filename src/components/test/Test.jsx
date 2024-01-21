import React from 'react'
import styles from "./Test.module.css"
import {getImageUrl} from "../../utils"


export const Test = () => {
    return (
        <section  className={styles.container} data-aos="fade"> 
            <h2 className={styles.title}>WHAT SETS US APART</h2>
            <div className={styles.projects} data-aos="fade-up" data-aos-delay="200">           
                    <div className={styles.container2}>
                        <img src={getImageUrl("icons/project-management.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Innovative Recruitment</h3>
                        <p className={styles.description}>
                        Revolutionizing hiring with cutting-edge tech, we provide an efficient, transparent process tailored to the dynamic tech-driven world.
                        </p>
                    </div>
                    <div className={styles.container2}>
                        <img src={getImageUrl("icons/software-application (1).png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Tech Mastery</h3>
                        <p className={styles.description}>
                        Deep technical roots drive precise candidate assessment, elevating beyond the surface for comprehensive talent evaluation and strategic recruitment success.
                        </p>
                    </div>
                    <div className={styles.container2}>
                        <img src={getImageUrl("icons/chat.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Integrated Chatbot</h3>
                        <p className={styles.description}>
                        Revolutionizing recruitment with strategic AI-driven chatbots, optimizing efficiency and candidate experience in talent acquisition processes.
                     </p>
                    </div>  
                         
            </div><div className={styles.projects} data-aos="fade-up" data-aos-delay="200" >           
                    
                    <div className={styles.container2}>
                        <img src={getImageUrl("icons/dashboard.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Industry Pioneers</h3>
                        <p className={styles.description}>
                        Staying ahead in trends secures top tech talent for clients, aligning candidates with future opportunities and fostering strategic partnerships.
                        </p>
                    </div>  
                    <div className={styles.container2}>
                        <img src={getImageUrl("icons/handshake (1).png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Strategic Alliances</h3>
                        <p className={styles.description}>
                        SRTS cultivates lasting relationships, fostering an ecosystem for unparalleled talent, collaboration, and business triumphs.
                        </p>
                    </div>  
                  <div className={styles.container2}>
                        <img src={getImageUrl("icons/community.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Diversity Dynamo</h3>
                        <p className={styles.description}>

                        Prioritizing inclusion, we connect clients with a powerhouse of diverse, top-tier tech talent, fostering innovation and collaboration.





</p>
                    </div> 
                           
            </div>
            
        </section>
      )
}
