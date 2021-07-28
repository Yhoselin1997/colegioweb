import React, {useState, useEffect} from 'react'

import Layout from '../Components/Layout'
import './Actividades.css'
import ac from './Social.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
const Social = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/Actividades/Social.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Layout>
            <div className="imageContainer">
                <span className="titleContainer">Nuestras Actividades</span>
            </div>
            <div>
                     {loading && (
                        <p>Cargando</p>
                     )}
                     {items.map((item, i) => (
                        <div
                        key={i}
                        >
                            <div className={ac.container}>
                            <div className={ac.imgBx}>
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
                            <div className={ac.conten}>
                                    <h2 className={ac.titleCS}>{item.title}</h2>
                                    <p className={ac.textoCS}>{item.content}</p>
                                </div>
                            </div>
                        </div>   
                        </div>
                    ))}         
                </div>
        </Layout>
    )
}

export default Social