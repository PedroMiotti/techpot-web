import React from 'react';
import './index.css';
import { Notifications, Home, Search, Event, AccountCircle} from '@material-ui/icons';



const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const BottomNavbar = () => {
    return(
        

        <nav id="bottom-nav">
            <div class="div-icons">
                <div id="homeIcon"><Home style={icon}/></div>
<<<<<<< HEAD
                <div id="searchIcon"></div>
                <div id="calendarIcon"></div>
                <div id="bellIcon"><Notifications style={icon}/></div>
                <div id="userIcon"></div>
=======
                <div id="searchIcon"><Search style={icon}/> </div>
                <div id="calendarIcon"><Event style={icon}/></div>
                <div id="bellIcon"><Notifications style={icon}/></div>
                <div id="userIcon"><AccountCircle style={icon}/></div>
>>>>>>> 3c9098d7c44cdb5c0381e72a507cff94844a9362
            </div>
            
        </nav>

    );

}

export default BottomNavbar;