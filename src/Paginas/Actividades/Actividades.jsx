import React, {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom';

import Layout from '../../Components/Layout';
import CardSection from '../../Components/CardSection/CardSection'


import  Container  from 'react-bootstrap/Container';

import ac from './Actividades.module.css'

const Actividades = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)

    const {section} = useParams();
    const academicaRef= useRef(null);
    const deportivoRef= useRef(null);
    const socialRef = useRef(null);
    const culturalRef = useRef(null);
    const cientificoRef =useRef(null);
    const interinstRef = useRef(null);
    const proyectosEstRef = useRef(null);
    const bandaMusicaRef = useRef(null);

    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/actividades.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }
    
    const handleItemClick = (item) => () => {
        setSelectedItem(item)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const sections = {
            academica: academicaRef,
            deportivo: deportivoRef,
            social: socialRef,
            cultural: culturalRef,
            cientifico: cientificoRef,
            interinstitucional: interinstRef,
            proyectosEstudiantes: proyectosEstRef,
            bandaMusica: bandaMusicaRef 
        }
        if(sections[section]){
            sections[section].current.scrollIntoView()
            window.scrollBy(0, -85)
        }
    }, [section])
    return (
        <Layout>
            <div className={ac.imageContainer}>
                <span className={ac.titleContainer}>Nuestras Actividades</span>
            </div>
            <Container>
            <div>
                <div>
                <h1 ref={academicaRef} style={{color:"#fff"}}>ACADÉMICA</h1>
                <div>
                     {loading && (
                        <p>Cargando</p>
                     )}
                     {items.map((item, i) => (
                        <div
                            key={i}
                            style={{cursor: 'pointer'}}
                            onClick={handleItemClick(item)}
                        >
                             <CardSection
                                title={item.title}
                                video={item.video}
                                image={`/imagenes/Academica/${item.img}`}
                                content={`${item.content}`}
                                url = {item.url}
                                />
                        </div>
                    ))}         
                </div>
                </div>            
                <div>
                <h1 ref={deportivoRef} style={{color:"#fff"}}>DEPORTIVO</h1>
                <div>
                     {loading && (
                        <p>Cargando</p>
                     )}
                     {items.map((item, i) => (
                        <div
                            key={i}
                            style={{cursor: 'pointer'}}
                            onClick={handleItemClick(item)}
                        >
                             <CardSection
                                title={item.title}
                                video={item.video}
                                image={`/imagenes/Academica/${item.img}`}
                                content={`${item.content}`}
                                url = {item.url}
                                />
                        </div>
                    ))}         
                </div>
                </div>
                <h1 ref={socialRef} style={{color:"#fff"}}>SOCIAL</h1>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <h1 ref={culturalRef} style={{color:"#fff"}}>CULTURAL</h1>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <h1 ref={cientificoRef} style={{color:"#fff"}}>CIENTIFICO</h1>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <h1 ref={interinstRef} style={{color:"#fff"}}>INTERINSTITUCIONAL</h1>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <h1 ref={proyectosEstRef} style={{color:"#fff"}}>PROYECTOS ESTUDIANTES</h1>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <h1 ref={bandaMusicaRef} style={{color:"#fff"}}>BANDA DE MUSICA</h1>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
                <p>lorep ipsue</p>
            </div>
            </Container>
        </Layout>
    )
}

export default Actividades


