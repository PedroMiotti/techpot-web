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
                <div id="searchIcon"><Search style={icon}/> </div>
                <div id="calendarIcon"><Event style={icon}/></div>
                <div id="bellIcon"><Notifications style={icon}/></div>
                <div id="userIcon"><AccountCircle style={icon}/></div>
            </div>
            
        </nav>

    );

}

export default BottomNavbar;