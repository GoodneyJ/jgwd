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
  const [lineArray, setLineArray] = useState(["Welcome to my site", "Got Questions? Send me a message!", "Support for you and your business"]);
  const [longShort, setLongShort] = useState(true);
  const [arrTicker, setArrTicker] = useState(null);
  // const [curIndex, setCurIndex] = useState(0)
  const liveTextRef = useRef();
  let curIndex = -1;
  useEffect(() => {



    function liveTextMarquee() {
    // setCurIndex(curIndex + 1);
      curIndex++;
      if (curIndex >= 3) {
        // setCurIndex(0);
        curIndex = 0;
      }



      liveTextRef ? liveTextRef.current.innerHTML = lineArray[curIndex] : '';
      setArrTicker(lineArray[curIndex]);
      
    }

    var intervalID = setInterval(liveTextMarquee, 5000)

  }, [lineArray, curIndex, liveTextRef])

  return (
    <div id='ABOUT' className={styles.aboutContainer}>
      {/* typewriter effect box */}
      <div id="liveTextContainer" className={styles.liveTextContainer}>
        <p className={`${styles.line} ${styles.animTypewriter}`} ref={liveTextRef}>Hey my name is Jarrod!</p>
      </div>

      {/* Services CTA */}
      <h5 className={styles.subHeading}>What I Offer</h5>
      <h3 className={styles.heading}>Key points of focus</h3>

      {/* Services Block */}
      <div className={styles.offerBlock}>
        <div className={styles.offerRow}>
          <OfferCard title='24/7 Support' icon={<FaWrench id="icon-one" className={cardStyles.cardIcon}/>} cardText={`You can text me & email me when you need me Once I do this full time you'll be able to call me as well!`}/>
          <OfferCard title='Responsive Design' icon={<SlScreenSmartphone  id="icon-two" className={cardStyles.cardIcon}/>} cardText={`Whether its your design or mine I'll make it look great on almost every screen available`}/>
          <OfferCard title='Stable & Secure' icon={<FaServer id="icon-three" className={cardStyles.cardIcon} />} cardText={`I use reliable & secure providers that allow analytics and performance stats that can load new builds of the site in seconds`}/>
          <OfferCard title='Ranked SEO' icon={<FaRegClock  id="icon-four" className={cardStyles.cardIcon} />} cardText={`Using various strategies to hydrate your site with good SEO over time to get your site ranked on google the right way`}/>
        </div>

        
      </div>
      <button className={styles.offerBtn}><a href="#CONTACT" style={{textDecoration: 'none', color: '#f8f8f8'}}>Send me a message</a></button>
      {/* Pricing Block */}
      
      <div className={styles.pricingBlock}>
      <h4 id="PRICING" className={styles.pricingSubheading}>Pricing</h4>
          <div className={styles.priceItem}>
              <h4>Single Payment of $1650</h4>
              <p className={styles.itemSubheading}>Will host for $25 per month</p>
              <ul>
                <li>Half now Half upon completion</li>
                <li>Basic SEO</li>
                <li>QA and Testing</li>
                <li>Professional Copywriting (Or provide your own)</li>
                <li>Designs are responsive!</li>

              </ul>
          </div>
          <div className={styles.priceItem}>
            <h4>Subscription Based</h4>
            <p className={styles.itemSubheading}>$150 Per Month if you have a design you want me to use</p>
            <p className={styles.itemSubheading}>$200 Per Month if you'd rather me create a design from scratch</p>
              <ul>
                <li> 4 hours of development for those who require frequent changes</li>
                <li> dedicated & ongoing support & performance monitoring</li>
                <li> Hosting & Backups to ensure 24/7 uptime</li>
              </ul>
          </div>
          <p>Subscriptions start as a 6-Month minimum, but becomes monthly after that period ends.</p>
      </div>
      
      {/* Image gallery */}
      <ImageGallery />
      <h4 className={styles.reviewHeading}> Heres a few words from business owners like you </h4>
      {/* Font awesome down arrow here please */}
      <BiSolidChevronDown className={styles.chevron}/>
    </div>
  )
}
