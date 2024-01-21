import React from 'react';
import styles from './What.module.css'
import { getImageUrl } from '../../utils';

export const What = () => {
  return (
    <div className={styles.mainContainer} data-aos="fade-up">
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>What sets us apart</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <img className ={styles.icon} src={getImageUrl("icons/software-application.png")} alt="Technical Mastery" />
                <div className={styles.aboutItemtext}>
                  <h3 className={styles.aboutText}>Tech Mastery</h3>
                  <p>
                  Our team's deep technical roots ensure precise candidate assessment, elevating beyond the surface.
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img className ={styles.icon} src={getImageUrl("icons/insight.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemtext}>
                  <h3 className={styles.aboutText}>Industry Pioneers</h3>
                  <p>
                  Staying ahead in trends delivers top tech talent to clients and aligns candidates with future opportunities.
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img className ={styles.icon} src={getImageUrl("icons/handshake.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemtext}>
                  <h3 className={styles.aboutText}>Strategic Alliances</h3>
                  <p>
                  SRTS builds enduring relationships, fostering an ecosystem for unparalleled talent and business triumph.
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img className ={styles.icon} src={getImageUrl("icons/innovation.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemtext}>
                  <h3 className={styles.aboutText}>Innovative Recruitment</h3>
                  <p>
                  We revolutionize hiring with cutting-edge tech, offering an efficient, transparent process tailored to the tech-driven world.
                  </p>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <img className ={styles.icon} src={getImageUrl("icons/diversity.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemtext}>
                  <h3 className={styles.aboutText}>Diversity Dynamo</h3>
                  <p>
                  Prioritizing inclusion, we connect clients with a powerhouse of diverse, top-tier tech talent.
                  </p>
                </div>
              </li>
            </ul>
        </div>
    </section></div>
  )
}

