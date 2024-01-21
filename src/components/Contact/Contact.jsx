import React from 'react'
import { getImageUrl} from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id = "contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get in touch with us!</h2>
        <p>Developed by <a href='https://www.linkedin.com/company/sumukha-ai/about/'>Sumukha.AI</a></p>
      </div>
      <ul className={styles.links}><li className={styles.link}>
          <a href="https://www.linkedin.com/company/shree-rama-talent-solutions/" target='_blank'><img src={getImageUrl("contact/linkedin (2).png")} alt="LinkedIn" /></a>
        </li> 
        <li className={styles.link} >
          <a href="mailto:sanath@ramatalent.com" target='_blank'>
            <img src={getImageUrl("contact/email.png")} alt="Email" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://wa.me/+917259299386" target='_blank'> <img src={getImageUrl("contact/whatsapp (1).png")} alt="Whatsapp" /></a>
        </li>
      </ul>
    </footer>
    
  )
}
