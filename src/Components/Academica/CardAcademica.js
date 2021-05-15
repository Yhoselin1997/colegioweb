import React from 'react'

import './CardAcademica.css'
const CardAcademica = ({title, image, content}) => {
    return (
        <div className="containerAC">
        <div className="cardAC ">
            <input type="checkbox" name="" />
            <div className="toggleAC">+</div>
            <div className="imgBxAC">
                <img src={image} alt={image} className="imgAC"/>
            </div>
            <div className="detailsAC">
                <h2 className="h2AC">{title}</h2>
                <p className="pAC">{content}</p>
            </div>
        </div> 
        </div>
    )
}

export default CardAcademica
