import React from 'react';
import './style.css';

//Components
import MensagemBox from '../../../shared/MessageListBox/index';

const DirectMobile = () =>{
    return (
      <div id="main-div-directToogle">
        <div id="div-directBox-direct">
          <MensagemBox DirectMobile={ true }/>
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
          <MensagemBox DirectMobile={ true } />
        </div>
      </div>
    );
}

export default DirectMobile;