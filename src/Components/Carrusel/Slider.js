import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'

import './Slider.css'
const Slider = () => {
  return (
    <div className="carrusel">
      <Carousel fade>
        <Carousel.Item>
          <div className="recolor">
            <img className="img" src={slide1}/>
          </div>
          <Carousel.Caption>
            <h1 className="titleCar"> UNIDAD EDUCATIVA NAVAL</h1>
            <h1 className="titleCar">"HÉROES DEL PACÍFICO"</h1>
            <p className="Descrip">Ciencia, honor y disciplina.</p>
            <p className="Content"> Formando a los mejores estudiantes del país desde el año 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="recolor">
            <img className="img" src={slide2}/>
          </div>
          <Carousel.Caption>
          <h1 className="titleCar"> UNIDAD EDUCATIVA NAVAL</h1>
            <h1 className="titleCar">"HÉROES DEL PACÍFICO"</h1>
          <p className="Descrip">Ciencia, honor y disciplina.</p>
            <p className="Content"> Formando a los mejores estudiantes del país desde el año 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="recolor">
            <img className="img" src={slide3}/>
          </div>
          <Carousel.Caption>
          <h1 className="titleCar"> UNIDAD EDUCATIVA NAVAL</h1>
            <h1 className="titleCar">"HÉROES DEL PACÍFICO"</h1>
          <p className="Descrip">Ciencia, honor y disciplina.</p>
            <p className="Content"> Formando a los mejores estudiantes del país desde el año 2014</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
