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
              <h4 className="h2F">UEN</h4>
              <img src={logo} className="logoFooter" alt="logo" />
              <p className="pF"> UNIDAD EDUCATIVA HEROES DEL PACIFICO</p>
              <ul className="sci">
                <li className="Lisci">
                  <a className="aH" href="#"><FaFacebookF /></a>
                </li>
                <li className="Lisci">
                  <a className="aH" href="#"><AiOutlineTwitter /></a>
                </li>
                <li className="Lisci">
                  <a className="aH" href="#"><FiInstagram /></a>
                </li>
                <li className="Lisci">
                  <a className="aH" href="#"><AiFillYoutube /></a>
                </li>
              </ul>
            </div>
            <div className="sec contact">
              <h4 className="h2F">CONTACTOS</h4>
              <ul className="info">
                <li className="LiCn">
                  <AiFillPhone /><br />
                  <span></span>
                    <a className="aCn" href="tel:+5912284346">Secretaria: Telf. 2284346</a><br />
                    <a className="aCn" href="tel:+5916245938">Primaria: Cel. 62453938</a><br />
                    <a className="aCn" href="tel:+59162310763">Secundaria: Cel. 62310763</a>
                </li>
                <li className="LiCn">
                  <AiOutlineMail />
                  <p className="pF" ><a className="aCn" href="heroesdelpacifico@uenaval.edu.bo">Correo: heroesdelpacifico@uenaval.edu.bo</a></p>
                </li>
              </ul>
            </div>
            <div className="sec location">
              <h4 className="h2F">PARA CONSULTAS</h4>
              <ul>
                <li className="LiLc"><GrLocation />
                  <span className="spanF">
                    Av. Ismael Montes Calle Vicenta J. Eguino Nro 400 Zona Centrat.<br />
                            Lado terminal de buses<br />
                            La paz-Bolivia
                            </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Container>
      <div className="copyrightText">
        <p>Todos los derechos estan reservados desarrollado por © UEN</p>
      </div>
    </div>
  )
}

export default Footer
