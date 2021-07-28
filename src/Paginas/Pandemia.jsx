import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import { Container, Row } from 'react-bootstrap';
import bs from './BoyScout.module.css'
import logo from '../img/LOGO GSNAMGS.jpg'
import { SRLWrapper } from 'simple-react-lightbox';


const Pandemia = () => {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/BoyScouts2.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Layout>
            <Container>
                <div className={bs.recolor}>
                    <img className={bs.img} src={logo} alt={logo} />
                </div>
                <div>
                    <h2 className={bs.titleBlue}>GRUPO SCOUT NAVAL ALMTE MIGUEL GRAU S.</h2>
                    <p className={bs.textBlue}>
                        El G.S. Naval Almte. Miguel Grau S. es uno de los 15 grupos que conforman el Distrito Scout
                        La Paz y a su vez es perteneciente a la Asociación de Scouts de Bolivia.<br/>
                        El Grupo fue fundado en Octubre de 1991 por el Scouter Ariel Lozano y en 1994 
                        la Armada Boliviana se convierte en nuestra institución patrocinadora, gracias al 
                        Sr. Capitán de Navío Roger Loayza Suarez, permitiendo que el grupo tenga sus 
                        reuniones en instalaciones de la Escuela Naval Militar y realizar actividades 
                        en otras instituciones navales.<br/>
                        Desde el año 2013; el grupo continuó con sus actividades en los ambientes de la
                         Unidad Educativa Naval Héroes del Pacífico, en coordinación con los distintos 
                        directores de la Unidad, siendo parte de las actividades cívicas que desarrolla la unidad. 
                        <br/>
                        Perteneciente a la Confederación Internacional de Scouts Navales, donde tiene amistad
                         con varios países vecinos, como ser Argentina, Perú, México, Ecuador, Colombia y Paraguay.<br/>

                        Los últimos eventos en los que se participó fueron el 24 JAMBOREE MUNDIAL en Estados Unidos
                         y el JAMCAM en Brasil.<br/>
                        Para unirse, el número de referencia es el 77752966 – Judith Machicado 
                        (Responsable de Grupo)<br/>
                    </p>
                </div>
                <div className={bs.container}>
                    <SRLWrapper>
                        <Row>
                            {loading && (
                                <p>Cargando</p>
                            )}
                            {items.map((item, i) => (
                                <div key={i}>
                                    <img className={bs.image} src={`/imagenes/BoyScout2/${item.img}`} alt={item.name} />
                                </div>
                            ))}
                        </Row>
                    </SRLWrapper>
                </div>
            </Container>
        </Layout>
    )
}

export default Pandemia
