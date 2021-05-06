import React from 'react';
import { Parallax } from 'react-parallax'

import Card from '../Components/Cards/Card'
import Niveles from '../Components/Niveles/Niveles'
import Layout from '../Components/Layout';

import fondo from '../img/fondo.png'
import './Inicio.css'

const Inicio = () => {
  return (
    <Layout withSlider>
      <div className="Inicio">
        <Card />
        <section className="section">
          <div className="box">
            <h1 className="titulo">HISTORIA ESCUELA NAVAL HEROES DEL PACIFICO</h1>
            <div className="container1">
              <Parallax bgImage={fondo} className="imgBx1" strength={100} >
              </Parallax>
              <div className="content1">
                <p className="texto"> La Unidad Educativa Naval "Hérores del Pacífico",
                fue creada mediante Acta de Fundación de la Armada Boliviana
                de fecha 25 de febrero de 2013 y por Resolución Administrativa
                de la Armada Boliviana Nº 025/2014 de fecha 16 de abril de 2014.
                Mediante Resolución Administrativa Nº 785/2013 del 21 de noviembre de 2013,
                la Dirección Departamental de Educación aprueba la apertura y legal
                funcionamiento de la Unidad Educativa Privada Naval “Héroes del Pacífico”.
                Cuenta con Resolución de Directorio Nro. 04/2014 de Aprobación del Estatuto Orgánico.
                Se desarrolla tributariamente con Número de Identificación
                              Tributaria 280208025 emitida por el Servicio de Impuestos Internos.</p>
              </div>
            </div>
          </div>
        </section>
        <Niveles />
        <div className="maps">
          <iframe title="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30602.869430543422!2d-68.16654008402188!3d-16.507980171098225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21ff55479127%3A0xae375db80d5c539b!2sUnidad%20educativa%20naval%20HEROES%20DEL%20PACIFICO!5e0!3m2!1ses!2sbo!4v1620156366837!5m2!1ses!2sbo" style={{ display: 'flex', border: '10px ridge #e3e3e3' }} width="1010" height="300" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Inicio;