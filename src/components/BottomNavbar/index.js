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
            <ul class="div-icons">
                <div><li id="homeIcon"><Home style={icon}/></li></div>
                <div><li id="searchIcon"><Search style={icon}/> </li></div>
                <div><li id="calendarIcon"><Event style={icon}/></li></div>
                <div><li id="bellIcon"><Notifications style={icon}/></li></div>
                <div><li id="userIcon"><AccountCircle style={icon}/></li></div>
            </ul>
            
        </nav>

    );

}

export default BottomNavbar;