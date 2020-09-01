import React from 'react';
import './index.css';

// Components
  import ContainerList from '../../components/ContainerList/index';
  import EventBox from '../../components/EventBox/index';


const EventsMobile = () => {
  return (
    <div id="div-eventos">
        <ContainerList tituloBoxList="Eventos">
          <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox tituloEvento="HackaTruck" dataEvento="31/08"/>
        </ContainerList>
    </div>
  );
}

export default EventsMobile;
