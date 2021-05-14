import React, {useState, useEffect} from 'react'

import Layout from '../Components/Layout'
import ComunicadosModal from '../Components/ComunicadoModal'

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
      <ComunicadosModal item={selectedItem} show={show} onClose={closeModal} />
      <h1>Comunicados</h1>
      {loading && (
        <p>Cargando</p>
      )}
      {items.map((item, i) => (
        <div
          key={i}
          style={{cursor: 'pointer', border: '1px solid black'}}
          onClick={handleItemClick(item)}
        >
          <img src={`/imagenes/${item.img}`} style={{width: 100}} alt={item.title} />
          <h3>{item.title}</h3>
          <p>
            {`${item.content.substr(0, 100)}...`}
          </p>
          <p>
            {item.fecha}
          </p>
        </div>
      ))}
    </Layout>
  )
}

export default Comunicados