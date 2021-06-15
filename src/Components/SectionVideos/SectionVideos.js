
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import sl from "./styles.module.css";

import SwiperCore, {
    Keyboard,Autoplay, EffectCoverflow,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Keyboard,Navigation,Autoplay,EffectCoverflow,Pagination]);


export default function SectionVideos() {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
  
    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/Video.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }
    
    const handleItemClick = (item) => () => {
        setSelectedItem(item)
    }
  
    useEffect(() => {
        getData()
    }, [])
  return (
    <>
    <Swiper 
    pagination={true}
    keyboard={{
        "enabled": true
      }} 
    loop={true} 
    effect={'coverflow'} 
    grabCursor={true} 
    centeredSlides={true} 
    slidesPerView={'auto'} 
    coverflowEffect={{
    "rotate": 20,
    "stretch": 0,
    "depth": 200,
    "modifier": 1,
    "slideShadows": true
    }} 
    className={sl.mySwiper}>
         <div>
          {loading && (
            <p>Cargando</p>
          )}
          {items.map((item, i) => (
          <div
            key={i}
            style={{cursor: 'pointer'}}
            onClick={handleItemClick(item)}
          >
        <SwiperSlide>
        <iframe
            className={sl.video}  
            src={item.url}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen/>
        </SwiperSlide>
      </div>
        ))}         
      </div>
      
    </Swiper>
    </>
    )
}