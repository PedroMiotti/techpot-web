import React from 'react'
import './style.css'

// Assets
import Preloader_5 from '../../assets/Preloader_5.gif';

const LoadingScreen = () => {
    return (
        <div className="LoadingScreenContainer">
            
            <img src={Preloader_5} alt="loading_gif" />

        </div>
    )
}

export default LoadingScreen;
