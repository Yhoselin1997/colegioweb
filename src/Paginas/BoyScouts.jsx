import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import { Container, Row } from 'react-bootstrap';
import bs from './BoyScout.module.css'
import logo from '../img/BoyScout.jpg'
import { SRLWrapper } from 'simple-react-lightbox';

const BoyScouts = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getData = async () => {
    setLoading(true)
    const resp = await fetch('/resources/BoyScouts.json')
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
      <div className={bs.recolor}>
        <img className={bs.img} src={logo} alt={logo} />
      </div>
        <div>
          <h2 className={bs.titleBlue}>GRUPO SCOUT NAVAL CRUX – UENHP</h2>
          <p className={bs.textBlue}>
            El Grupo Scout Naval CRUX – UENHP es miembro reconocido de Asociación de Scouts de Bolivia,
            inicio sus actividades en agosto de 2014 por invitación de la Dirección de la
            Unidad Educativa Naval “Héroes del Pacífico” dependiente de la Armada Boliviana y
            tiene como fecha de Fundación el 30 de noviembre de 2014 donde se consolida en su trabajo
            con los alumnos de la UENHP. Actualmente Trabaja con las Unidades de Lobatos
            (niños y niñas de 7 a 10 años), Exploradores (niños y niñas de 11 a 14 años) y Pioneros
            (adolescentes de 15 a 17 años).
            <br />
            Su nombre hace referencia a la “Cruz del Sur” o “Jacha Qhana” Andina,
            ya que la misma servía como referencia del calendario andino para la cosecha y como guía a los navegantes.
            <br />
            Nuestro lema es “SEMPER PARATA”, Siempre Listo en latín.
            <br />
            Año de Fundación: 2014
            <br />
            Responsable de Grupo: Scouter Pablo Manuel Luna Landaeta  Numero Celular 60160187
            <br />
            Facebook: GRUPO SCOUT NAVAL CRUX UENHP
            <a href="https://www.facebook.com/groups/682783495125248/?ref=bookmarks"> https://www.facebook.com/groups/682783495125248/?ref=bookmarks</a>
            <br />
            Correo electrónico:  scoutnavalcrux@gmail.com
            <br />
            El Grupo Scout desarrolla actividades con los alumnos de la Unidad Educativa Naval “Héroes del Pacífico” de los ciclos de primero de primaria, hasta los de segundo de secundaria.
          </p>
        </div>
        <div className={bs.container}>
          <SRLWrapper>
            <Row>
              {loading && (
                <p>Cargando</p>
              )}
              {items.map((item, i) => (
                <div key={i}>
                  <img className={bs.image} src={`/imagenes/BoyScout/${item.img}`} alt={item.name} />
                </div>
              ))}
            </Row>
          </SRLWrapper>
        </div>
      </Container>
    </Layout>
  )
}

export default BoyScouts
