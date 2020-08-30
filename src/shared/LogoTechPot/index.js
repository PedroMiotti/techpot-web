import React from 'react';
import './index.css';

// Assets
    import logoIconTechPot from '../../assets/LogoIconTechpot.svg';


const LogoTechPot = () => {
    return(
                        
        <div class="logoContainer">

            <img src={logoIconTechPot} class="logoIcon" alt="logoTechpotiCon"/>
            <li class="logoText"><a href="/">TECHPOT</a></li> 

        </div>

    );

}

export default LogoTechPot;