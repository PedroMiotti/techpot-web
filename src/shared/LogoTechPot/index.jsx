import React from 'react';
import './style.css';

// Assets
    import logoIconTechPot from '../../assets/LogoIconTechpot.svg';


const LogoTechPot = ({ textSizeX }) => {
    return(
                        
        <div className="logoContainer">

            <img src={logoIconTechPot} className="logoIcon" alt="logo Techpot Icon"/>
            <a className="logoText" style={textSizeX ? {fontSize: '3em'} : {fontSize: '2em'}} href="/">TECHPOT</a>

        </div>

    );

}

export default LogoTechPot;