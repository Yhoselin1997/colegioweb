import React, {useState} from 'react';
import './Navbar.css';
import * as ReactBootStrap from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import logo from './logo.png'
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  } 
   window.addEventListener('scroll', changeBackground);
    return(
        <div className={navbar ? 'Navbar active' : 'Navbar'} >
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={navbar ? 'Navbar active' : 'Navbar'} >
            <Navbar.Brand href="#home" className="Color">
              <img src={logo} className="logo"></img>
              UEN
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="NavDropdown" />
            <Navbar.Collapse id="responsive-navbar-nav" className="NavDropdown">
              <Nav className="mr-auto" >
              </Nav>
              <Nav className="NavDropdown" >
              <NavLink to='/' className="NavDropdown">
                 <ReactBootStrap.Nav.Link eventKey={2} href="#memes"  className="Color nav-item active" >
                    INICIO
                  </ReactBootStrap.Nav.Link>
              </NavLink>         
              <ReactBootStrap.NavDropdown title="INSTITUCIONAL" id="collasible-nav-dropdown" className="Color texto"> 
                  <ReactBootStrap.NavDropdown.Item href="#mision" className="Color texto ">
                  <Link to='/mision' className="Color" >
                    <ReactBootStrap.Nav.Link href="#mision" className="Color nav-item active texto">Misión</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#vision" className="Color texto">
                  <Link to='/vision' className="Color">
                    <ReactBootStrap.Nav.Link href="#vision" className="Color nav-item active texto">Visión</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#historia" className="Color texto">
                  <Link to='/historia' className="Color">
                    <ReactBootStrap.Nav.Link href="#historia" className="Color nav-item active">Historia</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#autoridades" className="Color texto">
                  <Link to='/autoridades' className="Color">
                    <ReactBootStrap.Nav.Link href="#autoridades" className="Color nav-item active">Autoridades</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#politicaInst" className="Color texto">
                  <Link to='/politicaInst' className="Color">
                    <ReactBootStrap.Nav.Link href="#politicaInst" className="Color nav-item active">Política Instituciona</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="ACTIVIDADES" id="collasible-nav-dropdown" className="Color nav-item active"> 
                  <ReactBootStrap.NavDropdown.Item href="#academico" className="Color texto">
                  <Link to='/academica'>
                    <ReactBootStrap.Nav.Link href="#academico" className="Color nav-item active">Académica</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#deportivo" className="Color texto">
                  <Link to='/deportivo' className="Color">
                    <ReactBootStrap.Nav.Link href="#deportivo" className="Color nav-item active">Deportivo</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#sociocultural" className="Color texto">
                  <Link to='/sociocultural' className="Color">
                    <ReactBootStrap.Nav.Link href="#sociocultural" className="Color nav-item active">Sociocultural</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#interinstitucional" className="Color texto">
                  <Link to='/insterinstitucional' className="Color">
                    <ReactBootStrap.Nav.Link href="#insterinstitucional" className="Color nav-item active">Interinstitucional</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#psicopedagogico" className="Color texto">
                  <Link to='/psicopedagogico' className="Color">
                    <ReactBootStrap.Nav.Link href="#psicopedagogico" className="Color nav-item active">Psicopedagógico</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#proyectosEst" className="Color texto">
                  <Link to='/proyectosEst' className="Color">
                    <ReactBootStrap.Nav.Link href="#proyectosEst" className="Color nav-item active">Proyectos Estudiantes</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#galeriaAct" className="Color texto">
                  <Link to='/galeriaAct' className="Color">
                    <ReactBootStrap.Nav.Link href="#galeriaAct" className="Color nav-item active">Galeria</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  
                </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="AULA VIRTUAL" id="collasible-nav-dropdown" className="Color nav-item active"> 
                  <ReactBootStrap.NavDropdown.Item href="#rendimientoAcd" className="Color texto" >
                  <Link to='/rendimientoAcd'>
                    <ReactBootStrap.Nav.Link href="#RendimientoAcd" className="Color nav-item active">Rendimiento académico</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#ingreso" className="Color texto">
                  <Link to='/ingreso'>
                    <ReactBootStrap.Nav.Link href="#ingreso" className="Color nav-item active">Ingreso</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="ADMISIONES" id="collasible-nav-dropdown" className="Color nav-item active"> 
                  <ReactBootStrap.NavDropdown.Item href="#docentes" className="Color texto" >
                  <Link to='/docentes'>
                    <ReactBootStrap.Nav.Link href="#docentes" className="Color nav-item active">Docentes</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#estudiantes" className="Color texto" >
                  <Link to='/estudiantes'>
                    <ReactBootStrap.Nav.Link href="#estudiantes" className="Color nav-item active">Estudiantes</ReactBootStrap.Nav.Link>
                  </Link>
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
               <NavLink to="/Academico" className="NavDropdown">
                 <ReactBootStrap.Nav.Link eventKey={2} href="#memes"  className="Color nav-item active">
                    ACADEMICO
                  </ReactBootStrap.Nav.Link>
                </NavLink>
                
                <NavLink to="/Galeria" className="NavDropdown " >
                 <ReactBootStrap.Nav.Link eventKey={2} href="#memes" className="NavDropdown nav-item active">
                    GALERIA
                  </ReactBootStrap.Nav.Link>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default NavBar;