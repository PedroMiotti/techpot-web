import React, { Component } from 'react';
import './styles.css';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

class EnviarMsg extends Component {
    render() {
        return(
            <div id="EnviarMsg">        
                <AttachFileIcon id="Anexar" onClick />

                <p></p>

                <SendIcon id="Enviar" onClick />
            </div>
        );
    }
}

export default EnviarMsg;