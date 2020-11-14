import React from 'react';
import './style.css'

// Component
    import UserProfileImg from "../../shared/UserProfileImg/index"


const EditUsuario = () => {
    return(
        <div className="editUserContainer">
            <div className="editPhotoContainer">
                <div className="editPhotoContainer-col1">
                    <h2>Foto do perfil</h2>
                    <a>Editar</a>
                </div>

                <UserProfileImg classe="navbarUserProfilePic" />
            </div>

            <div className="editNameContainer">
                <div className="editNameContainer-col1">
                    <h2>Nome</h2>
                    <a>Editar</a>
                </div>

                <p>
                    user name
                </p>
            </div>

            <div className="editBioContainer">
                <div className="editBioContainer-col1">
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