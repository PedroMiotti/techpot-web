import React, { Fragment } from 'react';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Componentes
  import Navbar from './components/Navbar/index';
  import BottomNavbar from './components/BottomNavbar/index';

// Hooks
  import useWindowDimensions from "./hooks/useWindowDimensions";


// Pages
  import Login from './pages/Login';
  import Registro from './pages/Registro/index'

  import FeedGrupo from './pages/FeedGrupo/index';
  import FeedPrincipal from './pages/FeedPrincipal';
  import Evento from './pages/Evento/index';
  import PerfilUsuario from './pages/perfilUsuario/index.js';

  import EventsMobile from './pages/EventsMobile';
  import SearchPageMobile from './pages/SearchPageMobile/index';
  import NotificaoMobile from './pages/NotificacaoMobile/index';
  import DirectMobile from './pages/DirectMobile/index';
  import DirectWeb from './pages/DirectWeb/index';
  import MsgDireta from './pages/MsgDireta';

  import PageNotFound from './pages/404/index'


const Routes = () => {

  const currentURL  = useLocation();

  const { height, width } = useWindowDimensions();

  return (
      <Fragment>      

        <Navbar pathName={currentURL.pathname}/>

        <Switch>

            {/* Home  */}
            <Route exact path="/" component={ FeedPrincipal }/>

            {/* Grupo  */}
            <Route path="/grupo/feed" component={ FeedGrupo }/>
            
            {/* Evento  */}
            <Route path="/evento" component={ Evento } />

            {/* Mensagens */}
            <Route path="/direct/user" component={ DirectWeb } />

            {/* Login && Registro  */}
            <Route path="/registro" component={ Registro } />
            <Route path="/login" component={ Login } />

            {/* Usuario  */}
            <Route path="/usuario/perfil" component={ PerfilUsuario } /> 

            {/* 404  */}
            <Route path="*" component={ PageNotFound }/>

            {/* Mobile Exclusive */}

            {width <= 961 ? 
              <>
                <Route path="/mobile-eventos" component={ EventsMobile } />

                <Route path="/mobile-search" component={ SearchPageMobile } />

                <Route path="/mobile-notificacao" component={ NotificaoMobile } /> 

                <Route path="/mobile-directs" component={ DirectMobile } />

                <Route path="/pv" component={ MsgDireta } />
              </>
              : 
              null
            }

            

        </Switch>
            
          <BottomNavbar />
            
    </Fragment>

    
  );
};

export default Routes;