import React, {useState} from 'react'

import { Button, Container} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

import logo from './logo.png'
import escuela from './escuela.png'
import logoArmada from './logo_armada.png'


import Comunicados from '../Json/Comunicados.json'

import './Card.css'


const Cards = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="containerCard">
        <div className="cardC1">
          <div className="imgBoxC1">
            <img src={logo} className="logoUEN imgC1" alt="logo"></img>
            <h2 className="tamanio">COMUNICADOS</h2>
          </div>
          <div className="contentC1">
            <div className="sizeC1">
            <Button variant="primary" className="a0" onClick={handleShow}>
              Ver
            </Button>
            <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                COMUNICADOS
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
              <Table responsive striped bordered hover>
                <thead>
                  <div className="post">
                          {Comunicados.map(post =>{
                            return(
                              <tr key={post.id}>
                                <td>{post.id}</td>
                                <td><img src={`${process.env.PUBLIC_URL}/imagenes/${post.img}`} alt="foto" width="70px" height="70px"/></td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>{post.fecha}</td>
                                <td><Button href={`${process.env.PUBLIC_URL}/Documentos/${post.url}`}>Ver</Button></td>
                              </tr>
                            )
                          })}
                  </div>
                </thead>
              </Table>
             </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Modal.Footer>
            </Modal>
            </div>
          </div>
        </div>
        <div className="cardC2">
            <h2 className="tamanio texto">UEN</h2>
        </div>
        <div className="cardC3">
          <div className="imgBoxC3">
            <img src={logoArmada} className="logoUEN" alt="logoArmada"/>
            <h2 className="tamanio top">CONVOCATORIAS</h2><br/>
          </div>
          <div className="contentC3">
            <div className="sizeC3">
              <a href="#" className="a2"> Ver </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
