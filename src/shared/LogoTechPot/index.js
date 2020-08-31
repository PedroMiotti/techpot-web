import React from 'react';
import './index.css';

// Assets
    import logoIconTechPot from '../../assets/LogoIconTechpot.svg';


const LogoTechPot = () => {
    return(
                        
        <div class="logoContainer">

            <img src={logoIconTechPot} class="logoIcon" alt="logoTechpotiCon"/>
            <a class="logoText" href="/">TECHPOT</a>

        </div>

    );

}

export default LogoTechPot;