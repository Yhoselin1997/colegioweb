import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from './logo.png'
import logoArmada from './logo_armada.png'


import './Card.css'


const Cards = () => {
  return (
    <div className="containerCard">
      <div className="cardC1">
        <div className="imgBoxC1">
          <img src={logo} className="logoUEN imgC1" alt="logo"></img>
          <h2 className="tamanio">COMUNICADOS</h2>
        </div>
        <div className="contentC1">
          <div className="sizeC1">
            <NavLink className="a0" to="/comunicados">
              Ver
            </NavLink>
          </div>
        </div>
      </div>
      <div className="cardC2">
        <h2 className="tamanio texto">UEN</h2>
      </div>
      <div className="cardC3">
        <div className="imgBoxC3">
          <img src={logoArmada} className="logoUEN" alt="logoArmada" />
          <h2 className="tamanio top">CONVOCATORIAS</h2><br />
        </div>
        <div className="contentC3">
          <div className="sizeC3">
            <NavLink className="a2" to="/convocatorias">
                Ver
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
