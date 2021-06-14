import React from 'react'
import ni from './Niveles.module.css'
import inicial from './inicial.jpg'
import primaria from './primaria.jpeg'
import secundaria from './secundaria.jpeg'
import { Container } from 'react-bootstrap'

const Niveles = () => {
    return (
        <Container>
        <div className={ni.container}>
            <div className={ni.box}>
                <div className={ni.imgBx}>
                    <img className={ni.image} src={inicial}/>
                </div>
                <div className={ni.content}>
                    <div>
                        <h2 className={ni.title}>NIVEL: INICIAL</h2>
                    </div>
                </div>
            </div>
            <div className={ni.box}>
                <div className={ni.imgBx}>
                    <img className={ni.image} src={primaria}/>
                </div>
                <div className={ni.content}>
                    <div>
                        <h2 className={ni.title}>NIVEL: PRIMARIA</h2>
                    </div>
                </div>
            </div>
            <div className={ni.box}>
                <div className={ni.imgBx}>
                    <img className={ni.image} src={secundaria}/>
                </div>
                <div className={ni.content}>
                    <div>
                        <h2 className={ni.title}>NIVEL: SECUNDARIA</h2>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}
 
export default Niveles
