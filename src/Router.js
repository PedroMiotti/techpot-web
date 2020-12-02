import React, { Fragment } from 'react';

// Router
import { Switch, Route, useLocation, BrowserRouter } from 'react-router-dom';

// Redux
import { useSelector, } from 'react-redux'

// Componentes
import Navbar from './components/Navbar/index';
import BottomNavbar from './components/BottomNavbar/index';
import ProtectedRoute from './shared/ProtectedRoute/index';

// Hooks
import useWindowDimensions from "./hooks/useWindowDimensions";


// Pages

import Login from './pages/Login';
import Registro from './pages/Registro/index'

import FeedGrupo from './pages/FeedGrupo/index';
import FeedPrincipal from './pages/FeedPrincipal';
import Evento from './pages/Evento/index';
import EventoCriar from './pages/Evento-Criar/index.js';
import PerfilUsuario from './pages/perfilUsuario/index.js';
import EditUsuario from './pages/EditUsuario/index'

// Mobile
import EventsMobile from './pages/EventsMobile';
import SearchPageMobile from './pages/SearchPageMobile/index';
import NotificaoMobile from './pages/NotificacaoMobile/index';
import DirectMobile from './pages/DirectMobile/index';
import DirectWeb from './pages/DirectWeb/index';
import MsgDireta from './pages/MsgDireta';

// 404
import PageNotFound from './pages/404/index'


const Test = () => {


  return (
    <Switch>

      <Route path={["/registro", "/login", "/usuario/perfil/editar"]} component={NoNavbar} />
      <Route component={UseNav} />

      {/* 404  */}
      <Route path="*" component={PageNotFound} />

    </Switch>
  );
};


// Routes that DOESNT USE the navbar or the bottom bar
const NoNavbar = () => {
  return (
    <>
      {/* Login && Registro  */}
      <Route path="/registro" component={Registro} />
      <Route path="/login" component={Login} />


      {/* Usuario  */}
      <ProtectedRoute path="/usuario/perfil/editar/:id" component={EditUsuario} />
    </>
  )
}


// Routes that USE the navbar or the bottom bar

const UseNav = () => {

  const currentURL = useLocation();

  const { width } = useWindowDimensions();

  return (
    <>

      <Navbar pathName={currentURL.pathname} />

      {/* Home  */}
      <ProtectedRoute exact path="/" component={FeedPrincipal} />


      {/* Grupo  */}
      <ProtectedRoute path="/grupo/feed/:id" component={FeedGrupo} />

      {/* Evento  */}
      <Route path="/evento/criar" component={EventoCriar} />
      <Route exact path="/evento/:id" component={Evento} />


      {/* Mensagens */}
      <ProtectedRoute path="/direct/user" component={DirectWeb} />

      {/* Usuario  */}
      <ProtectedRoute path="/usuario/perfil/:id" component={PerfilUsuario} />


      {/* Mobile Exclusive */}

      {width <= 961 ?
        <>
          <ProtectedRoute path="/mobile-eventos" component={EventsMobile} />

          <ProtectedRoute path="/mobile-search" component={SearchPageMobile} />

          <ProtectedRoute path="/mobile-notificacao" component={NotificaoMobile} />

          <ProtectedRoute path="/mobile-directs" component={DirectMobile} />

          <ProtectedRoute path="/pv" component={MsgDireta} />
        </>
        :
        null
      }
      <BottomNavbar />

    </>
  )
}

export default Test;