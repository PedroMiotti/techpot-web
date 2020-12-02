import React, { useEffect } from 'react';
import './styles/index.css';


// Assets
import groupImagePic from '../../assets/unnamed.png'

// Components
import PostBox from '../../components/postBox/index'
import Post from '../../components/post/index'

// Material UI
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import { Add } from '@material-ui/icons';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { infoGroup } from '../../store/_entities/Group';

// Helper
import { firstLetterUppercase } from '../../helpers/UpperFirstLetter';

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


const FeedGrupo = () => {

  const classes = useStyles();

  const { id } = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(infoGroup(id));

    return () => {}

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
        <Post />
        <Post />
        <Post />
      </div>

      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <Add />
      </Fab>
    </div>
  );
}


export default FeedGrupo;