import React from 'react';
import './index.css';

// Components
  import GroupList from '../../components/GroupList/index';


const FeedPrincipal = () => {
  return (
    <div id="div-main">

      <div id="page" class="font-techpot">
        <div className="spaced">
          
          <GroupList titulo="Grupos"/>
          <GroupList titulo="Eventos"/>
          
        </div>
      </div>     

        
    </div>
  );
}

export default FeedPrincipal;
