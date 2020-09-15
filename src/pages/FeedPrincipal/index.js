import React, { Fragment } from 'react';
import './index.css';

// Components
  import ContainerList from '../../components/ContainerList/index';
  import EventBox2 from '../../components/EventBox2/index';
  import GroupBox2 from '../../components/GroupBox2/index';
  import Post from '../../components/post/index';
  import PostBox from '../../components/postBox/index';


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

  return (
    <div id="FeedPrincipal-div-main">
      <div id="page" class="font-techpot">
        <div className="spaced">
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Grupos">
              <GroupBox2 groupTitle="TECH" groupMembersNum="444" />
              <GroupBox2 groupTitle="TECH" groupMembersNum="444" />
              <GroupBox2 groupTitle="TECH" groupMembersNum="444" />
              <GroupBox2 groupTitle="TECH" groupMembersNum="444" />
              <GroupBox2 groupTitle="TECH" groupMembersNum="444" />
              <GroupBox2 groupTitle="TECH" groupMembersNum="444" />
            </ContainerList>
          </div>
          <div id="div-posts-FeedPrincipal">
            <PostBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Eventos">
              <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08" />
              <EventBox2 tituloEvento="HackaTruck" dataEvento="11/09" />
              <EventBox2 tituloEvento="HackaTruck" dataEvento="17/09" />
              <EventBox2 tituloEvento="HackaTruck" dataEvento="30/09/2020" />
              <EventBox2 tituloEvento="HackaTruck" dataEvento="08/10/2020" />
              <EventBox2 tituloEvento="HackaTruck" dataEvento="21/10/2020" />
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
