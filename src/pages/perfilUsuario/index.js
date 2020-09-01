import React, { Component } from 'react';
import InfoUsuario from '../../components/info-usuario/index.js';
import InfoGrupo from '../../components/info-grupo/index.js';
import './styles.css';

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