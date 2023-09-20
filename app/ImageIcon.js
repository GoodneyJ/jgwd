import React from 'react'

import styles from './styles/imageGallery.module.css'


export default function ImageIcon(props) {


    const varStyles = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'

    }
    

  return (
    <div id={props.id} style={varStyles} className={`${styles.iconContainer} inlineContainer`} onClick={props.onClick}>

    </div>
  )
}
