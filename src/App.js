import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Inicio from './Paginas/Inicio/Inicio';
import Ingreso from './Paginas/Ingreso';
import Galeria from './Paginas/Galeria/Galeria';
import Comunicados from './Paginas/Comunicados/Comunicados';
import MainModal from './Components/MainModal';
import Convocatorias from './Paginas/Convocatorias/Convocatorias'
import Institucional from './Paginas/Institucional/Institucional';
import Academica from './Paginas/Academica';
import Deportivo from './Paginas/Deportivo';
import Social from './Paginas/Social';
import Cultural from './Paginas/Cultural';
import Cientifico from './Paginas/Cientifico';
import Psicopedagogico from './Paginas/Psicopedagogico';
import Interinstitucional from './Paginas/Interinstitucional';
import ProyectosEstudiantes from './Paginas/ProyectosEstudiantes';
import BandaDeMusica from './Paginas/BandaDeMusica';
import BoyScouts from './Paginas/BoyScouts';
import Pandemia from './Paginas/Pandemia';

import './App.scss';


function App() {
  return (
    <>
      <MainModal />
      <Router>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/institucional/:section" component={Institucional} />
          <Route path="/academica" component={Academica}/>
          <Route path="/deportivo" component={Deportivo}/>
          <Route path="/social" component={Social}/>
          <Route path="/cultural" component={Cultural}/>
          <Route path="/cientifico" component={Cientifico}/>
          <Route path="/psicopedagogico" component={Psicopedagogico}/>
          <Route path="/interinstitucional" component={Interinstitucional}/>
          <Route path="/proyectosDeEstudiantes" component={ProyectosEstudiantes}/>
          <Route path="/bandaDeMusica" component={BandaDeMusica}/>
          <Route path="/ingreso" component={Ingreso} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/comunicados" component={Comunicados} />
          <Route path="/convocatorias" component={Convocatorias} />
          <Route path="/boyScouts" component={BoyScouts}/>
          <Route path="/pandemia" component={Pandemia} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
