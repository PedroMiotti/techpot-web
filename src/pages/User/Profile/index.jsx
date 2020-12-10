import React from 'react';
import './styles.css';

// Components
import UserInformationSection from './Components/UserInformationSection/index.jsx';
import SectionContainer from './Components/SectionContainer';

// Assets
import hackatruck from '../../../assets/HackaTruck.jpg'

const Profile = () => {
    return (
        <div id="PerfilUsuario font-techpot">

            <UserInformationSection />

            <SectionContainer titulo="Grupos" child={
                <a href="https://www.espm.br/" className="PerfilUsuario-GroupChild-container">
                    <img src="https://pbs.twimg.com/media/Eb1y-JzWkAIRjj9.jpg" alt="Foto de Grupo" />
                    <h3>ENGENHARIA DE SOFTWARE II</h3>
                </a>
            } />

            <SectionContainer titulo="Eventos" child={
                <a className="PerfilUsuario-EventChild-container">
                    <div className="PerfilUsuario-EventChild-imageContainer">
                        <img src={hackatruck} alt="Foto de Evento" />
                    </div>
                    <h3>NOVOS MOMENTOS PARA O DESENVOLVIMENTO CIENTÍFICO </h3>
                </a>
            } />

        </div>
    );

}

export default Profile;