import React from 'react';
import './App.css';
import Inicio from "./Components/Paginas/Inicio";
import NavBar from "./Components/Navbar/Navbar";
import Mision from "./Components/Paginas/Mision";
import Vision from "./Components/Paginas/Vision";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Historia from './Components/Paginas/Historia';
import Autoridades from './Components/Paginas/Autoridades';
import PoliticaInst from './Components/Paginas/PoliticaInst';
import Academica from './Components/Paginas/Academica';
import Deportivo from './Components/Paginas/Deportivo';
import Sociocultural from './Components/Paginas/Sociocultural';
import Interinstitucional from './Components/Paginas/Interinstitucional';
import Psicopedagogico from './Components/Paginas/Psicopedagogico';
import ProyectosEst from './Components/Paginas/ProyectosEst';
import GaleriaAct from './Components/Paginas/GaleriaAct';
import RendimientoAcd from './Components/Paginas/RendimientoAcd';
import Ingreso from './Components/Paginas/Ingreso';
import Docentes from './Components/Paginas/Docentes';
import Estudiantes from './Components/Paginas/Estudiantes';
import Academico from './Components/Paginas/Academico';
import Galeria from './Components/Paginas/Galeria';
import Poup from './Components/Poup/Poup';

import Modal from 'react-modal'
import Button from 'react-bootstrap/Button'

function App() {

  return (
    <>
    <div className="App">
        <Router>
        <NavBar />        
        <Switch>
          <Route path='/' exact component={Inicio}>
              <Inicio />
          </Route>
          <Route path='/mision' component={Mision}>
              <Mision />
          </Route>
          <Route path='/vision' component={Vision}>
            <Vision/>
          </Route>
          <Route path='/historia' component={Historia}>
            <Historia/>
          </Route>
          <Route path='/autoridades' component={Autoridades}>
            <Autoridades/>
          </Route>
          <Route path='/politicaInst' component={PoliticaInst}>
            <PoliticaInst/>
          </Route>
          <Route path='/academica' component={Academica}>
            <Academica/>
          </Route>
          <Route path='/deportivo' component={Deportivo}>
            <Deportivo/>
          </Route>
          <Route path='/sociocultural' component={Sociocultural}>
            <Sociocultural/>
          </Route>
          <Route path='/insterinstitucional' component={Interinstitucional}>
            <Interinstitucional/>
          </Route>
          <Route path='/psicopedagogico' component={Psicopedagogico}>
            <Psicopedagogico/>
          </Route>
          <Route path='/proyectosEst' component={ProyectosEst}>
            <ProyectosEst/>
          </Route>
          <Route path='/galeriaAct' component={GaleriaAct}>
            <GaleriaAct/>
          </Route>
          <Route path='/rendimientoAcd' component={RendimientoAcd}>
            <RendimientoAcd/>
          </Route>
          <Route path='/ingreso' component={Ingreso}>
            <Ingreso/>
          </Route>
          <Route path='/docentes' component={Docentes}>
            <Docentes/>
          </Route>
          <Route path='/estudiantes' component={Estudiantes}>
            <Estudiantes/>
          </Route>
          <Route path='/academico' component={Academico}>
            <Academico/>
          </Route>
          <Route path='/galeria' component={Galeria}>
            <Galeria/>
          </Route>
          
        </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
