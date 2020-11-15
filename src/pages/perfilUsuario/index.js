import React from 'react';
import './styles.css';

// Components
    import InfoUsuario from './Components/info-usuario/index.js';
    import InfoGrupo from './Components/info-grupo/index.js';
    import InfoEvento from './Components/info-evento/index.js';
    import Rodape from './Components/rodape/index.js';


const PerfilUsuario = () => {
    return(
        <div id="PerfilUsuario font-techpot">
            <InfoUsuario />
            <div className="sp"></div>
            <InfoGrupo />
            <div className="sp"></div>
            <InfoEvento />
            <Rodape />
        </div>
    );
    
}

export default PerfilUsuario;