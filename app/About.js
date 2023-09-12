'use client'

import {React, useRef, useState, useEffect} from 'react'
import dynamic from 'next/dynamic';
import { BiSolidChevronDown } from "react-icons/bi";

import OfferCard from './OfferCard'

import styles from '../app/styles/about.module.css'

export default function About() {
  const [lineArray, setLineArray] = useState(["This is <span>Line 1</span>", "This is <span>Line 2</span>", "This is <span>Line 3</span>"]);
  const [longShort, setLongShort] = useState(true);
  let [switchCounter, setSwitchCounter] = useState(0);
  const liveTextRef = useRef();

  useEffect(() => {

      async function liveTextMarquee() {

      //   console.log('fire')
      //   // if(i > 0) {
      //   //     liveTextRef.current.innerHTML = "";
      //   //     // liveTextElement.innerText = lineArray[i];
      //   //     liveTextRef.current.innerHTML = lineArray[i];  
      //   // } else {
      //   //     liveTextRef.current.innerHTML = lineArray[i];
      //   // }
      //   // console.log(liveTextRef.current.innerHTML.length)
      //   // if(liveTextRef.current.innerHTML.length > 30) {
      //   //   setLongShort(true);   
      //   // }
      //   // setLongShort(false);
      //   for(let i = 0; i < lineArray.length; i++) {
      //     if(switchCounter < 3) {
      //       setSwitchCounter(switchCounter++);
      //       await sleep(1000)
      //     } 
      //   }

      //   if(switchCounter >= 3) {
      //     setSwitchCounter(0);

      //   } 


        setInterval(async () => {
          if(switchCounter < 3) {
            await setSwitchCounter(switchCounter++);
          } 
        }, 1000);
      }

      // liveTextMarquee();

      liveTextMarquee();
    }, [])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className={styles.aboutContainer}>
      {/* typewriter effect box */}
      <div id="liveTextContainer" className={styles.liveTextContainer}>
        <p  ref={liveTextRef}>
          {
            switchCounter == 0 ? lineArray[0] : switchCounter == 1 ? lineArray[1] : switchCounter == 2 ? lineArray[2] : ''
          }
        </p>;
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
      <BiSolidChevronDown className={styles.chevron}/>
    </div>
  )
}
