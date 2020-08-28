import React from 'react';
import './index.css';

import BottomNavbar from '../../components/BottomNavbar/index';
import GroupList from '../../components/GroupList/index';


const Main = () => {
  return (
    <div id="div-main">
        

        <div id="page" class="font-techpot">
          <div className="spaced">
          <GroupList titulo="Grupos"/>
          <GroupList titulo="Eventos"/>
          </div>
        </div>
        
        <div id="div-bottomnavbar">
        <BottomNavbar />
        </div>
        
    </div>
  );
}

export default Main;
