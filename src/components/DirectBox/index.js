import React from 'react';
import './index.css'

//import { Link } from 'react-router-dom';

//assets
import FlavioUser from '../../assets/Flavio.jpg'

const DirectBox = () =>{
    return(

        <div id="div-main-DirectBox" class="font-techpot">
            <div id="div-img-DirectBox">
                <img src={FlavioUser} alt="User Profile Image" class="user-img-DirectBox"/>
            </div>
            <div id="div-wrap-details-DirectBox">
                <div id="div-userName-DirectBox">
                    <h1>FlavinhoGameplays</h1>
                    <p>@FlalvioMarques</p>
                </div>
                <div id="div-lstMsg-DirectBox">
                    <p>Vou contatar o suporte...</p>

                </div>
            </div>
        </div>
        
        
    )
}

export default DirectBox;