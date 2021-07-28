import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineMail } from 'react-icons/ai'

import logo from './logo.png'

import './Footer.css'
const Footer = () => {
  return (
    <div className="footer pt-3 mt-3">
      <Container>
        <footer>
          <div className="containerF">
            <div className="sec">
              <h4 className="h2F">UENHP</h4>
              <img src={logo} className="logoFooter" alt="logo" />
              <p className="pF"> UNIDAD EDUCATIVA NAVAL <br/> "HÉROES DEL PACÍFICO"</p>
              <ul className="sci">
                <li className="Lisci">
                  <a className="aH" href="https://www.facebook.com/Unidad-Educativa-Naval-h%C3%A9roes-Del-Pac%C3%ADfico-101976272112453"><FaFacebookF /></a>
                </li>
                <li className="Lisci">
                  <a className="aH" href="https://twitter.com/UnidadNaval"><AiOutlineTwitter /></a>
                </li>
                <li className="Lisci">
                  <a className="aH" href="https://www.instagram.com/uenhdp.edu.bo/?hl=es-la"><FiInstagram /></a>
                </li>
                <li className="Lisci">
                  <a className="aH" href="https://www.youtube.com/channel/UCjnG-3JqkEWxFbOLx9kqMUQ/featured"><AiFillYoutube /></a>
                </li>
              </ul>
            </div>
            <div className="sec contact">
              <h4 className="h3F">CONTACTOS</h4>
              <ul className="info">
                <li className="LiCn">
                  <AiFillPhone /><br />
                  <span></span>
                    <a className="aCn" href="tel:+59122281821" >Secretaría general: (Telf./Fax) 2281821</a><br />
                    <a className="aCn" href="tel:+59122284346" > Secretaría académica: Telf. 2284346 </a>
                </li>
                <li className="LiCn">
                  <AiOutlineMail />
                  <p className="pF" ><a className="aCn" href="/" >Correo: heroesdelpacifico@uenaval.edu.bo</a></p>
                </li>
              </ul>
            </div>
            <div className="sec location">
              <h4 className="h4F">NUESTRA DIRECCIÓN</h4>
              <ul>
                <li className="LiLc"><GrLocation />
                  <span className="spanF">
                  Av. Ismael Montes Calle Vicenta J. Eguino Nro 400 Zona Central.
                  Lado terminal de buses
                  La Paz-Bolivia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Container>
      <div className="copyrightText">
        <p>Todos los derechos están reservados desarrollado por © UENHP</p>
      </div>
    </div>
  )
}

export default Footer
