import React from 'react'
import './Niveles.css'
import inicial from './inicial.jpg'
import primaria from './primaria.jpeg'
import secundaria from './secundaria.jpeg'

const Niveles = () => {
    return (
        <div>
            <h2 className="tituloNiv">NIVELES EDUCATIVOS</h2><br/><br/>
        <div className="body2">
        <div className="container2">
            <div className="card2">
                <div className="imgBx2">
                    <img src={inicial} alt='imagen' className="imgNiv"></img>
                </div>  
                <div className="content2">
                    <h3>NIVEL INICIAL</h3>
                </div>   
            </div>
            <div className="card2">
                <div className="imgBx2">
                    <img src={primaria} alt='imagen' className="imgNiv"></img>
                </div>  
                <div className="content2">
                    <h3>NIVEL PRIMARIA</h3>
                </div>   
            </div>
            <div className="card2">
                <div className="imgBx2">
                    <img src={secundaria} alt='imagen' className="imgNiv"></img>
                </div>  
                <div className="content2">
                    <h3>NIVEL SECUNDARIA</h3>
                </div>   
            </div>
        </div>
        
        </div>
        </div>
    )
}
 
export default Niveles
