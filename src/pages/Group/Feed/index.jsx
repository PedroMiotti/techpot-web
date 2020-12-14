import React, { useEffect } from 'react';
import './style.css';

// Assets
import groupImagePic from '../../../assets/unnamed.png'

// Components
import PostBox from '../../../components/CreatePostContainer/index'
import Post from '../../../components/Post/index'

// Material UI
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import { Add } from '@material-ui/icons';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { infoGroup } from '../../../store/_entities/Group';
import { listPostByGroup } from '../../../store/_entities/Post';

// React-Router-Dom
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "82px",
    right: "15px",
    ["@media (min-width:960px)"]: {
      display: "none",
    },
  },
}));


const Feed = () => {

  const classes = useStyles();

  // Posts
  const postListGroup = useSelector(state => state.entitie.post.postListByGroup);

  const { id } = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(infoGroup(id));
    dispatch(listPostByGroup(id));

  }, [])
  
  const infoGrupo = useSelector(state => state.entitie.group.groupInfo);

  return (
    <div className="feedGrupoContainer font-techpot">
      <div className="feedGrupoSideContainer">
        <div className="feedGrupoInfo">
          <div className="feedGrupoImageContainer">
            <img
              src={groupImagePic}
              alt="GroupProfilePic"
              className="groupImage"
            />
          </div>

          <div className="feedGrupoInfoText">
            <h1 className="feedGrupoInfoTextName">{infoGrupo.g ? infoGrupo.g.nome : " "}</h1>
            <p className="feedGrupoInfoTextMembros">{infoGrupo.g ? infoGrupo.g.num_membros + (infoGrupo.g.num_membros == 1 ? ' Membro' : ' Membros') : " "}</p>
            <p className="feedGrupoInfoTextBIO">
              {infoGrupo.g ? infoGrupo.g.descricao : " "}
              </p>
          </div>
        </div>
      </div>

      <div className="feedGrupoTopContainer">
        <div className="feedGrupoNavItems">
          <a href="/">FEED</a>
          <a href="/">SOBRE</a>
          <a href="/">EVENTOS</a>
          <a href="/">MEMBROS</a>
        </div>

        <div className="feedGrupoConvidarContainerButton">
          <a href="/" className="feedGrupoConvidarButton">
            + Convidar
            </a>
        </div>
      </div>
      <div className="feedGrupoPosts">
        <PostBox />

        {postListGroup.map((posts) => (
          <Post key={posts.post_id} post_body={posts.post_body} data_criacao={posts.post_data_criacao} post_body_html={posts.post_body_html} post_body={posts.post_body} grupo={posts.group_name} id_criador={posts.user_id} nome_criador={posts.user_name} sobrenome_criador={posts.user_surname} />
        ))}
        
      </div>

      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <Add />
      </Fab>
    </div>
  );
}


export default Feed;