import React from 'react'
import {Modal, Button} from 'react-bootstrap';

import cm from './ComunicadosModal.module.css'
const ComunicadoModal = ({ item, show, onClose }) => {
  if (!item) return null
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div>
          <img src={`/imagenes/${item.img}`} className={cm.image} alt={item.title} />
          <p className={cm.content}>
            {item.content}
          </p>
          <a className={cm.aCS} href={`/documentos/${item.url}`} target="_blank" rel="noreferrer">
            ver documento
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>

  )
}
export default ComunicadoModal;
