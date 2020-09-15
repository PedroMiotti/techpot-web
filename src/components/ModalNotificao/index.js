import React, { useState, useEffect } from 'react'
import './index.css'

// Icons
  import { NotificationsNoneOutlined } from '@material-ui/icons';

// Components
  import NotificacaoBox from '../../shared/Notificacao/index';
  import BottomLine from '../../shared/bottomLine/index'

const ModalNotificao = () => {
    return (
      <div className="ModalNotificacaoContainer font-techpot">
        <div className="ModalNotificacao-topbar">
          <NotificationsNoneOutlined />

          <h3>Notificações</h3>

          <div className="emptySpace"></div>
        </div>

        <BottomLine />

        <div className="ModalNotificacao-notificacoes">
          <NotificacaoBox />
          <NotificacaoBox />
          <NotificacaoBox />
          <NotificacaoBox />
        </div>

        <BottomLine />

        <div className="ModalNotificao-bottom">
          <p>Ver tudo</p>
        </div>
      </div>
    );
}

export default ModalNotificao;
