import React from 'react'
import {Modal, Button} from 'react-bootstrap';

const ConvocatoriaModal = ({ item, show, onClose }) => {
  if (!item) return null
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <p>
          {item.content}
        </p>
        <a href={`/documentos/${item.url}`} target="_blank" rel="noreferrer">
          ver documento
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  )
}
export default ConvocatoriaModal;
