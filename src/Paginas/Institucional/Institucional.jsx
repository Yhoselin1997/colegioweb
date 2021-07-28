import React, {useEffect, useRef} from 'react';
import { Container } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import Layout from '../../Components/Layout';

import c from './Institucional.module.css'

const Institucional = () => {
  const {section} = useParams();
  const misionRef = useRef(null);
  const visionRef = useRef(null);
  const historiaRef = useRef(null);
  const autoridadesRef = useRef(null);
  const politicaInstRef = useRef(null);

  useEffect(() => {
    const sections = {
      mision: misionRef,
      vision: visionRef,
      historia: historiaRef,
      autoridades: autoridadesRef,
      politicaInst: politicaInstRef
    }
    if (sections[section]) {
      sections[section].current.scrollIntoView()
      window.scrollBy(0, -85)
    }
  }, [section])
  return (
    <Layout>
      <div className={c.imageContainer}>
        <span className={c.titleContainer}>CONOCE NUESTRA INSTITUCIÓN</span>
      </div>
      <div>   
            <div className={c.contentBlue}>
              <Container>
                <h1 className={c.titleBlue} ref={misionRef}>Misión</h1><br/>
                <p className={c.textBlue}>Ser la Unidad Educativa de mayor presencia a nivel nacional,
                Educar a estudiantes de los niveles inicial,
                primaria y secundaria con una enseñanza aprendizaje
                que promueva el respeto a la diversidad cultural,
                que consolide los valores éticos y morales,
                desarrollando creatividad, pensamiento crítico y reflexivo,
                concientizado en las capacidades de los espacios acuáticos
                a fin de contribuir con bachilleres capacitados para iniciar
                una educación superior y aportar a la transformación de la sociedad y
                engrandecimiento del Estado con una actitud científica, técnica-tecnológica,
                productiva y artística.
                </p>
              </Container>
            </div>
             
            <div className={c.contentWhite}>
              <Container>
                <h1 className={c.titleWhite} ref={visionRef}>Visión</h1><br/>
                <p className={c.textWhite}>Ser la Unidad Educativa de mayor presencia a nivel nacional,
                con prestigio internacional y oferta académica en diversas
                áreas del conocimiento, para el engrandecimiento de nuestra querida Bolivia.
                </p>
              </Container>
            </div>
        
            <div className={c.contentBlue}>
              <Container>
                <h1 className={c.titleBlue} ref={historiaRef}>Historia</h1><br/>
                  <p className={c.textBlue}>
                  El año de 1975, la entonces Fuerza Naval Boliviana, realizó un estudio 
                  de localización y ubicación para la Escuela Naval Militar, existiendo 
                  diferentes ideas y sugerencias. Finalmente el 23 de abril de 1976, se efectuó 
                  el traslado de los Cadetes de la Fuerza Naval Boliviana, 
                  al mando del Cap. Frag. Tomás Orozco Saracho, a las instalaciones de la 
                  Ex Estación de Ferrocarriles La Paz-Guaqui, después de que el Ministerio de 
                  Educación y el Ministerio de Transportes y Comunicaciones, por parte del Estado, 
                  tomarán la decisión de ceder mencionados predios a la Fuerza Naval Boliviana 
                  mediante Decreto Supremo N° 16299 de fecha 22 de marzo de 1979. El 31 de enero de 2002, 
                  se promulga Ley Nº 2324, la misma que otorga la propiedad del 
                  inmueble y terrenos de la Ex Estación de Ferrocarriles 
                  La Paz-Guaqui a la Escuela Naval Militar, con el único artículo que señala: 
                  “Elevase a Rango de Ley el Decreto Supremo Nº 16299 de 22 de marzo de 1979, 
                  que autoriza la transferencia, a título gratuito, un terreno municipal 
                  con una superficie de 26.791 metros cuadrados, ubicado dentro de la Ex Estación 
                  Ferroviaria La Paz–Guaqui de esta ciudad, a favor de la Fuerza Naval Boliviana, 
                  para la instalación y funcionamiento de la Escuela Naval Militar, dispuesta mediante 
                  Resolución Municipal Nº 1216 de 20 de junio de 1979” y posteriormente el 14 de marzo de 2002, 
                  el Presidente de la Honorable Cámara de Senadores de ese entonces Dr. Enrique Toro Tejada, 
                  a nombre del Honorable Congreso Nacional, realizó la entrega oficial de la mencionada Ley. 
                  En la gestión 2013, la actual Armada Boliviana en cumplimiento de su misión constitucional, 
                  con el propósito de cultivar y mantener latente la conciencia marítima en la niñez y juventud, 
                  inicia los trámites legales, mediante las instancias pertinentes para que los predios de la 
                  Ex Escuela Naval Militar, puedan ser ocupados para la apertura de una Unidad Educativa,
                  enmarcando en la Ley N° 070 Avelino Siñani y Elizardo Pérez y el Subsistema de Educación Regular;
                  sobre la base de la Resolución Administrativa Nº 785/2013 del 21 de noviembre del 2013 emitida 
                  por la Dirección Departamental de Educación La Paz y la Resolución Administrativa de la 
                  Armada Boliviana 025/2014, se aprueba la apertura y legal funcionamiento de la
                  UNIDAD EDUCATIVA PRIVADA NAVAL “HÉROES DEL PACÍFICO”, dando inicio a las actividades educativas
                  en los niveles de Educación Inicial, Primaria y Secundaria, para así participar activamente 
                  en el desarrollo de la Educación Nacional.
                  </p>
                </Container>
            </div>
            <div className={c.contentWhite}>
              <Container>
                <h1 className={c.titleWhite} ref={autoridadesRef}>Autoridades</h1>
                <div>
                  <h3 className={c.subTitle}>JEFE DPTO. VI-ENS. E II.NN. DEL EMGAB</h3>
                  <p className={c.subTitleContent}>CN. DAEN. Julio Cesar Gamboa Vargas</p>
                  <h3 className={c.subTitle}> DIRECTOR GENERAL DE LA UENHP</h3>
                  <p className={c.subTitleContent}>CN. DAEN. José Ángel Carrasco Carrasco</p>
                </div>
                  <h3 className={c.subTitle}>DIRECTORES ACADEMICOS</h3>
                  <p className={c.subTitleContent}>Lic. Erika Inés Loaiza Cáceres</p>
                  <p className={c.subTitleContent}>Lic. Saniel Paco Chuquimia</p>
                  <p className={c.subTitleContent}>Lic. Raul Silvestre Butrón</p>
                <div>
                </div>
              </Container>
            </div>
            <div className={c.contentBlue}>
            <Container>
            
            </Container>
            </div>
      </div>
    </Layout>
  )
}

export default Institucional;