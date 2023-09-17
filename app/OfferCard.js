import React from 'react'

import styles from '../app/styles/offerCard.module.css'



export default function OfferCard(props) {
  return (
    <div className={styles.cardContainer}>
        {props.icon}
        <div className={styles.cardInfo}>
            <h4 className={styles.cardTitle}>{props.title}</h4>
            <hr></hr>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet concateur un ricko La trube traviata non troppo bootstrap responsive themes. website design website templates.</p>
        </div>
    </div>
  )
}
