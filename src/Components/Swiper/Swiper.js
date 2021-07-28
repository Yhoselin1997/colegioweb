
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./Swiper.css";
import img1 from '../../img/uen/sw1.png'
import img2 from '../../img/uen/sw2.jpeg'
import img3 from '../../img/uen/sw3.jpeg'
import img4 from '../../img/uen/sw4.png'

import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function swiper() {
  
  return (
    <>
    <Swiper 
    spaceBetween={30} 
    centeredSlides={true} 
    autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }}  
    className="mySwiper">
     <SwiperSlide>
     <img className="img" src={img1} alt={img4} />
    </SwiperSlide>
    <SwiperSlide>
    <img className="img" src={img2} alt={img4}/>
    </SwiperSlide>
    <SwiperSlide>
    <img className="img" src={img3} alt={img4}/>
    </SwiperSlide>
    <SwiperSlide>
    <img className="img" src={img4} alt={img4}/>
    </SwiperSlide>
    </Swiper>
    </>
  )
}