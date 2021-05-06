import React from 'react'
// import './Card.css'
import logo from './logo.png'
import { NavLink } from 'react-router-dom';
import escuela from './escuela.png'
import logoArmada from './logo_armada.png'

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="imgBox">
            <img src={logo} className="logoUEN"></img>
            <h2 className="tamanio">COMUNICADOS</h2>
          </div>
          <div className="content">
            <div className="size">
              <a href="#" className="a"> Ver </a>
            </div>
          </div>
        </div>
        <div className="cardC2">
          <div className="imgBoxC2">
            <img src={logo} className="logoUEN"></img>
            <h2 className="letra">UEN</h2>
          </div>
          <div className="contentC2">
            <div className="sizeC2">
              <a href="#" className="a1"> Ver </a>
            </div>
          </div>
        </div>
        <div className="cardC3">
          <div className="imgBoxC3">
            <img src={logo} className="logoUEN"></img>
            <h2 className="tamanio top">CONVOCATORIAS</h2>
          </div>
          <div className="contentC3">
            <div className="sizeC3">
              <a href="#" className="a2"> Ver </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
