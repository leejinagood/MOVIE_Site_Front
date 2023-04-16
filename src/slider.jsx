import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import imgSuzume from './suzume.png';
import imgMirror from './mirror.jpg';

SwiperCore.use([Navigation]);

const Slider = () => {
  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="slider">
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide className="ss1">
          <div className="swiper-container">
            <div className="row">
            <img src={imgSuzume} style={{ width: '100%', height: '720px' }}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ss2">
        <div className="swiper-container">
            <div className="row">
            <img src={imgMirror} style={{ width: '100%', height: '720px' }}/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev" onClick={handlePrevClick}></div>
      <div className="swiper-button-next" onClick={handleNextClick}></div>
    </div>
  );
};

export default Slider;