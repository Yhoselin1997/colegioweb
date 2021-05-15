import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Inicio from './Paginas/Inicio';
import Mision from './Paginas/Mision';
import Vision from './Paginas/Vision';
import Historia from './Paginas/Historia';
import Autoridades from './Paginas/Autoridades';
import PoliticaInst from './Paginas/PoliticaInst';
import Academica from './Paginas/Academica';
import Deportivo from './Paginas/Deportivo';
import SocialCultural from './Paginas/SocialCultural';
import Interinstitucional from './Paginas/Interinstitucional';
import Psicopedagogico from './Paginas/Psicopedagogico';
import ProyectosEst from './Paginas/ProyectosEst';
import GaleriaAct from './Paginas/GaleriaAct';
import RendimientoAcd from './Paginas/RendimientoAcd';
import Ingreso from './Paginas/Ingreso';
import Docentes from './Paginas/Docentes';
import Estudiantes from './Paginas/Estudiantes';
import Academico from './Paginas/Academico';
import Galeria from './Paginas/Galeria';
import Comunicados from './Paginas/Comunicados'
import MainModal from './Components/MainModal';
import Convocatorias from './Paginas/Convocatorias'
import Institucional from './Paginas/Institucional';

import './App.scss';

function App() {
  return (
    <>
      <MainModal />
      <Router>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/institucional/:section" component={Institucional} />
          <Route path="/mision" component={Mision} />
          <Route path="/vision" component={Vision} />
          <Route path="/historia" component={Historia} />
          <Route path="/autoridades" component={Autoridades} />
          <Route path="/politicaInst" component={PoliticaInst} />
          <Route path="/academica" component={Academica} />
          <Route path="/deportivo" component={Deportivo} />
          <Route path="/socialCultural" component={SocialCultural} />
          <Route path="/interinstitucional" component={Interinstitucional} />
          <Route path="/psicopedagogico" component={Psicopedagogico} />
          <Route path="/proyectosEst" component={ProyectosEst} />
          <Route path="/galeriaAct" component={GaleriaAct} />
          <Route path="/rendimientoAcd" component={RendimientoAcd} />
          <Route path="/ingreso" component={Ingreso} />
          <Route path="/docentes" component={Docentes} />
          <Route path="/estudiantes" component={Estudiantes} />
          <Route path="/academico" component={Academico} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/comunicados" component={Comunicados} />
          <Route path="/convocatorias" component={Convocatorias} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
