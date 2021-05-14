import React from 'react'

import fondo from './fondo.png';

import './targeta.css'
const targeta = () => {
    return (
        <div className="containerTarj">
            <div className="cardTarj">
                <div className="imgBxTarj">
                        <img src={fondo} className="imgTarj" alt="fondo"/>   
                </div>
                <div className="contentBxTarj">
                    <div className="contentTarj">
                        <h2 className="h2T">Historia</h2>
                        <p className="pT">La Unidad Educativa Naval "Hérores del Pacífico", 
                        fue creada mediante Acta de Fundación de la Armada Boliviana de 
                        fecha 25 de febrero de 2013 y por Resolución Administrativa de la 
                        Armada Boliviana Nº 025/2014 de fecha 16 de abril de 2014.

                        Mediante Resolución Administrativa Nº 785/2013 del 21 de noviembre de 2013, 
                        la Dirección Departamental de Educación aprueba la apertura y legal funcionamiento 
                        de la Unidad Educativa Privada Naval “Héroes del Pacífico”. Cuenta con Resolución de 
                        Directorio Nro. 04/2014 de Aprobación del Estatuto Orgánico.
                         Se desarrolla tributariamente con Número de Identificación 
                         Tributaria 280208025 emitida por el Servicio de Impuestos Internos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default targeta
