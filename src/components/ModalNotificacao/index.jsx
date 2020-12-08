import React, { Fragment } from 'react'
import './index.css'

// Icons
  import { NotificationsNoneOutlined } from '@material-ui/icons';

// Components
  import NotificacaoBox from '../../shared/Notificacao/index';
  import BottomLine from '../../shared/BottomLine/index'

const ModalNotificacao = ({anchorLeft, anchorTop, onClose}) => {

    return (
      <Fragment>
        <div
          className="ModalNotificacaoContainer font-techpot"
          style={{ top: anchorTop, left: anchorLeft }}
        >
          <div className="ModalNotificacao-topbar">
            <NotificationsNoneOutlined />

            <h3>Notificações</h3>

            <div className="ModalNotificacao-emptySpace"></div>
          </div>

          <BottomLine />

          <div className="ModalNotificacao-notificacoes">
            <NotificacaoBox />
            <NotificacaoBox />
            <NotificacaoBox />
            <NotificacaoBox />
          </div>

          <BottomLine />

          <div className="ModalNotificacao-bottom">
            <p>Ver tudo</p>
          </div>
        </div>
        <div className="ModalNotificacao-overlay" onClick={onClose}></div>
      </Fragment>
    );
}



export default ModalNotificacao;
