import React, { Fragment } from 'react'
import './index.css'

// Icons
  import { MailOutline } from "@material-ui/icons";

// Components
  import MensagemBox from '../../shared/MensagemBox/index';
  import BottomLine from '../../shared/BottomLine/index'

const ModalMensagens = ({anchorLeft, anchorTop, onClose}) => {

    return (
      <Fragment>
        <div
          className="ModalMensagensContainer font-techpot"
          style={{ top: anchorTop, left: anchorLeft }}
        >
          <div className="ModalMensagens-topbar">
            <MailOutline />

            <h3>Mensagens</h3>

            <div className="ModalMensagens-emptySpace"></div>
          </div>

          <BottomLine />

          <div className="ModalMensagens-notificacoes">
            <MensagemBox />
            <MensagemBox />
            <MensagemBox />
            <MensagemBox />
          </div>

          <BottomLine />

          <div className="ModalMensagens-bottom">
            <p>Ver tudo</p>
          </div>
        </div>
        <div className="ModalMensagens-overlay" onClick={onClose}></div>
      </Fragment>
    );
}



export default ModalMensagens;
