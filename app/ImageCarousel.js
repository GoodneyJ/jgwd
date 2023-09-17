'use client'
import React from 'react'
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './styles/imgCarousel.module.css'

export default function ImageCarousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={`auto`}
      navigation = {{
        nextEl: styles.swiperBtnNext,
        prevEl: styles.swiperBtnPrev
      }}
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={styles.imageContainer}
    >
        <SwiperSlide className={styles.imageSlide}>
          <Image src='/vgsGif.gif' layout='fill' objectFit='cover'/>
        </SwiperSlide>
        <SwiperSlide className={styles.imageSlide}>
          <Image src='/cchiGif.webp' layout='fill' objectFit='cover'/>
        </SwiperSlide>
        <SwiperSlide className={styles.imageSlide}>
          <Image src='/carGif.gif' layout='fill' objectFit='cover'/>
        </SwiperSlide>
        <SwiperSlide className={styles.imageSlide}>
          <Image src='/restGif.gif' layout='fill' objectFit='cover'/>
        </SwiperSlide>

    </Swiper>
  )
}
