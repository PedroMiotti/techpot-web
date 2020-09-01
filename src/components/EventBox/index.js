import React from 'react';
import './index.css';

import {Link} from 'react-router-dom';

//Assets
import eventImage from '../../assets/HackaTruck.jpg'


const EventBox = ({tituloEvento, dataEvento}) =>{
    return(
    <div id="container-eventBox">
        <div id="eventBox-details" class="font-techpot">
            <h1 id="eventBox-titulo">{tituloEvento}</h1>
            <h1 id="eventBox-data">{dataEvento}</h1>
        </div>
        <Link to="/evento" className="link-center"><img src={eventImage} alt="eventImage" className="image-eventBox"/></Link>
    </div>    
        
    )
};

export default EventBox;