import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

import logo from './logo.png';
import c from './Navbar.module.css';

const menuItems = [
  {url: '/', name: 'Inicio'},
  {url: '', name: 'Institucional', submenus: [
    {url: '/institucional/mision', name: 'Misión'},
    {url: '/institucional/vision', name: 'Visión'},
    {url: '/institucional/historia', name: 'Historia'},
    {url: '/institucional/autoridades', name: 'Autoridades'},
    {url: '/institucional/politicaInst', name: 'Política institucional'},
  ]},
  {url: '', name: 'Actividades', submenus: [
    {url: '/academica', name: 'Académica'},
    {url: '/deportivo', name: 'Deportivo'},
    {url: '/social', name: 'Social'},
    {url: '/cultural', name: 'Cultural'},
    {url: '/cientifico', name: 'Científico'},
    {url: '/psicopedagogico', name: 'Psicopedagógico'},
    {url: '/interinstitucional', name: 'Interinstitucional'},
    {url: '/proyectosDeEstudiantes', name: 'Proyectos estudiantes'},
    {url: '/BandaDeMusica', name:'Banda de Música'}
  ]},
  {url: '', name: 'Aula Virtual', submenus: [
    {url: '/ingreso', name: 'Ingreso'}
  ]},
  {url: '', name: 'Otras actividades', submenus: [
    {url: '/boyScouts', name: 'Boy Scouts'},
    {url: '/pandemia', name: 'Pandemia'}
  ]},
  {url: '/galeria', name: 'Galería'}
];

const NavBar = ({dynamic = false}) => {
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 150) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    }
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={!dynamic || transparent ? 'main' : 'transparent'}
      variant="dark"
      fixed="top"
      className={`${c.navbar} ${!dynamic ? c.sticky : ''}`}

    >
      <Container>
        <Navbar.Brand>
          <img className={c.logo} alt={logo} src={logo} />
          &nbsp;&nbsp;UENHP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className={c.color} id="responsive-navbar-nav">
          <Nav className="ml-auto" >
            {menuItems.map((menu, i) => (
              menu.submenus ? (
                <NavDropdown key={i} className={c.dropdown} title={menu.name}>
                  {menu.submenus.map((submenu, j) => (
                    <NavDropdown.Item key={j}>
                      <Link to={submenu.url}>
                        <Nav.Link as="span">
                          {submenu.name}
                        </Nav.Link>
                      </Link>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Link to={menu.url} key={i}>
                  <Nav.Link as="span">
                    {menu.name}
                  </Nav.Link>
                </Link>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;