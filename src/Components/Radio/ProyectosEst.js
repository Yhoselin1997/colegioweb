import React from 'react';

import radio from '../../img/radio.jpg'
import './ProyectoEst.css'

const ProyectosEst = () => {
    return(
        <>
            <div className="containerRadio">
                <div className="cardRadio">
                    <div className="imgBxRadio">
                        <img src={radio} className="imgRadio"/>
                         <audio controls className="audioRadio">
                             <source src="http://stream.zeno.fm/qrx70mamvbruv" type="audio/ogg"></source>
                         </audio>
                    </div>
                    
                    <div className="contentBxRadio">
                        <div className="contentRadio">
                            <h2 className="titleRadio">RADIO REVIVE</h2>
                            <p className="textRadio"></p>
                            <a href="https://www.facebook.com/RadioRevive3" className="refRadio">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectosEst;