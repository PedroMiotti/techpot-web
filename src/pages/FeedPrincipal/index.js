import React, { Fragment } from 'react';
import './index.css';

// Components
  import GroupList from '../../components/GroupList/index';


const FeedPrincipal = () => {
  return (
    <div id="div-main">

      <div id="page" class="font-techpot">
        <div className="spaced">
          <div id="div-toHide-boxList">
            <GroupList tituloBoxList="Grupos"/>
          </div>
          <div id="div-toHide-boxList">
            <GroupList tituloBoxList="Eventos"/>
          </div>
          
        </div>
      </div>     

        
    </div>
  );
}

export default FeedPrincipal;
