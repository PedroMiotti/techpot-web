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
            <div class="div-bottom-icons">
                <a href="/" id="homeIcon"><Home style={icon}/></a>
                <a href="/" id="searchIcon"> <Search style={icon}/></a> 
                <a href="/" id="calendarIcon"><Event style={icon}/></a>
                <a href="/" id="bellIcon"> <Notifications style={icon}/> </a>
                <a href="/" id="userIcon"><AccountCircle style={icon}/></a>
            </div>
            
        </nav>

    );

}

export default BottomNavbar;