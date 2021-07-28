import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import { Container, Row } from 'react-bootstrap';
import ga from './Galeria.module.css'

import { SRLWrapper } from 'simple-react-lightbox';

const Galeria = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getData = async () => {
    setLoading(true)
    const resp = await fetch('/resources/galeria.json')
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
        <div className={ga.container}>
          <SRLWrapper>
            <Row>
              {loading && (
                <p>Cargando</p>
              )}
              {items.map((item, i) => (
                <div
                  key={i}
                >
                  <img className={ga.image} src={`/imagenes/Galeria/${item.img}`} alt={item.name} />
                </div>
              ))}
            </Row>
          </SRLWrapper>
        </div>
      </Container>
    </Layout>
  )
}

export default Galeria;