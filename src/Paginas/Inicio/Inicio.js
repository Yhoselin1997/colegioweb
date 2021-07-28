import React from 'react';

import Cards from '../../Components/Cards/Cards'
import Niveles from '../../Components/Niveles/Niveles'
import Layout from '../../Components/Layout'
import Targeta from '../../Components/Targeta/targeta'
import SectionVideos from '../../Components/SectionVideos/SectionVideos'
import ProyctoEst from '../../Components/Radio/ProyectosEst'
import Noticias  from '../Noticias/Noticias'

import {Container} from 'react-bootstrap';

import In from './Inicio.module.css';
const Inicio = () => {
  return (
    <Layout withSlider>
        <Cards />
        <Container>
        <Targeta/>  
        </Container>
        <h2 className={In.titleNiv}>NIVELES DE EDUCACIÓN</h2>
        <Niveles/>
        <Container>
          <ProyctoEst/>
        </Container>
        <Container>
          <div className={In.actividades}>
          <h2 className={In.titleN}>ACTIVIDADES</h2>
          <SectionVideos/>
          </div>
        </Container>
          <h2 className={In.titleN}>NOTICIAS</h2>
          <Noticias/>
        <div>
          <h2 className={In.titleN}>NUESTRA UBICACIÓN</h2>
          <iframe
          className={In.maps} 
          title="ubicacion" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30602.869430543422!2d-68.16654008402188!3d-16.507980171098225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21ff55479127%3A0xae375db80d5c539b!2sUnidad%20educativa%20naval%20HEROES%20DEL%20PACIFICO!5e0!3m2!1ses!2sbo!4v1620156366837!5m2!1ses!2sbo" 
          allowFullScreen="" 
          loading="lazy"></iframe>
        </div>
    </Layout>
  )
}

export default Inicio;