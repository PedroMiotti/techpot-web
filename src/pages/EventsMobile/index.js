import React from 'react';
import './index.css';

// Components
  import GroupList from '../../components/GroupList/index';


const EventsMobile = () => {
  return (
    <div id="div-eventos">
        <GroupList tituloBoxList="Eventos"/>
    </div>
  );
}

export default EventsMobile;
