import React, {useState, useEffect} from 'react';

import Layout from '../../Components/Layout';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ga from './Galeria.module.css'


const Galeria = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)

    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/galeria.json')
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
    return(
            <Layout>
                <Container>
                <div className={ga.container}>
                <h2 style={{color:"#fff"}}>GALERIA </h2>
                <Row>
                {loading && (
                    <p>Cargando</p>
                )}
                {items.map((item, i) => (
                    <div
                    key={i}
                    onClick={handleItemClick(item)}
                    >       
                            <img className={ga.image} src={`/imagenes/Galeria/${item.img}`}/>
                    </div>
                ))}
                  </Row>
                </div>
                </Container>
            </Layout>       
    )
}

export default Galeria;