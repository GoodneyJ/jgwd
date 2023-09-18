import React from 'react'

import styles from './styles/hero.module.css';



export default function Hero() {
  return (
    <div className={styles.heroContainer}>

        <div className={styles.heroContent}>
            <h1>JG Web <br></br> <span className={styles.spanDev}>Development</span></h1>
            <p className={styles.contentText}>Affordable Web Development to suit the needs of you & your business</p>

            <div className={styles.buttonRow}>
                <a href="#PRICING" style={{textDecoration: 'none'}}><button>Learn More</button></a>
                <a href="#CONTACT" style={{textDecoration: 'none'}}><button>Contact Me</button></a>
            </div>
        </div>
        
      
    </div>
  )
}
