import React from 'react';
import './index.css';
import { Mail, Menu, Notifications } from '@material-ui/icons';



const icon = {
    color: '#fff',
    fontSize : 30,
    cursor: 'pointer'

};

const Navbar = () => {
    return(
        

        <nav id="main-nav" class="font-techpot">
            <div>
                <ul class="menu">
                    <div class= "div-hamburguer">
                        <Menu style={icon}/>

                    </div>            

                    <div class="div-logo">
                    <li class="photoLogo"></li>
                    <li class="logo"><a href="#">TECHPOT</a></li> 
                    </div>

                    <div class="div-search">
                    <li><input class="searchBar" placeholder="pesquisar..."></input></li>
                    </div>

                    <div class="div-functions">
                    <li class="item iconsino"><Notifications style={icon}/></li>
                    <li class="item iconmail">< Mail style={icon}/></li>
                    </div>

                    <div class="div-user">
                        <div class="div-userInfo">
                            <li class="nickname">Olá, <a href="#">Nickname</a></li>
                            <li class="perfil"><a href="#">meu perfil</a></li>
                        </div>
                    <li class="photo"><a href="#"></a></li>
                    </div>
                </ul>
            </div>
        </nav>

        
            
        
    );

}

export default Navbar;