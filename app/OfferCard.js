import React from 'react'

import styles from '../app/styles/offerCard.module.css'



export default function OfferCard(props) {
  return (
    <div className={styles.cardContainer}>
        {props.icon}
        <div className={styles.cardInfo}>
            <h4 className={styles.cardTitle}>{props.title}</h4>
            <hr></hr>
            <p className={styles.cardText}>{props.cardText}</p>
        </div>
    </div>
  )
}
