import React, { useState, Fragment, useRef, useEffect } from "react";
import "./index.css";

// Router
import { Link, useHistory } from "react-router-dom";

// Icons
import { Mail, Menu, Notifications, SearchOutlined, ArrowBack, Add, ArrowDropDown } from "@material-ui/icons";

// Componentes
import LogoTechPot from "../../shared/LogoTechPot/index";
import Sidebar from "../Sidebar/index";
import ModalNotificacao from "../ModalNotificacao/index";
import ModalMensagens from "../ModalMensagens/index";
import ModalUserPreferences from '../ModalUserPreferences/index'
import UserProfileImg from "../../shared/UserProfileImg/index"

// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { userInfo } from '../../store/_entities/User';

// Helpers
import { firstLetterUppercase } from '../../helpers/UpperFirstLetter';


const icon = {
  color: "#fff",
  fontSize: 30,
  cursor: "pointer",
};



const Navbar = ({ pathName }) => {
  const [ toggleSidebar, setToggleSidebar ] = useState(false);
  const [showModalNotification, setShowModalNotification ] = useState(false);
  const [ showModalMensagens, setShowModalMensagens ] = useState(false);
  const [showModalUserPreferences, setShowModalUserPreferences] = useState(false);
  const [anchorLeft, setAnchorLeft] = useState(null);
  const [anchorTop, setAnchorTop] = useState(null);

  const modalNotificacaoRef = useRef();
  const modalMensagendsRef = useRef();
  const modalUserPreferencesRef = useRef();

  // Getting user id && perfil
  const usuarioId = useSelector(state => state.entitie.user.id);
  const usuarioPerfil = useSelector(state => state.entitie.user.perfil);

  const { width } = useWindowDimensions();

  let navTitle;
  let directScreen = false;
  if (width <= 960 && pathName === "/mobile-notificacao") {
    navTitle = "Notificações";
  } else if (width <= 960 && pathName === "/mobile-directs") {
    navTitle = "Mensagens";
    directScreen = true;
  } else if (width <= 960 && pathName === "/mobile-eventos") {
    navTitle = "Eventos";
  } else if (width <= 960 && pathName === "/mobile-search") {
    navTitle = "Search";
  }

  const openSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const openModalNotification = (e) => {
    setShowModalNotification(!showModalNotification);

    // Pegando a posicao do icone
    const postion = modalNotificacaoRef.current.getBoundingClientRect();
    setAnchorLeft(postion.left);
    setAnchorTop(postion.bottom);
  };

  const openModalMensagens = (e) => {
    setShowModalMensagens(!showModalMensagens);

    // Pegando a posicao do icone
    const postion = modalMensagendsRef.current.getBoundingClientRect();
    setAnchorLeft(postion.left);
    setAnchorTop(postion.bottom);
  };

  const openModalUserPreferences = (e) => {
    setShowModalUserPreferences(!showModalUserPreferences);

    // Pegando a posicao do icone
    const postion = modalUserPreferencesRef.current.getBoundingClientRect();
    setAnchorLeft(postion.left);
    setAnchorTop(postion.bottom);
  };


  const history = useHistory();

  const goBackPrevious = () => {
    history.goBack();
  }

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(userInfo(usuarioId));

  }, [])

  return (
    <Fragment>
      {showModalNotification && (
        <ModalNotificacao
          anchorLeft={anchorLeft}
          anchorTop={anchorTop}
          onClose={() => setShowModalNotification(!showModalNotification)}
        />
      )}

      {showModalMensagens && (
        <ModalMensagens
          anchorLeft={anchorLeft}
          anchorTop={anchorTop}
          onClose={() => setShowModalMensagens(!showModalMensagens)}
        />
      )}

      {showModalUserPreferences && (
        <ModalUserPreferences
          anchorLeft={anchorLeft}
          anchorTop={anchorTop}
          onClose={() => setShowModalUserPreferences(!showModalUserPreferences)}
        />
      )}

      <div className="navbarContainer-higher">
        <nav className="font-techpot navbarContainer">
          <ul className="navbarMenu">
            {directScreen ? (
              <div className="navbarBackIcon" onClick={goBackPrevious}>
                <ArrowBack style={icon} />
              </div>
            ) : (
                <div className="navbarHamburguer" onClick={openSidebar}>
                  <Menu style={icon} />
                </div>
              )}

            {navTitle ? (
              <h1 className="navbar-navTitle">{navTitle}</h1>
            ) : (
                <LogoTechPot />
              )}

            <div className="navbarSearchboxContainer">
              <input className="navbarSearchBox" placeholder="Pesquisar..."></input>
              <a href="/">
                <SearchOutlined />
              </a>
            </div>

            <div className="navbarSideInfoContainer">
              <div className="navbarIconsContainer">
                <li className="item iconsino">
                  <a
                    id="icon-notificacao"
                    onClick={openModalNotification}
                    ref={modalNotificacaoRef}

                  >
                    <Notifications style={icon} />
                  </a>
                </li>

                <li className="item iconmail">
                  {width >= 960 ? (
                    <a
                      id="icon-mensagens"
                      onClick={openModalMensagens}
                      ref={modalMensagendsRef}
                    >
                      <Mail style={icon} />
                    </a>
                  ) : (
                      <div>
                        {directScreen ? (
                          <a >
                            <Add style={icon} />
                          </a>
                        ) : (
                            <Link to="/mobile-directs">
                              <Mail style={icon} />
                            </Link>
                          )}
                      </div>
                    )}
                </li>
              </div>

              <div className="navbarUserContainer" onClick={openModalUserPreferences} ref={modalUserPreferencesRef}>
                <div className="navbarUserInfo">
                  <li className="nickname">
                    Olá, {usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.nome) : "Usuario"}
                  </li>
                </div>

                <div className="navbarUserProfilePicContainer">
                  <UserProfileImg classe="navbarUserProfilePic" />
                </div>
              </div>


            </div>
          </ul>
        </nav>
      </div>

      {toggleSidebar && (
        <Sidebar onClose={() => setToggleSidebar(!toggleSidebar)} />
      )}
    </Fragment>
  );
};

export default Navbar;
