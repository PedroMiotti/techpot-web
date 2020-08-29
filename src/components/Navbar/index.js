import React from 'react';
import './index.css';

// Icons
    import { Mail, Menu, Notifications } from '@material-ui/icons';

// Componentes
    import LogoTechPot from '../../shared/LogoTechPot/index';
    import userProfilePicture from '../../assets/Rafa.jpg';


const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const Navbar = () => {
    return(
        <nav class="font-techpot navbarContainer">
                <ul class="navbarMenu">
                    <div class= "navbarHamburguer">
                        <Menu style={icon}/>
                    </div>            

                    <LogoTechPot />

                    <div class="navbarSearchboxContainer">
                        <li><input class="navbarSearchBox" placeholder="Pesquisar..."></input></li>
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
                                <li class="nickname">Olá, <a href="#">Nickname</a></li>
                                <li class="perfil"><a href="#">meu perfil</a></li>
                            </div>

                            <div class="navbarUserProfilePicContainer">
                               <img src={userProfilePicture} class="navbarUserProfilePic"/>
                            </div>
                            
                        </div>
                    </div>
                </ul>
        </nav>

        
            
        
    );

}

export default Navbar;