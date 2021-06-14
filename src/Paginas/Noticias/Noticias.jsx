import React, {useState, useEffect} from 'react';

import not from './Noticias.module.css'

import { Container } from 'react-bootstrap';

const Noticias = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
  
    const getData = async () => {
        setLoading(true)
        const resp = await fetch('/resources/Publicaciones.json')
        const data = await resp.json()
        setLoading(false)
        setItems(data)
    }
    
    const handleItemClick = (item) => () => {
        setSelectedItem(item)
    }
  
    useEffect(() => {
        getData()
    }, [])
  return (
    <Container>
       {loading && (
        <p>Cargando</p>
      )}
      {items.map((item, i) => (
        <div
          key={i}
          onClick={handleItemClick(item)}
        >
        <div className={not.containerN}>
          <div className={not.imageBoxN}>
            <img src={`/imagenes/${item.image}`} className={not.imageN} alt={item.title} />
          </div>  
          <div className={not.detailsN}>
            <h3 className={not.titleNot} >{item.title}</h3>
            <p className={not.contentN}>
              {item.content}<br/>
             {item.nomEnlace1} 
             <a href={item.enlace1}>{item.enlace1}</a><br/>
             {item.nomEnlace2} 
            <a href={item.enlace2}>{item.enlace2}</a><br/>
             {item.nomEnlace3} 
            <a href={item.enlace3}>{item.enlace3}</a>
            </p>
            <p className={not.dateN}>
              {item.date}
            </p><br/>
            <div className={not.Conta}>
            <a className={not.aCS} href={`/documentos/${item.url}`} target="_blank" rel="noreferrer">
              {item.button}
            </a>
            </div>
          </div>
        </div>
        </div>
      ))}
    </Container>
  )
}

export default Noticias;