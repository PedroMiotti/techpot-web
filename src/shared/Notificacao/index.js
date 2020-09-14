import React from 'react';
import './index.css'

// Assets
    import RafaPic from '../../assets/Rafa.jpg'
    import HTTP_Post from '../../assets/HTTP.png'

const NotificacaoBox = () => {
    return (
        <div className="notificacaoBox-Container">
            <div className="notificacaoBox-userPic-Container">
                <img src={RafaPic} alt="userNotificacaoPic" className="notificacaoBox-userPic"/>
            </div>

            <div className="notificacaoBox-text-container font-techpot">
                <p className="notificacaoBox-text"><span className="notificacaoBox-UserActionName">pedro_miotti </span>comentou no seu post <span className="notificacaoBox-tempo">2d</span></p> 
            </div>


            <div className="notificacaoBox-ActionPic-Container">
                <img src={HTTP_Post} alt="ActionPic" className="notificacaoBox-ActionPic"/>
            </div>

        </div>
    )
}

export default NotificacaoBox;
