import React, { useState, useEffect } from 'react'

import Layout from '../Components/Layout'

import './Actividades.css'

import CardSection from '../Components/CardSection/CardSection'

const Interinstitucional = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/Actividades/Interinstitucional.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Layout>
            <div className="imageContainer">
                <span className="titleContainer">Nuestras Actividades</span>
            </div>
            <div>
                {loading && (
                    <p>Cargando</p>
                )}
                {items.map((item, i) => (
                    <div
                        key={i}
                    >
                        <CardSection
                            title={item.title}
                            video={item.video}
                            image={`/imagenes/Interinstitucional/${item.img}`}
                            content={`${item.content}`}
                            url={item.url}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Interinstitucional
