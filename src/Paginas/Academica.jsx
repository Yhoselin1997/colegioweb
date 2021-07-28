import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import './Actividades.css'
import ac from './Academica.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Keyboard, Autoplay, EffectCoverflow, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Keyboard, Navigation, Autoplay, EffectCoverflow, Pagination]);

const Academica = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/Actividades/Academica.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Layout>
            <div className={ac.imageContainer}>
                <span className={ac.titleContainer}>Nuestras Actividades</span>
            </div>
            <div>
                <div className={ac.ContainerLoader}>
                    {loading && (
                        <div className={ac.loader}>
                            <span className={ac.span1}></span>
                            <span className={ac.span2}></span>
                            <span className={ac.span3}></span>
                            <span className={ac.span4}></span>
                        </div>
                    )}
                             {items.map((item, i) => (
                    <div
                        key={i}
                    >
                        <div className={ac.container}>
                            <div className={ac.imgBx}>
                                <div className={ac.conten}>
                                    <h2 className={ac.titleCS}>{item.title}</h2>
                                    <p className={ac.textoCS}>{item.content}</p>
                                </div>
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
                                    className={ac.mySwiper}>
                                    {loading && (
                                        <p>Cargando</p>
                                    )}
                                    {item.videos.map((video, i) => (
                                        <SwiperSlide key={i}>
                                            <iframe
                                                className={ac.video}
                                                src={video.url}
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={ac.detailsCS}>
                                <img className={ac.imgCS} src={`/imagenes/Academica/${item.img}`} alt={`/imagenes/Academica/${item.img}`} />
                                <a className={ac.aCS} href={`/documentos/${item.documento}`} target="_blank" rel="noreferrer">
                                    ver documento
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </Layout>
    )
}

export default Academica
