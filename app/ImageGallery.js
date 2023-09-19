import React from 'react'

import ImageIcon from './ImageIcon'

import styles from './styles/imageGallery.module.css'

export default function ImageGallery() {
  return (
    <div id="GALLERY" className={styles.imageGallery}>
        <div className={styles.galleryRow}>
            <ImageIcon backgroundImage="Screenshot_1.png"/>
            <ImageIcon backgroundImage="Screenshot_3.png"/>
            
        </div>
        

        <div className={styles.galleryRow}>
            <ImageIcon backgroundImage="Screenshot_2.png"/>
            <ImageIcon backgroundImage="Screenshot_1.png"/>
        </div>
    </div>
  )
}
