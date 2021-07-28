import React from 'react';

import radio from '../../img/radio.jpg'
import './ProyectoEst.css'

const ProyectosEst = () => {
    return (
        <>
            <div className="containerRadio">
                <div className="cardRadio">
                    <div className="imgBxRadio">
                        <img src={radio} className="imgRadio" alt={radio} />
                        <audio controls className="audioRadio">
                            <source src="http://stream.zeno.fm/qrx70mamvbruv" type="audio/ogg"></source>
                        </audio>
                    </div>

                    <div className="contentBxRadio">
                        <div className="contentRadio">
                            <h2 className="titleRadio">RADIO NAVAL DIGITAL</h2>
                            <p className="textRadio">
                                Entramos a una nueva versión de RADIO TV educativa para estudiantes de la UE. Naval,
                                con ampliación a redes de interacción tecnológica, considerando objetivos a favor de
                                fortalecer las necesidades, habilidades, inquietudes y destrezas comunicativas de
                                nuestros estudiantes. Son niños, pre adolescentes y adolescentes que emprenden un nuevo
                                viaje con viento en popa en conquista de nuevos horizontes cargados de glorias intelectuales.
                                <br/>
                                Maestros, padres de familia y estudiantes todos están invitados a subir a bordo a esta 
                                nueva aventura educativa.
                            </p>
                            <a href="https://www.facebook.com/RadioRevive3" className="refRadio">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectosEst;