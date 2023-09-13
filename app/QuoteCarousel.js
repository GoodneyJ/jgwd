'use client'

import { React, useEffect, useState, useRef} from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination} from 'swiper/modules';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './styles/quoteCarousel.module.css'

export default function QuoteCarousel() {
  const swiperRef = useRef(null);
  useEffect(() => {

    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      //add this
      injectStyles: [        `
            .swiper-button-next,
            .swiper-button-prev {
              background-color: white;
              background-position: center;
              background-size: 40px;
              background-repeat: no-repeat;
              padding: 8px 16px;
              border-radius: 100%;
              border: 2px solid black;
              color: red;
            }
  
            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: "";
            }
  
            .swiper-pagination-bullet{
              width: 40px;
              height: 40px;
              background-color: #cea616;
  
              
            }
        `],


    }

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [])



  

  return (
    <div className={styles.quoteContainer}>
        <Swiper className={styles.quoteWrapper} ref={swiperRef} init="ft" pagination={true} modules={Pagination}>
          <SwiperSlide>Slide 1</SwiperSlide>            
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>

        </Swiper>

        

        <div className={styles.quoteButtonRow}>
          <div className={styles.quoteButtonPrev}><BiSolidChevronLeft /></div>
          <div className={styles.quoteButtonNext}><BiSolidChevronRight /></div>
        </div>

        <div className={styles.quotePagination}></div>
    </div>
  )
}
