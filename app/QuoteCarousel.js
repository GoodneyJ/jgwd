'use client'
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './styles/quoteCarousel.module.css'

export default function QuoteCarousel() {



  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation = {{
        nextEl: styles.swiperBtnNext,
        prevEl: styles.swiperBtnPrev
      }}
      pagination={{ clickable: true }}
      className={styles.quoteContainer}
    >
        <SwiperSlide className={styles.quoteSlide}>
          
          <h4 className={styles.testimonialHeading}>Cost Care Health</h4>
          <p className={styles.testimonialText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repudiandae vero ullam explicabo, at tenetur nobis quos voluptates hic odio accusantium alias, libero accusamus. Rerum.</p>
        </SwiperSlide>
        <SwiperSlide className={styles.quoteSlide}>
          
          <h4 className={styles.testimonialHeading}>Business 2</h4>
          <p className={styles.testimonialText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repudiandae vero ullam explicabo, at tenetur nobis quos voluptates hic odio accusantium alias, libero accusamus. Rerum.</p>
        </SwiperSlide>
        <SwiperSlide className={styles.quoteSlide}>
          
          <h4 className={styles.testimonialHeading}>Business 3</h4>
          <p className={styles.testimonialText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repudiandae vero ullam explicabo, at tenetur nobis quos voluptates hic odio accusantium alias, libero accusamus. Rerum.</p>
        </SwiperSlide>
        <SwiperSlide className={styles.quoteSlide}>
          
          <h4 className={styles.testimonialHeading}>Business 4</h4>
          <p className={styles.testimonialText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis repudiandae vero ullam explicabo, at tenetur nobis quos voluptates hic odio accusantium alias, libero accusamus. Rerum.</p>
        </SwiperSlide>

    </Swiper>
  )
}
