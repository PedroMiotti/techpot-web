import React from 'react';
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


const FeedGrupo = ( ) => {

    const classes = useStyles();

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
              <h1 className="feedGrupoInfoTextName">Tech</h1>
              <p className="feedGrupoInfoTextMembros">193 Membros</p>
              <p className="feedGrupoInfoTextBIO">
                Grupo para todos os cursantes de TECH.
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