import {React, useRef, useEf, useEffect} from 'react'
import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'
import styles from './styles/imageModal.module.css'

export default function ImageModal(props) {
    const modalRef = useRef();
    
    useEffect(() => {
       const modalElement = modalRef.current;

       if(props.visible) {
        modalElement.classList.add('fadeSlide')
        modalElement.style.visibility = 'visible';
       }
    }, [])

    const inlineStyles = {
        backgroundImage: `url(${props.selector})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }   

  return (
    <div className={styles.modalWrapper} onClick={props.onClick} ref={modalRef}>
        <div className={styles.imageModal} style={inlineStyles}>
        <video fill src={props.selector} controls />

           <GrFormClose className={styles.closeImageModal} style={{color: 'white'}}/>
        </div>
    </div>
  )
}
