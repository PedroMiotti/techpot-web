import React from 'react';
import './styles.css';

// Components
    import InfoUsuario from './Components/info-usuario/index.js';
    import InfoGrupo from './Components/info-grupo/index.js';


const PerfilUsuario = () => {
    return(
        <div>
            <InfoUsuario />
            <div className="sp"></div>
            <InfoGrupo />
            <div className="sp"></div>
        </div>
    );
    
}

export default PerfilUsuario;