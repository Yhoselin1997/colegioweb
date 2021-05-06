import React from 'react';
import './Poup.css';
import logo from '../img/logo.png';
const Poup = () => {
    return(
        <div className="Popup">
            <div className="contentBoxP">
                <div className="close" ></div>
                <div className="imgBxP">
                    <img src={logo} className="imgP"></img>
                </div>
                <div className="contentP">
                    <h3 className="textoP">COMUNICADOS</h3>
                    <a className="aP" href="#"> Ver </a>
                </div>
            </div>
        </div>
    )
}

export default Poup;