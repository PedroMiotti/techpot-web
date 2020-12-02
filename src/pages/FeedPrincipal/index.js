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

  // Usuario
  const usuarioPerfil = useSelector(state => state.entitie.user.perfil);
  const usuarioId = useSelector(state => state.entitie.user.id);
  const usuarioFirstAccess = useSelector(state => state.entitie.user.firstAccess);

  // Evento
  const eventList = useSelector(state => state.entitie.event.eventsList);

  // Grupo
  const groupList = useSelector(state => state.entitie.group.groupList);

  // Posts
  const postListUser = useSelector(state => state.entitie.post.postListByUser);
  

  

  const dispatch = useDispatch();

  const openModalCreatePost = () => {
    setShowModalCreatePost(!showModalCreatePost);
  };

  const openModalCreateGroup = () => {
    setShowModalCreateGroup(!showModalCreateGroup);
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
                <GroupBox key={grupos.group_id} groupTitle={grupos.group_name} groupId={grupos.group_id} groupMembersNum={grupos.membros}/>
              ))}
              
            </ContainerList>

          </div>
          <div id="div-posts-FeedPrincipal">

            {
              usuarioPerfil.u ?
                usuarioFirstAccess ?
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
                :
                null
            }

            <PostBox open={ openModalCreatePost }/>

            {postListUser.map((posts) => (
              <Post key={posts.post_id} post_body={posts.post_body} data_criacao={posts.post_data_criacao} post_body_html={posts.post_body_html} post_body={posts.post_body} grupo={posts.group_name} nome_criador={posts.user_name} sobrenome_criador={posts.user_surname} />
            ))}


          </div>
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Eventos">

              {eventList.map((eventos) => (
                    <EventBox key={eventos.event_id} tituloEvento={eventos.event_name} dataEvento={eventos.event_dateInit} tipoEvento={eventos.eventType_name} idEvento={eventos.event_id}/>
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

      

    </div>
  );
}

export default FeedPrincipal;
