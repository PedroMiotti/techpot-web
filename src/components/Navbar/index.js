import React, { useState, Fragment } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

// Icons
    import { Mail, Menu, Notifications, SearchOutlined } from '@material-ui/icons';

// Componentes
    import LogoTechPot from '../../shared/LogoTechPot/index';
    import Sidebar from '../Sidebar/index'

// Assets
    import userProfilePicture from '../../assets/Rafa.jpg';


const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const Navbar = () => {
    const [ toggleSidebar, setToggleSidebar ] = useState(false);


    const openSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    }


    return(
        <Fragment>
            
            <div className="navbarContainer-higher">

            
            <nav class="font-techpot navbarContainer">
                    <ul class="navbarMenu">
                        <div class= "navbarHamburguer" onClick={openSidebar}>
                            <Menu style={icon} />
                        </div>            

                        <LogoTechPot />

                        <div class="navbarSearchboxContainer">
                            <input class="navbarSearchBox" placeholder="Pesquisar..."></input>
                            <a href='/' ><SearchOutlined /></a>
                        </div>

                        <div class="navbarSideInfoContainer">
                            <div class="navbarIconsContainer">
                                <li class="item iconsino">
                                    <Notifications style={icon}/>
                                </li>

                                <li class="item iconmail">
                                    < Mail style={icon}/>
                                </li>
                            </div>

                            <div class="navbarUserContainer">
                                <div class="navbarUserInfo">
                                    <li class="nickname">Olá, <a href="/">Nickname</a></li>
                                    <li class="perfil"><Link to="/usuario/perfil">meu perfil</Link></li>
                                </div>

                                <div class="navbarUserProfilePicContainer">
                                <img src={userProfilePicture} class="navbarUserProfilePic" alt="Profile pic user"/>
                                </div>
                                
                            </div>
                        </div>
                    </ul>
            </nav>
            </div>

            <Sidebar toggle={toggleSidebar}/>
            
        </Fragment>
        
            
        
    );

}

export default Navbar;