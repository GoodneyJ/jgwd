import {React, useState, useRef, useEffect} from 'react'

import ImageIcon from './ImageIcon'
import ImageModal from './ImageModal'

import styles from './styles/imageGallery.module.css'

export default function ImageGallery() {

  const [toggleModal, setToggleModal] = useState(false);
  const [passDown, setPassDown] = useState();

  function handleClick(e) {
    setPassDown(e.target.id);
    setToggleModal(!toggleModal);
  }

  return (
    <div id="GALLERY" className={styles.imageGallery}>
        <div className={styles.galleryRow}>
            <ImageIcon id='/CCHI.png' backgroundImage="Screenshot_1.png" onClick={handleClick}/>
            <ImageIcon id='/Screenshot_3.png' backgroundImage="Screenshot_3.png" onClick={handleClick}/>
            
        </div>
        
        <div className={styles.galleryRow}>
            <ImageIcon id='/vgsGif.gif' backgroundImage="Screenshot_2.png" onClick={handleClick}/>
            <ImageIcon id='/Screenshot_1.png' backgroundImage="Screenshot_1.png" onClick={handleClick}/>
        </div>

        {toggleModal && <ImageModal onClick={handleClick} visible={toggleModal} selector={passDown}/>}
    </div>
  )
}
