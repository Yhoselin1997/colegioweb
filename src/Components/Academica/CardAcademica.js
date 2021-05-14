import React from 'react'

import './CardAcademica.css'
const CardAcademica = ({title, image, content}) => {
    return (
        <div className="containerCA">
            <div className="boxCA">
                <div className="imgBxCA">
                    <img src={image} className="imgCA"/>
                </div>
                <div className="contentCA">

                </div>
            </div>
        </div>  
    )
}

export default CardAcademica
