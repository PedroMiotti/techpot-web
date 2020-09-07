import React from 'react';
import './index.css';

// Components
  import ContainerList from '../../components/ContainerList/index';
  import EventBox2 from '../../components/EventBox2/index';


const EventsMobile = () => {
  return (
    <div id="div-eventos">
        <ContainerList tituloBoxList="Eventos">
          <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08"/>
          <EventBox2 tituloEvento="HackaTruck" dataEvento="31/08"/>
        </ContainerList>
    </div>
  );
}

export default EventsMobile;
