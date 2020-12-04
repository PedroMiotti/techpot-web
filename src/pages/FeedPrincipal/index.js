import React, { useEffect, useState } from 'react';
import './index.css';

// Components
import ContainerList from '../../components/ContainerList/index';
import EventBox from '../../components/EventBox/index';
import GroupBox from '../../components/GroupBox/index';
import Post from '../../components/post/index';
import PostBox from '../../components/postBox/index';
import PhotoUpdateContainer from '../../components/photoUpdateBox/index'
import ModalCreatePost from "../../components/ModalCreatePost/index"
import ModalCreateGroup from '../../components/ModalCreateGroup/index'
import ModalCreateEvent from '../../components/ModalCreateEvent/index'
import SnackLoad from '../../shared/Snackload/index'
import SnackMessage from '../../shared/Snackbar/index'


// Redux
import { useSelector, useDispatch } from 'react-redux';
import { listEvent } from '../../store/_entities/Event';
import { listGroup } from '../../store/_entities/Group';
import { listPostByUser } from '../../store/_entities/Post';



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

  const [showModalCreatePost, setShowModalCreatePost] = useState(false);
  const [showModalCreateGroup, setShowModalCreateGroup] = useState(false);
  const [showModalCreateEvent, setShowModalCreateEvent] = useState(false);


  // Usuario
  const usuarioPerfil = useSelector(state => state.entitie.user.perfil);
  const usuarioId = useSelector(state => state.entitie.user.id);
  const usuarioFirstAccess = useSelector(state => state.entitie.user.firstAccess);

  // Evento
  const eventList = useSelector(state => state.entitie.event.eventsList);

  const eventCreatedLoading = useSelector(state => state.entitie.event.loading);
  const eventCreatedFailed = useSelector(state => state.entitie.event.error);
  const eventCreatedErrorMessage = useSelector(state => state.entitie.event.errorMessage);
  const eventCreatedSuccess = useSelector(state => state.entitie.event.success);
  const eventCreatedSuccessMessage = useSelector(state => state.entitie.event.successMessage);

  // Grupo
  const groupList = useSelector(state => state.entitie.group.groupList);

  const groupCreatedLoading = useSelector(state => state.entitie.group.loading);
  const groupCreatedFailed = useSelector(state => state.entitie.group.error);
  const groupCreatedErrorMessage = useSelector(state => state.entitie.group.errorMessage);
  const groupCreatedSuccess = useSelector(state => state.entitie.group.success);
  const groupCreatedSuccessMessage = useSelector(state => state.entitie.group.successMessage);

  // Posts
  const postListUser = useSelector(state => state.entitie.post.postListByUser);

  const postCreatedLoading = useSelector(state => state.entitie.post.loading);
  const postCreatedFailed = useSelector(state => state.entitie.post.error);
  const postCreatedErrorMessage = useSelector(state => state.entitie.post.errorMessage);
  const postCreatedSuccess = useSelector(state => state.entitie.post.success);
  const postCreatedSuccessMessage = useSelector(state => state.entitie.post.successMessage);

  const dispatch = useDispatch();

  const openModalCreatePost = () => {
    setShowModalCreatePost(!showModalCreatePost);
  };

  const openModalCreateGroup = () => {
    setShowModalCreateGroup(!showModalCreateGroup);
  };

  const openModalCreateEvent = () => {
    setShowModalCreateEvent(!showModalCreateEvent);
  };

  useEffect(() => {
    dispatch(listEvent());
    dispatch(listGroup(usuarioId));
    dispatch(listPostByUser(usuarioId));

  }, [])


  return (
    <div id="FeedPrincipal-div-main">
      <div id="page" className="font-techpot">
        <div className="spaced">
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Grupos" open={openModalCreateGroup}>

              {groupList.map((grupos) => (
                <GroupBox key={grupos.group_id} groupTitle={grupos.group_name} groupId={grupos.group_id} groupMembersNum={grupos.membros} />
              ))}

            </ContainerList>

          </div>
          <div id="div-posts-FeedPrincipal">

            {

              usuarioFirstAccess.FA ?
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

            <PostBox open={openModalCreatePost} />

            {postListUser.map((posts) => (
              <Post key={posts.post_id} post_body={posts.post_body} data_criacao={posts.post_data_criacao} post_body_html={posts.post_body_html} post_body={posts.post_body} grupo={posts.group_name} nome_criador={posts.user_name} sobrenome_criador={posts.user_surname} />
            ))}


          </div>
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Eventos" open={openModalCreateEvent}>

              {eventList.map((eventos) => (
                <EventBox key={eventos.event_id} tituloEvento={eventos.event_name} dataEvento={eventos.event_dateInit} tipoEvento={eventos.eventType_name} idEvento={eventos.event_id} />
              ))}

            </ContainerList>
          </div>
        </div>
      </div>

      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <Add />
      </Fab>

      {showModalCreatePost && (
        <ModalCreatePost onClose={() => setShowModalCreatePost(!showModalCreatePost)} />
      )}

      {showModalCreateGroup && (
        <ModalCreateGroup onClose={() => setShowModalCreateGroup(!showModalCreateGroup)} />
      )}

      {showModalCreateEvent && (
        <ModalCreateEvent onClose={() => setShowModalCreateEvent(!showModalCreateEvent)} />
      )}


      {groupCreatedLoading && <SnackLoad show={groupCreatedLoading} />}

      {groupCreatedFailed && <SnackMessage message={groupCreatedErrorMessage} color={"error"} show={groupCreatedFailed} />}

      {groupCreatedSuccess && <SnackMessage message={groupCreatedSuccessMessage} color={"success"} show={groupCreatedSuccess} />}


      {postCreatedLoading && <SnackLoad show={postCreatedLoading} />}

      {postCreatedFailed && <SnackMessage message={postCreatedErrorMessage} color={"error"} show={postCreatedFailed} />}

      {postCreatedSuccess && <SnackMessage message={postCreatedSuccessMessage} color={"success"} show={postCreatedSuccess} />}


      {eventCreatedLoading && <SnackLoad show={eventCreatedLoading} />}

      {eventCreatedFailed && <SnackMessage message={eventCreatedErrorMessage} color={"error"} show={eventCreatedFailed} />}

      {eventCreatedSuccess && <SnackMessage message={eventCreatedSuccessMessage} color={"success"} show={eventCreatedSuccess} />}
    </div>
  );
}

export default FeedPrincipal;
