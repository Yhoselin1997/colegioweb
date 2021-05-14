import React from 'react';

import Layout from '../Components/Layout';
import CardAcademica from '../Components/Academica/CardAcademica'

import logo from '../img/logo.png'
const Academica = () => {
    return(
        <Layout>
            <div> 
                <h2>academico</h2>
                <CardAcademica
                title='hola'
                image={logo}
                content='aaa'
                />
                <CardAcademica
                title='hola'
                image={logo}
                content='aaa'
                />
            </div>
        </Layout>
    )
}

export default Academica;