import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const MainModal = () => {
  const [show, setShow] = useState(true);
  const closeModal = () => setShow(false);
  return (
    <Modal show={show} centered onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Comunicado
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem ipsum dor sit amet
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default MainModal;