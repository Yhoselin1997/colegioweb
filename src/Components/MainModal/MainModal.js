import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';

import m from './Modal.module.css'
const MainModal = () => {
  const [show, setShow] = useState(true);
  const closeModal = () => setShow(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getData = async () => {
    setLoading(true)
    const resp = await fetch('/resources/Modal.json')
    const data = await resp.json()
    setLoading(false)
    setItems(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <Modal show={show} centered onHide={closeModal}>
      <div>
        {loading && (
          <p>Cargando</p>
        )}
        {items.map((item, i) => (
          <div
            key={i}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {item.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={`/imagenes/${item.image}`} className={m.image} alt={item.title} />
              <div className={m.button}>
              <a className={m.aCS} href={`/documentos/${item.documento}`} target="_blank" rel="noreferrer">Ver documento</a>
              </div>
            </Modal.Body>
            <Modal.Footer>             
              <Button onClick={closeModal}>Cerrar</Button>
            </Modal.Footer>
          </div>
        ))}
      </div>
    </Modal>
  )
};

export default MainModal;