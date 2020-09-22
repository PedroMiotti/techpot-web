import React, { useState, Fragment, useRef } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// Icons
    import { Mail, Menu, Notifications, SearchOutlined } from '@material-ui/icons';

// Componentes
    import LogoTechPot from '../../shared/LogoTechPot/index';
    import Sidebar from '../Sidebar/index'
    import ModalNotificacaoPortal from "../ModalNotificao/index";

// Assets
    import userProfilePicture from '../../assets/Rafa.jpg';


const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const Navbar = ({ pathName }) => {
    const [ toggleSidebar, setToggleSidebar ] = useState(false);
    const [ showModalNotification, setShowModalNotification] = useState(false)
    const[ anchorEl, setAnchorEl ] = useState(null);

    const modalNotificacaoRef = useRef();


    let navTitle;
    if(pathName == '/mobile-notificacao'){
        navTitle = 'Notificações'
    } else if(pathName == '/mobile-directs'){
        navTitle = 'Mensagens'
    } else if(pathName == '/mobile-eventos'){
        navTitle = 'Eventos'
    } else if(pathName == '/usuario/perfil'){
        navTitle = 'Meu Perfil'
    } else if(pathName == '/mobile-search'){
        navTitle = 'Search'
    } 


    const openSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    }


    const openModalNotification = (e) => {
      setShowModalNotification(!showModalNotification);
      setAnchorEl(modalNotificacaoRef.current);
    }

    return (
      <Fragment>
        {showModalNotification && <ModalNotificacaoPortal anchor={anchorEl} />}

        <div className="navbarContainer-higher">
          <nav class="font-techpot navbarContainer">
            <ul class="navbarMenu">
              <div class="navbarHamburguer" onClick={openSidebar}>
                <Menu style={icon} />
              </div>

              {navTitle ? (
                <h1 className="navbar-navTitle">{navTitle}</h1>
              ) : (
                <LogoTechPot />
              )}

              <div class="navbarSearchboxContainer">
                <input
                  class="navbarSearchBox"
                  placeholder="Pesquisar..."
                ></input>
                <a href="/">
                  <SearchOutlined />
                </a>
              </div>

              <div class="navbarSideInfoContainer">
                <div class="navbarIconsContainer">
                  <li class="item iconsino">
                    <a
                      id="icon-notificacao"
                      onClick={openModalNotification}
                      ref={modalNotificacaoRef}
                    >
                      <Notifications style={icon} />
                    </a>
                  </li>

                  <li class="item iconmail">
                    <Link to="/mobile-directs">
                      <Mail style={icon} />
                    </Link>
                  </li>
                </div>

                <div class="navbarUserContainer">
                  <div class="navbarUserInfo">
                    <li class="nickname">
                      Olá, <a href="/">Nickname</a>
                    </li>
                    <li class="perfil">
                      <Link to="/usuario/perfil">meu perfil</Link>
                    </li>
                  </div>

                  <div class="navbarUserProfilePicContainer">
                    <img
                      src={userProfilePicture}
                      class="navbarUserProfilePic"
                      alt="Profile pic user"
                    />
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </div>

        {toggleSidebar && (<Sidebar onClose={() => setToggleSidebar(!toggleSidebar)} />)}
      </Fragment>
    );

}

export default Navbar;