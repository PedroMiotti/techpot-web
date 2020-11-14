import React from 'react';
import './index.css';

// Components
import ContainerList from '../../components/ContainerList/index';
import EventBox from '../../components/EventBox/index';
import GroupBox from '../../components/GroupBox/index';
import Post from '../../components/post/index';
import PostBox from '../../components/postBox/index';
import PhotoUpdateContainer from '../../components/photoUpdateBox/index'

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Helpers
import { firstLetterUppercase } from '../../helpers/UpperFirstLetter';

// Material UI
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import { Add } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "82px",
    right: "15px",
    ["@media (min-width:960px)"]: {
      display: 'none'
    },
  },
}));

const FeedPrincipal = () => {
  const classes = useStyles();

  const usuarioPerfil = useSelector(state => state.entitie.user.perfil);

  return (
    <div id="FeedPrincipal-div-main">
      <div id="page" className="font-techpot">
        <div className="spaced">
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Grupos">
              <GroupBox groupTitle="TECH" groupMembersNum="444" />
              <GroupBox groupTitle="TECH" groupMembersNum="444" />
              <GroupBox groupTitle="TECH" groupMembersNum="444" />
              <GroupBox groupTitle="TECH" groupMembersNum="444" />
              <GroupBox groupTitle="TECH" groupMembersNum="444" />
              <GroupBox groupTitle="TECH" groupMembersNum="444" />
            </ContainerList>
          </div>
          <div id="div-posts-FeedPrincipal">

            {
              usuarioPerfil.u ?
                usuarioPerfil.u.firstAccess ?
                  null
                  :
                  <div className="afterRegisterContainer">

                    <div className="containerWelcome font-techpot">
                      <h3 className="font-techpot">Bem vindo(a) a comunidade TECH {usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.nome) : "Usuario"} !</h3>
                    </div>

                    <div className="containerPhotoUpdate">
                      <PhotoUpdateContainer />
                    </div>
                  </div>
                :
                null
            }

            <PostBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Eventos">
              <EventBox tituloEvento="HackaTruck" dataEvento="31/08" />
              <EventBox tituloEvento="HackaTruck" dataEvento="11/09" />
              <EventBox tituloEvento="HackaTruck" dataEvento="17/09" />
              <EventBox tituloEvento="HackaTruck" dataEvento="30/09/2020" />
              <EventBox tituloEvento="HackaTruck" dataEvento="08/10/2020" />
              <EventBox tituloEvento="HackaTruck" dataEvento="21/10/2020" />
            </ContainerList>
          </div>
        </div>
      </div>
      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <Add />
      </Fab>
    </div>
  );
}

export default FeedPrincipal;
