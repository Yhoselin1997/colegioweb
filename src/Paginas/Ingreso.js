import React from 'react';

import a from'./Ingreso.module.css'
import Layout from '../Components/Layout';

const Ingreso = () => {
    return(
        <Layout>
            <div className={a.imageContainer}>
                <span className={a.titleContainer}>No hay contenido por el momento</span>
            </div>
        </Layout>
    )
}

export default Ingreso;