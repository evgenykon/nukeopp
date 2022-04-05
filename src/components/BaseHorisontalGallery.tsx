import React, { useEffect, useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

interface BaseHorisontalGalleryProps {
  slideNum: number
}

export default (props: BaseHorisontalGalleryProps) => {
  
  const updateSwiper = (swiper) => {
    useState({ swiper });
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={3}
      direction={"horizontal"}
      onSwiper={(swiper) => swiper.slideTo(2, 200)}
      onSlideChange={() => console.log('slide change')}
      onScroll={(swiper) => console.log('scroll', swiper)}
    >
      <SwiperSlide><div className='slide'>Slide A</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide B</div></SwiperSlide>
      <SwiperSlide><div className='slide'>slide #{props.slideNum}</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className='slide'>Slide 1</div></SwiperSlide>
    </Swiper>
  );
};