import React from 'react'

import './Card.css'
const Card = ({title, image, content}) => {
    return (
        <div className="containerAC">
        <div className="cardAC ">
            <input type="checkbox" name="" />
            <div className="toggleAC">+</div>
            <div className="imgBxAC">
                <img src={image} alt={image} className="imgAC"/>
            </div>
            <div className="detailsAC">
                <h2 className="h2AC">{title}</h2><br/><br/>
                <p className="pAC">{content}</p>
            </div>
        </div> 
        </div>
    )
}

export default Card
