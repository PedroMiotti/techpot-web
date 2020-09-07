import React, { Fragment } from 'react';

// Router
import { Switch, Route } from 'react-router-dom';

// Componentes
  import Navbar from './components/Navbar/index';
  import BottomNavbar from './components/BottomNavbar/index';


// Pages
  import FeedGrupo from './pages/FeedGrupo/index';
  import Login from './pages/Login';
  import FeedPrincipal from './pages/FeedPrincipal';
  import Evento from './pages/Evento/index';
  import EventsMobile from './pages/EventsMobile';
  import PerfilUsuario from './pages/perfilUsuario/index.js';
  import SearchPageMobile from './pages/SearchPageMobile/index';
  import Registro from './pages/Registro/index'

const Routes = () => {
  return (
      <Fragment>      
        {/* <Navbar /> */}

        <Switch>

            <Route exact path="/" component={FeedPrincipal}/>
            
            <Route path="/grupo/feed" component={FeedGrupo}/>
            
            <Route path="/evento" component={Evento} />

            <Route path="/mobile-eventos" component={EventsMobile} />

            <Route path="/login" component={Login} />

            <Route path="/registro" component={Registro} />

            <Route path="/usuario/perfil" component={PerfilUsuario} /> 

            <Route path="/mobile-search" component={SearchPageMobile} /> 

        </Switch>
            
        {/* <BottomNavbar /> */}
            
    </Fragment>

    
  );
};

export default Routes;