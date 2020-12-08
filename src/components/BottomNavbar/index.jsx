import React from 'react';
import './index.css';
import { Notifications, Home, Search, Event, AccountCircle} from '@material-ui/icons';

import {Link} from 'react-router-dom'; 

const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const BottomNavbar = () => {
    return (
      <div className="bottomBarContainer-higher">
        <nav id="bottom-nav">
          <div class="div-bottom-icons">
            <a href="/" id="homeIcon">
              <Home style={icon} />
            </a>
            <Link to="mobile-search" id="searchIcon">
              {" "}
              <Search style={icon} />
            </Link>
            <Link to="/mobile-eventos" id="calendarIcon">
              <Event style={icon} />
            </Link>
            <Link to="/mobile-notificacao" id="bellIcon">
              {" "}
              <Notifications style={icon} />{" "}
            </Link>
            <Link to="/usuario/perfil" id="userIcon">
              <AccountCircle style={icon} />
            </Link>
          </div>
        </nav>
      </div>
    );

}

export default BottomNavbar;