import React, { useEffect } from 'react';
import './styles.css';

// Components
import UserInformationSection from './Components/UserInformationSection';
import SectionContainer from './Components/SectionContainer';

// Assets
import hackatruck from '../../../assets/HackaTruck.jpg'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { userInfo, USER_INFO_CLEANUP } from '../../../store/_entities/User';


// React Router
import { useParams } from 'react-router-dom';

const Profile = () => {

    const { id } = useParams();

    const usuarioId = useSelector(state => state.entitie.user.id);
    const userProfile = useSelector(state => state.entitie.user.profile);
    const otherUserProfile = useSelector(state => state.entitie.user.otherUserProfile);

    const dispatch = useDispatch();

    useEffect(() => {
        if (usuarioId !== parseInt(id)) {
            dispatch(userInfo(id, false));
        }

        return () => {
            dispatch(USER_INFO_CLEANUP());
        }

    }, [dispatch])


    return (
        <div id="PerfilUsuario font-techpot">

            <UserInformationSection usuarioPerfil={usuarioId !== parseInt(id) ? otherUserProfile : userProfile} usuarioId={id} editPermission={usuarioId !== parseInt(id) ? false : true}/>

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