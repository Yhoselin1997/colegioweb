import React from 'react';

import Layout from '../Components/Layout';
import CardAcademica from '../Components/Academica/CardAcademica'

import evento from '../img/Evento.png'
const Academica = () => {
    return(
        <Layout>
            <h2 className="">ACADEMICO</h2>
            <div className="row">
            <CardAcademica
                title='1er CICLO DE VIDEOCONFERENCIAS'
                image={evento}
                content='AFRONTAMIENTO SOCIOEDUCATIVO PARA FAMILIAS DE PANDEMIA'
                />
                <CardAcademica
                title='1er CICLO DE VIDEOCONFERENCIAS'
                image={evento}
                content='AFRONTAMIENTO SOCIOEDUCATIVO PARA FAMILIAS DE PANDEMIA'
                 />
            </div>
        </Layout>
    )
}

export default Academica;