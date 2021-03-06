import React, { useEffect } from 'react';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Componentes
import Navbar from './components/Navigation/Navbar/index';
import BottomNavbar from './components/Navigation/BottomNavbar/index';
import ProtectedRoute from './shared/ProtectedRoute/index';

// Hooks
import useWindowDimensions from "./hooks/useWindowDimensions";

// Pages
import MainFeed from './pages/MainFeed';

// Auth
import Login from './pages/Auth/LoginCas';
import Register from './pages/Auth/Register'

// Group
import GroupFeed from './pages/Group/Feed';

// Event
import EventFeed from './pages/Event/Feed';

// User
import UserProfile from './pages/User/Profile';
import UserEdit from './pages/User/Edit'

// 404
import PageNotFound from './pages/404'

// Mobile
import MobileSearch from './pages/Mobile/Search';
import MobileNotification from './pages/Mobile/Notification';

// Event
import EventSearchMobile from './pages/Event/SearchMobile';

// Messages
import DirectMobile from './pages/Messages/DirectMobile';
import DirectWeb from './pages/Messages/DirectWeb';
import MsgDireta from './pages/Messages/MsgDireta';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { userInfo } from './store/_entities/User';
import { listEvent } from './store/_entities/Event';
import { listGroup } from './store/_entities/Group';
import { listPostByUser } from './store/_entities/Post';


const Router = () => {
  // Get User ID
  const usuarioId = useSelector(state => state.entitie.user.id);

  const dispatch = useDispatch();

  useEffect(() => {

    const loadInitialData = async () => {

      await dispatch(userInfo(usuarioId, true));
      await dispatch(listEvent());
      await dispatch(listGroup(usuarioId));
      await dispatch(listPostByUser(usuarioId));

      const loadinSpinner = document.getElementById('ipl-progress-indicator')
      if (loadinSpinner) {
        // fade out
        loadinSpinner.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          loadinSpinner.outerHTML = ''
        }, 2000)
      }

    }

    loadInitialData();

  }, [dispatch])

  return (
    <Switch>

      <Route path={["/registro", "/login", "/usuario/perfil/editar/:id"]} component={NoNavbar} />
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
      {/* Login && Register  */}
      <Route path="/registro" component={Register} />
      <Route path="/login" component={Login} />


      {/* Usuario  */}
      <ProtectedRoute path="/usuario/perfil/editar/:id" component={UserEdit} />
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
      <ProtectedRoute exact path="/" component={MainFeed} />


      {/* Grupo  */}
      <ProtectedRoute path="/grupo/feed/:id" component={GroupFeed} />

      {/* Evento  */}
      <Route exact path="/evento/:id" component={EventFeed} />


      {/* Mensagens */}
      <ProtectedRoute path="/direct/user" component={DirectWeb} />

      {/* Usuario  */}
      <ProtectedRoute path="/usuario/perfil/:id" component={UserProfile} />


      {/* Mobile Exclusive */}

      {width <= 961 ?
        <>
          <ProtectedRoute path="/mobile-eventos" component={EventSearchMobile} />

          <ProtectedRoute path="/mobile-search" component={MobileSearch} />

          <ProtectedRoute path="/mobile-notificacao" component={MobileNotification} />

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

export default Router;
