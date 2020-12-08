import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class Contraparte extends Component {
    render() {
        return(
            <div id="Contraparte"> 
                <h1 id="BotãoRetornar"><Link to="/">&#10006;</Link></h1>

                <Link id="Usuário" to="/usuario/perfil">
                    <img src="https://avatars0.githubusercontent.com/u/1372390?s=400&v=4" alt="Foto do Usuário"/>
                    <h1>Carlos Rafael Gimenes das Neves</h1>
                </Link>                
            </div>
        );
    }
}

export default Contraparte;