import React from 'react';

import Layout from '../Components/Layout';

import Container from 'react-bootstrap/Container'

import './Mision.css'

const Mision = () => {
  return (
    <Layout>
    <Container fluid> 
      <div className="justify-content-md-center containerMision" responsive>
        <div className="boxMision" responsive> 
          <div className="textMision" responsive>
            <div className="contentMision" responsive>      
            <h3 className="tituloMision">Misión</h3>
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
      </Container>
    </Layout>
  )
}

export default Mision;