import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from './logo.png'
import Comunicados from './Comunicados.png'
import Convocatoria from './Convocatoria.png'

import car from'./Card.module.css'

const Cards = () => {
  return (
    <div className={car.containerCard}>
      <div className={car.cardC1}>
        <div className={car.imgBoxC1}>
          <img src={Comunicados} className={car.imgC1} alt="logo"></img>
          <h2 className={car.tamanio}>COMUNICADOS</h2>
        </div>
        <div className={car.contentC1}>
          <div className={car.sizeC1}>
            <NavLink className={car.a0} to="/comunicados">
              Ver
            </NavLink>
          </div>
        </div>
      </div>
      <div className={car.cardC2}>
        <img src={logo} className={car.logo} alt="logoArmada" />
      </div>
      <div className={car.cardC3}>
        <div className={car.imgBoxC3}>
          <img src={Convocatoria} className={car.logoUEN} alt="logoArmada" />
          <h2 className={car.top}>CONVOCATORIAS</h2><br />
        </div>
        <div className={car.contentC3}>
          <div className={car.sizeC3}>
            <NavLink className={car.a2} to="/convocatorias">
              Ver
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
