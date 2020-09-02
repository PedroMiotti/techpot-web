import React, { Fragment } from 'react';
import './index.css';

// Components
  import ContainerList from '../../components/ContainerList/index';
  import EventBox from '../../components/EventBox/index';
  import GroupBox from '../../components/GroupBox/index';
  import Post from '../../components/post/index';
  import PostBox from '../../components/postBox/index';



const FeedPrincipal = () => {
  return (
    <div id="FeedPrincipal-div-main">

      <div id="page" class="font-techpot">
        <div className="spaced">
          <div id="div-toHide-boxList">
            <ContainerList tituloBoxList="Grupos"> 
              <GroupBox groupTitle="TECH" groupMembersNum="444"/>
              <GroupBox groupTitle="TECH" groupMembersNum="444"/>
              <GroupBox groupTitle="TECH" groupMembersNum="444"/>
              <GroupBox groupTitle="TECH" groupMembersNum="444"/>
              <GroupBox groupTitle="TECH" groupMembersNum="444"/>
              <GroupBox groupTitle="TECH" groupMembersNum="444"/>
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
              <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
              <EventBox tituloEvento="HackaTruck" dataEvento="11/09"/>
              <EventBox tituloEvento="HackaTruck" dataEvento="17/09"/>
              <EventBox tituloEvento="HackaTruck" dataEvento="30/09/2020"/>
              <EventBox tituloEvento="HackaTruck" dataEvento="08/10/2020"/>
              <EventBox tituloEvento="HackaTruck" dataEvento="21/10/2020"/>
            </ContainerList>
          </div>
          
        </div>
      </div>     

        
    </div>
  );
}

export default FeedPrincipal;
