import React from 'react';

import Cards from '../Components/Cards/Cards'
import Niveles from '../Components/Niveles/Niveles'
import Layout from '../Components/Layout'
import Targeta from '../Components/Targeta/targeta'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import ImgCard1 from '../img/becas.jpg'
import ImgCard2 from '../img/becas.jpg'
import ImgCard3 from '../img/encuentro.jpeg' 

import './Inicio.css'

const Inicio = () => {
  return (
    <Layout withSlider>
      <div>
        <Cards />
        <Targeta/>  
        <Niveles/>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={ImgCard1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={ImgCard2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={ImgCard3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>      
        <div>
          <h2>NUESTRA UBICACIÓN</h2>
          <iframe
          className="maps" 
          title="ubicacion" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30602.869430543422!2d-68.16654008402188!3d-16.507980171098225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21ff55479127%3A0xae375db80d5c539b!2sUnidad%20educativa%20naval%20HEROES%20DEL%20PACIFICO!5e0!3m2!1ses!2sbo!4v1620156366837!5m2!1ses!2sbo" 
          allowFullScreen="" 
          loading="lazy"></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Inicio;