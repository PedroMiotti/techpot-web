import React, { Fragment } from 'react';

// Router
  import { Switch, Route, useLocation } from 'react-router-dom';

// Redux
  import { useSelector,} from 'react-redux'

// Componentes
  import Navbar from './components/Navbar/index';
  import BottomNavbar from './components/BottomNavbar/index';
  import ProtectdRoute from './shared/ProtectedRoute/index';

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


const Routes = () => {

  //_entities --> user
  const auth = useSelector(state => state.entitie.user.isLoggedIn)
  
  const currentURL  = useLocation();

  const { width } = useWindowDimensions();


  return (
    <Fragment>

      {auth && <Navbar pathName={currentURL.pathname} /> }

      <Switch>
        {/* Home  */}
        <ProtectdRoute exact path="/" component={FeedPrincipal} />

        {/* Grupo  */}
        <ProtectdRoute path="/grupo/feed" component={FeedGrupo} />

        {/* Evento  */}
        <Route path="/evento/criar" component={EventoCriar} />
        <Route path="/evento" component={Evento} />
        

        {/* Mensagens */}
        <ProtectdRoute path="/direct/user" component={DirectWeb} />

        {/* Usuario  */}
        <ProtectdRoute exact path="/usuario/perfil" component={PerfilUsuario} />
        <ProtectdRoute path="/usuario/perfil/editar" component={EditUsuario} />

        {/* Login && Registro  */}
        <Route path="/registro" component={Registro} />
        <Route path="/login" component={Login} />

        {/* Mobile Exclusive */}

        {width <= 961 ? 
          <>
            <ProtectdRoute path="/mobile-eventos" component={EventsMobile} />

            <ProtectdRoute path="/mobile-search" component={SearchPageMobile} />

            <ProtectdRoute path="/mobile-notificacao" component={NotificaoMobile} />

            <ProtectdRoute path="/mobile-directs" component={DirectMobile} />

            <ProtectdRoute path="/pv" component={ MsgDireta } />
          </>
        : 
          null
        }

        {/* 404  */}
        <Route exact path="*" component={PageNotFound} />

      </Switch>

      {auth && <BottomNavbar /> }

    </Fragment>
  );
};

export default Routes;