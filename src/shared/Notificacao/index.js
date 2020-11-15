import React from 'react';
import './index.css'

// Assets
    import HTTP_Post from '../../assets/HTTP.png'

// Components
  import UserProfileImg from "../../shared/UserProfileImg/index"

const NotificacaoBox = ({ fontColor }) => {
    return (
      <div className="notificacaoBox-Container font-techpot">
        <div className="notificacaoBox-userPic-Container">  
          <UserProfileImg classe="notificacaoBox-userPic"/> 
        </div>

        <div
          className={
            fontColor
              ? "notificacaoBox-text-container-light"
              : "notificacaoBox-text-container"
          }
        >
          <p className="notificacaoBox-text">
            <span className="notificacaoBox-UserActionName">pedro_miotti </span>
            comentou no seu post{" "}
            <span className="notificacaoBox-tempo">2d</span>
          </p>
        </div>

        <div className="notificacaoBox-ActionPic-Container">
          <img
            src={HTTP_Post}
            alt="ActionPic"
            className="notificacaoBox-ActionPic"
          />
        </div>
      </div>
    );
}

export default NotificacaoBox;
