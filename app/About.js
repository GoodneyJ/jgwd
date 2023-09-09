'use client'

import {React, useRef, useState, useEffect} from 'react'

import OfferCard from './OfferCard'

import styles from '../app/styles/about.module.css'

export default function About() {
  const [lineArray, setLineArray] = useState(["My name is Jarrod", "I'm from Durham, North Carolina", "I bingus when u dingus B)"]);

  const liveTextElement = useRef();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function liveTextMarquee(i) {

    if(i > 0) {
        liveTextElement.current.innerHTML = "";
        // liveTextElement.innerText = lineArray[i];
        liveTextElement.current.innerHTML = lineArray[i];

    } else {
        liveTextElement.current.innerHTML = lineArray[i];

    }
  }

  async function init() {
    
    for(let i = 0; i < lineArray.length; i++) {

        liveTextMarquee(i)
        await sleep(8000);

    }


  }

  init();

  return (
    <div className={styles.aboutContainer}>


      {/* typewriter effect box */}
      <div className={styles.liveTextContainer}>
          <p className={`${styles.line} ${styles.animTypewriter}`} ref={liveTextElement}></p>
      </div>

      {/* Services CTA */}
      <h5 className={styles.subHeading}>What I Offer</h5>
      <h3 className={styles.heading}>Key points of focus</h3>
      <button className={styles.offerBtn}>Send me a message</button>

      {/* Services Block */}
      <div className={styles.offerBlock}>
        <div className={styles.offerRow}>
          <OfferCard title='24/7 Support'/>
          <OfferCard title='Responsive Design'/>
        </div>
        <div className={styles.offerRow}>
          <OfferCard title='Stability & Fast Load times'/>
          <OfferCard title='Stability & Fast Load times'/>
        </div>
      </div>

      {/* Pricing Block */}
      <h4 className={styles.pricingSubheading}>Pricing</h4>
      <div className={styles.pricingBlock}>
          <div className={styles.priceItem}></div>
          <div className={styles.priceItem}></div>
      </div>
      
      <h4 className={styles.reviewHeading}> Heres a few words from business owners like you </h4>
      {/* Font awesome down arrow here please */}
    </div>
  )
}
