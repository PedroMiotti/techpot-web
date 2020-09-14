import React, { Fragment } from 'react';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Componentes
  import Navbar from './components/Navbar/index';
  import BottomNavbar from './components/BottomNavbar/index';


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


const Routes = () => {

  const currentURL  = useLocation(); // currentURL.pathname

  return (
      <Fragment>      
        <Navbar pathName={currentURL.pathname}/>

        <Switch>

            <Route exact path="/" component={FeedPrincipal}/>
            
            <Route path="/grupo/feed" component={FeedGrupo}/>
            
            <Route path="/evento" component={Evento} />

            <Route path="/mobile-eventos" component={EventsMobile} />

            <Route path="/login" component={Login} />

            <Route path="/registro" component={Registro} />

            <Route path="/usuario/perfil" component={PerfilUsuario} /> 

            <Route path="/mobile-search" component={SearchPageMobile} /> 

            <Route path="/mobile-notificacao" component={NotificaoMobile} /> 

            <Route path="/mobile-directs" component={DirectMobile} />


        </Switch>
            
          <BottomNavbar />
            
    </Fragment>

    
  );
};

export default Routes;