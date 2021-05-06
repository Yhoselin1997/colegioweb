import React from 'react'
import './Niveles.css'
import inicial from './inicial.jpg'
import primaria from './primaria.jpeg'
import secundaria from './secundaria.jpeg'

const Niveles = () => {
    return (
        <div className="body2">
        <div className="container2">
            <div className="card2">
                <div className="imgBx2">
                    <img src={inicial} alt='imagen'></img>
                </div>  
                <div className="content2">
                    <h2 >NIVEL INICIAL</h2>
                </div>   
            </div>
            <div className="card2">
                <div className="imgBx2">
                    <img src={primaria} alt='imagen'></img>
                </div>  
                <div className="content2">
                    <h3>NIVEL PRIMARIA</h3>
                </div>   
            </div>
            <div className="card2">
                <div className="imgBx2">
                    <img src={secundaria} alt='imagen'></img>
                </div>  
                <div className="content2">
                    <h4>NIVEL SECUNDARIA</h4>
                </div>   
            </div>
        </div>
        
        </div>
    )
}
 
export default Niveles
