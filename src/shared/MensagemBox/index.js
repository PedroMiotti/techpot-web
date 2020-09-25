import React from "react";
import "./index.css";

// Assets
import RafaPic from "../../assets/Rafa.jpg";

const MensagemBox = () => {
  return (
    <div className="MensagemBox-Container font-techpot">
      <div className="MensagemBox-userPic-Container">
        <img
          src={RafaPic}
          alt="userNotificacaoPic"
          className="MensagemBox-userPic"
        />
      </div>

      <div className="MensagemBox-text-container font-techpot">
        <span className="MensagemBox-UserActionName">João Kitajima </span>
        <p className="MensagemBox-text">Reunião marcada para as 18h então, até la, abraços !!</p> {/*TODO --> Add a limit of chars to ...*/}
      </div>

      <div className="MensagemBox-ActionPic-Container ">
        <span className="MensagemBox-tempo">16:52</span>
        <div className="MensagemBox-NewMessage"></div>
      </div>
    </div>
  );
};

export default MensagemBox;