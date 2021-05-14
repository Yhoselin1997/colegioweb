import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'

import './Slider.css'

const Slider = () => {
    return (
        <div className="carrusel">
        <Carousel fade className="carrusel w-100" expand="lg">
            <Carousel.Item>
                <img
                className=" d-block w-100 carrusel"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit hibero</p>
                </Carousel.Caption>
            </Carousel.Item>  
            <Carousel.Item>
                <img
                className="d-block w-100 carrusel"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit hibero</p>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100 carrusel"
                src={slide3}
                alt="thirty slide"
                />
                <Carousel.Caption>
                    <h3>Tirthy slide label</h3>
                    <p>Nulla vitae elit hibero</p>
                </Carousel.Caption>
            </Carousel.Item>  
        </Carousel>
        </div>
    )
}

export default Slider
