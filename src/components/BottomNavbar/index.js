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
                <div id="searchIcon"></div>
                <div id="calendarIcon"></div>
                <div id="bellIcon"><Notifications style={icon}/></div>
                <div id="userIcon"></div>
            </div>
            
        </nav>

    );

}

export default BottomNavbar;