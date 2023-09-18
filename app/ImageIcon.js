import React from 'react'

import styles from './styles/imageGallery.module.css'


export default function ImageIcon(props) {


    const varStyles = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover'
    }

  return (
    <div style={varStyles} className={`${styles.iconContainer} inlineContainer`}>

    </div>
  )
}
