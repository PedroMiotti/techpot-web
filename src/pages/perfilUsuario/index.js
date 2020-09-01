import React, { Component } from 'react';
import InfoUsuario from '../../components/info-usuario/index.js';
import InfoGrupo from '../../components/info-grupo/index.js';
import './styles.css';

class perfilUsuario extends Component {
    render() {
        return(
            <div id="perfilUsuario">
                <InfoUsuario />
                <div className="sp"></div>
                <InfoGrupo />
                <div className="sp"></div>
            </div>
        );
    }
}

export default perfilUsuario;