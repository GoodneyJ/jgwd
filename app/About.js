import React from 'react'

import OfferCard from './OfferCard'

import styles from '../app/styles/about.module.css'

export default function About() {
  return (
    <div className={styles.aboutContainer}>

        {/* typewriter effect box */}
        <div className={styles.liveText}>

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