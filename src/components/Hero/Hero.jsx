import React from 'react'
import Typed from "react-typed";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () =>{
    const handleComplete = () => {
        // Remove cursor logic goes here
        // For example, you can use CSS to hide the cursor
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
          cursor.style.display = 'none';
        }
      };
    return(
        <section className = {styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to Shree Rama Talent Solutions.</h1>
                {/* <p className={styles.description}>Redefining AI:</p> */}
                <Typed 
                    className={styles.description1}
                    strings={["Hunt.","Hire.","Thrive.","Hunt. Hire. Thrive. "]}
                    typeSpeed={60}
                    backDelay={1000}
                    backSpeed={30}
                    onComplete={handleComplete}
                    />
                
                <a className={styles.contactBtn} href='mailto:sanath@ramatalent.com'>Contact Us</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/hero.png")} />
            {/* <div className={styles.topBlur} />
            <div className={styles.bottomBlur} /> */}
        </section>
    );
};