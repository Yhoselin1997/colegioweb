import React, {useState, useEffect} from 'react'

import Layout from '../../Components/Layout'
import ConvocatoriaModal from '../../Components/ConvocatoriasModal';

import cn from './Convocatoria.module.css'
import { Container } from 'react-bootstrap';
const Convocatorias = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  
  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)
  
  const getData = async () => {
    setLoading(true)
    const resp = await fetch('/resources/convocatorias.json')
    const data = await resp.json()
    setLoading(false)
    setItems(data)
  }
  
  const handleItemClick = (item) => () => {
    setSelectedItem(item)
    openModal()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
       <div className={cn.imageContainer}>
        <span className={cn.titleContainer}>Convocatorias</span>
      </div>
        <ConvocatoriaModal item={selectedItem} show={show} onClose={closeModal} />
      <Container>
      {loading && (
        <p>Cargando</p>
      )}
      {items.map((item, i) => (
        <div
          key={i}
          onClick={handleItemClick(item)}
        >
          <div className={cn.container}>
          <p className={cn.date}>
              {item.fecha}
            </p>
            <h3 className={cn.title}>{item.title}</h3>
            <p className={cn.content}>
              {`${item.content.substr(0, 100)}...`}
            </p>
          </div>
          
        </div>
      ))}
      </Container>
    </Layout> 
  )
}

export default Convocatorias