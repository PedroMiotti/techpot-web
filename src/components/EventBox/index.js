import React from 'react';
import './index.css';

//Assets
import eventImage from '../../assets/HackaTruck.jpg'


const EventBox = ({tituloEvento, dataEvento}) =>{
    return(
    <div id="container-eventBox">
        <div id="eventBox-details" class="font-techpot">
            <h1 id="eventBox-titulo">{tituloEvento}</h1>
            <h1 id="eventBox-data">{dataEvento}</h1>
        </div>
        <img src={eventImage} alt="eventImage" className="image-eventBox"/>
    </div>    
        
    )
};

export default EventBox;