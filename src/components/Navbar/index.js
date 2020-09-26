import React, { useState, Fragment, useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";

// Icons
import { Mail, Menu, Notifications, SearchOutlined } from "@material-ui/icons";

// Componentes
import LogoTechPot from "../../shared/LogoTechPot/index";
import Sidebar from "../Sidebar/index";
import ModalNotificacao from "../ModalNotificacao/index";
import ModalMensagens from "../ModalMensagens/index";

// Assets
import userProfilePicture from "../../assets/Rafa.jpg";

// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

const icon = {
  color: "#fff",
  fontSize: 30,
  cursor: "pointer",
};

const Navbar = ({ pathName }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [showModalNotification, setShowModalNotification] = useState(false);
  const [showModalMensagens, setShowModalMensagens] = useState(false);
  const [anchorLeft, setAnchorLeft] = useState(null);
  const [anchorTop, setAnchorTop] = useState(null);

  const modalNotificacaoRef = useRef();
  const modalMensagendsRef = useRef();

  const { height, width } = useWindowDimensions();

  let navTitle;
  if (width <= 960 && pathName == "/mobile-notificacao") {
    navTitle = "Notificações";
  } else if (width <= 960 && pathName == "/mobile-directs") {
    navTitle = "Mensagens";
  } else if (width <= 960 && pathName == "/mobile-eventos") {
    navTitle = "Eventos";
  } else if (width <= 960 && pathName == "/mobile-search") {
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
              <input class="navbarSearchBox" placeholder="Pesquisar..."></input>
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
                  {width >= 960 ? (
                    <a
                      id="icon-mensagens"
                      onClick={openModalMensagens}
                      ref={modalMensagendsRef}
                    >
                      <Mail style={icon} />
                    </a>
                  ) : (
                    <Link to="/mobile-directs">
                      <Mail style={icon} />
                    </Link>
                  )}
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

      {toggleSidebar && (
        <Sidebar onClose={() => setToggleSidebar(!toggleSidebar)} />
      )}
    </Fragment>
  );
};

export default Navbar;
