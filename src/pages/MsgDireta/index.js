import React from 'react';
import './styles.css';

//Components
import Contraparte from './Components/Contraparte/index.js';
import Conversa from './Components/Conversa/index.js';
import EnviarMsg from './Components/EnviarMsg/index.js';

const MsgDireta = () => {
    return(
        <div id="MsgDireta" className="font-techpot">
            <Contraparte />
            <Conversa />
            <EnviarMsg />
        </div>
    );
}

export default MsgDireta;