import React from "react";
import "./index.css";

// Components
  import UserProfileImg from "../../shared/UserProfileImg/index"

const MensagemBox = ({ DirectMobile }) => {
  return (
    <div
      className={
        DirectMobile
          ? "MensagemBox-Container-DirectMobile font-techpot"
          : "MensagemBox-Container font-techpot"
      }
    >
      <div
        className={
          DirectMobile
            ? "MensagemBox-userPic-Container-DirectMobile"
            : "MensagemBox-userPic-Container"
        }
      >
        <UserProfileImg classe="MensagemBox-userPic"/>
      </div>

      <div
        className={
          DirectMobile
            ? "MensagemBox-text-container-DirectMobile font-techpot"
            : "MensagemBox-text-container font-techpot"
        }
      >
        <span className="MensagemBox-UserActionName">João Kitajima </span>
        <p
          className={
            DirectMobile ? "MensagemBox-text-DirectMobile" : "MensagemBox-text"
          }
        >
          Reunião marcada para as 18h então, até la, abraços !!
        </p>{" "}
        {/* TODO --> Add a limit of chars to ...*/}
      </div>

      <div className="MensagemBox-ActionPic-Container ">
        <span
          className={
            DirectMobile
              ? "MensagemBox-tempo-DirectMobile"
              : "MensagemBox-tempo"
          }
        >
          16:52
        </span>
        <div
          className={
            DirectMobile ? "MensagemBox-NewMessage-DirectMobile" : "MensagemBox-NewMessage"
          }
        ></div>
      </div>
    </div>
  );
};

export default MensagemBox;