import React, {useState, useEffect} from 'react'

import Layout from '../../Components/Layout'
import ComunicadosModal from '../../Components/ComunicadoModal'

import com from './Comunicados.module.css'
import { Container } from 'react-bootstrap'

const Comunicados = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  
  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)
  
  const getData = async () => {
    setLoading(true)
    const resp = await fetch('/resources/comunicados.json')
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
      <div className={com.imageContainer}>
        <span className={com.titleContainer}>Comunicados</span>
      </div>
      <ComunicadosModal item={selectedItem} show={show} onClose={closeModal} />
      <Container>
      {loading && (
        <p>Cargando</p>
      )}
      {items.map((item, i) => (
        <div
          key={i}
          style={{cursor: 'pointer'}}
          onClick={handleItemClick(item)}
        >
          <div className={com.container}>
            <div className={com.imageBox}>
              <img src={`/imagenes/${item.img}`} className={com.image} alt={item.title} />
            </div>
              <div className={com.details}>
                <h3 className={com.title} >{item.title}</h3>
                <p className={com.content}>
                  {`${item.content.substr(0, 100)}...`}
                </p>
                <p className={com.date}>
                  {item.fecha}
                </p>
              </div>
           </div>
         </div>
      ))}
      </Container>
    </Layout>
  )
}

export default Comunicados