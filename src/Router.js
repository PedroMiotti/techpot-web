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
<<<<<<< HEAD
  import EventsMobile from './pages/EventsMobile';
=======
  import perfilUsuario from './pages/perfilUsuario/index.js';
>>>>>>> d0bffaac6230a6fc747a6fbe9bff0e5ca28015dc

const Routes = () => {
  return (
      <Fragment>      
        <Navbar />

        <Switch>

            <Route exact path="/" component={FeedPrincipal}/>
            
            <Route path="/grupo/feed" component={FeedGrupo}/>
            
            <Route path="/evento" component={Evento} />

            <Route path="/login" component={Login} />

            <Route path="/usuario/perfil" component={perfilUsuario} />  

        </Switch>
            
        <BottomNavbar />
            
    </Fragment>

    
  );
};

export default Routes;