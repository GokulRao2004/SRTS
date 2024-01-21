import { useState } from 'react'
import {getImageUrl} from '../../utils.js'
import React from 'react'
import styles from "./Navbar.module.css"



export const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={
          menuOpen ?
          getImageUrl("nav/closeIcon.png"):
          getImageUrl("nav/menuIcon.png") }
          alt = "menu"
          onClick={()=> setMenuOpen(!menuOpen)}
          />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>{setMenuOpen(!menuOpen)}}>
          <li>
            <a href='../home'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
