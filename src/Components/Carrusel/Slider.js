import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'

import sl from './Slider.module.css'
const Slider = () => {
  return (
    <div className={sl.carrusel}>
      <Carousel fade>
        <Carousel.Item>
          <div className={sl.recolor}>
            <img className={sl.img} src={slide1} alt={slide1}/>
          </div>
          <Carousel.Caption>
            <h1 className={sl.titleCar}> UNIDAD EDUCATIVA NAVAL</h1>
            <h1 className={sl.titleCar}>"HÉROES DEL PACÍFICO"</h1>
            <p className={sl.Descrip}>Ciencia, honor y disciplina.</p>
            <p className={sl.Content}> Formando a los mejores estudiantes del país desde el año 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className={sl.recolor}>
            <img className={sl.img} src={slide2} alt={slide2}/>
          </div>
          <Carousel.Caption>
          <h1 className={sl.titleCar}> UNIDAD EDUCATIVA NAVAL</h1>
            <h1 className={sl.titleCar}>"HÉROES DEL PACÍFICO"</h1>
          <p className={sl.Descrip}>Ciencia, honor y disciplina.</p>
            <p className={sl.Content}> Formando a los mejores estudiantes del país desde el año 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className={sl.recolor}>
            <img className={sl.img} src={slide3} alt={slide3}/>
          </div>
          <Carousel.Caption>
          <h1 className={sl.titleCar}> UNIDAD EDUCATIVA NAVAL</h1>
            <h1 className={sl.titleCar}>"HÉROES DEL PACÍFICO"</h1>
          <p className={sl.Descrip}>Ciencia, honor y disciplina.</p>
            <p className={sl.Content}> Formando a los mejores estudiantes del país desde el año 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
