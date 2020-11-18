import React from 'react';
import './style.css'

// Component
import UserProfileImg from "../../shared/UserProfileImg/index"

// React Router
import { Link } from 'react-router-dom';

// Material UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const icon = {
    color: "#fff",
    fontSize: 30,
    cursor: "pointer",
};


const EditUsuario = () => {
    return (
        <div className="editUserContainer font-techpot">

            <div className="editUserTitleBar">
                <Link><ArrowBackIcon style={icon} /></Link>
                <h1>Editar perfil</h1>
            </div>

            <div className="editPhotoContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1 font-techpot">
                    <h2>Foto de perfil</h2>
                    <a>Editar</a>
                </div>

                <div className="editPhotoImage">
                    <UserProfileImg />
                </div>
            </div>

            <div className="editNameContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Nome</h2>
                    <a>Editar</a>
                </div>

                <div className="editUserContainerInput-row1">
                    <input placeholder="Nome"/>
                    <input placeholder="Sobrenome" />

                </div>

            </div>

            <div className="editBioContainer editUserContainerPadrao">
                <div className="editUserContainerPadrao-col1">
                    <h2>Bio</h2>
                    <a>Editar</a>
                </div>

                <p>
                    user bio
                </p>
            </div>

        </div>

    )

}


export default EditUsuario;