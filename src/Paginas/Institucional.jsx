import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';

import Layout from '../Components/Layout';

import './Mision.css'
import './Vision.css'

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
      <div className="justify-content-md-center containerMision" responsive>
        <div className="boxMision" responsive>
          <div className="textMision" responsive>
            <div className="contentMision" responsive>
              <h3 className="tituloMision" ref={misionRef}>Misión</h3>
              <p className="textoM">Ser la Unidad Educativa de mayor presencia a nivel nacional,
              Educar a estudiantes de los niveles inicial,
              primaria y secundaria con una enseñanza–aprendizaje
              que promueva el respeto a la diversidad cultural,
              que consolide los valores éticos y morales,
              desarrollando creatividad, pensamiento crítico y reflexivo,
              concientizado en las capacidades de los espacios acuáticos
              a fin de contribuir con bachilleres capacitados para iniciar
              una educación superior y aportar a la transformación de la sociedad y
              engrandecimiento del Estado con una actitud científica, técnica-tecnológica,
              productiva y artística.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerVision">
        <div className="boxVision">
          <div className="textVision">
            <div className="contentVision">
              <h2 className="tituloVision" ref={visionRef}>Vision</h2>
              <p className="textoV">Ser la Unidad Educativa de mayor presencia a nivel nacional,
              con prestigio internacional y oferta académica en diversas
              áreas del conocimiento, para el engrandecimiento de nuestra querida Bolivia.
                </p>
            </div>
          </div>
        </div>
      </div>

      <h1 ref={historiaRef}>Historia</h1>
      <p>
        La Armada Boliviana en cumplimiento de su misión Constitucional y en su calidad de
        Abanderada de la Reivindicación Marítima, cumple con el propósito de cultivar y
        mantener latente la conciencia marítima en la niñez y juventud.

        Desde el año 2014 se creó la Unidad Educativa Naval "Héroes del Pacifico",
        para así participar activamente del desarrollo nacional a través de la educación.

        Por esto se designó un equipo de miembros de la Armada Boliviana,
        conocedores de la educación y de su administración, para iniciar
        actividades el año 2014 enmarcando sus actividades en la
        ley 070 Avelino Siñani y Elizardo Pérez, sobre la base de la Resolución
        administrativa de la Armada Boliviana 025/2014

        Las actividades escolares tienen un carisma particular debido a que los niños,
        niñas, señoritas y jóvenes estudiantes son cultivados en la conciencia.
            </p>

      <h1 ref={autoridadesRef}>Autoridades</h1>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>

      <h1 ref={politicaInstRef}>Politica inst</h1>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
    </Layout>
  )
}

export default Institucional;