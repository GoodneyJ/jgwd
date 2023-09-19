'use client'

import {React, useRef, useState, useEffect} from 'react'
import dynamic from 'next/dynamic';
import { BiSolidChevronDown } from "react-icons/bi";
import { FaWrench, FaServer, FaRegClock } from 'react-icons/fa'
import { DiResponsive } from 'react-icons/di'
import { SlScreenSmartphone } from 'react-icons/sl'

import OfferCard from './OfferCard'
import ImageGallery from './ImageGallery'

import styles from '../app/styles/about.module.css'
import cardStyles from '../app/styles/offerCard.module.css'
export default function About() {
  const [lineArray, setLineArray] = useState(["This is <span>Line 1</span>", "This is <span>Line 2</span>", "This is <span>Line 3</span>"]);
  const [longShort, setLongShort] = useState(true);
  const liveTextRef = useRef();

  useEffect(() => {
    async function liveTextMarquee(i) {
      if(i > 0) {
          liveTextRef.current.innerHTML = "";
          // liveTextElement.innerText = lineArray[i];
          liveTextRef.current.innerHTML = lineArray[i];  
      } else {
          liveTextRef.current.innerHTML = lineArray[i];
      }
      // console.log(liveTextRef.current.innerHTML.length)
      // if(liveTextRef.current.innerHTML.length > 30) {
      //   setLongShort(true);   
      // }
      // setLongShort(false);
    }

    async function init() {
      for(let i = 0; i < lineArray.length; i++) {
          liveTextMarquee(i)
          // if(longShort) {
          await sleep(5500);
          // }
          // else {
          //   await sleep(5000);
          // }
      }
      init();
    }
    init();
  }, [])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div id='ABOUT' className={styles.aboutContainer}>
      {/* typewriter effect box */}
      <div id="liveTextContainer" className={styles.liveTextContainer}>
        <p className={`${styles.line} ${styles.animTypewriter}`} ref={liveTextRef}></p>;
      </div>

      {/* Services CTA */}
      <h5 className={styles.subHeading}>What I Offer</h5>
      <h3 className={styles.heading}>Key points of focus</h3>

      {/* Services Block */}
      <div className={styles.offerBlock}>
        <div className={styles.offerRow}>
          <OfferCard title='24/7 Support' icon={<FaWrench id="icon-one" className={cardStyles.cardIcon}/>}/>
          <OfferCard title='Responsive Design' icon={<SlScreenSmartphone  id="icon-two" className={cardStyles.cardIcon}/>}/>
        </div>
        <div className={styles.offerRow}>
          <OfferCard title='Stability & Fast Load times' icon={<FaServer id="icon-three" className={cardStyles.cardIcon}/>}/>
          <OfferCard title='Stability & Fast Load times' icon={<FaRegClock  id="icon-four" className={cardStyles.cardIcon}/>}/>
        </div>
        <button className={styles.offerBtn}><a href="#CONTACT" style={{textDecoration: 'none', color: '#f8f8f8'}}>Send me a message</a></button>
      </div>

      {/* Pricing Block */}
      
      <div className={styles.pricingBlock}>
      <h4 id="PRICING" className={styles.pricingSubheading}>Pricing</h4>
          <div className={styles.priceItem}>
              <h4>Full Site $1500-3500</h4>
              <ul>
                <li>Half now Half upon completion</li>
                <li>SEO, Page optimization, off page promotions</li>
                <li>QA and performance tests</li>
                <li>Professional Copywriting or provide your own</li>
                <li>responsive designs & development</li>
                <li>Analytics & Tracking</li>
              </ul>
          </div>
          <div className={styles.priceItem}>
            <h4>Subscription Based</h4>
              <ul>
                <li> 4 hours of development for those who require frequent changes</li>
                <li> dedicated & ongoing support & performance monitoring</li>
                <li> Hosting & Backups to ensure 24/7 uptime</li>
              </ul>
          </div>
      </div>
      
      {/* Image gallery */}
      <ImageGallery />
      <h4 className={styles.reviewHeading}> Heres a few words from business owners like you </h4>
      {/* Font awesome down arrow here please */}
      <BiSolidChevronDown className={styles.chevron}/>
    </div>
  )
}
