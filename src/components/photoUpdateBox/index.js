import React from 'react';
import './style/index.css'


// Icons
    import { ImageOutlined } from '@material-ui/icons';

// Components
    import UserProfileImg from "../../shared/UserProfileImg/index"

const PhotoUpdateContainer = () => {
    return(
        <div className="photoUpdateContainer">

            <div className="photoUpdateInfo">
                <div className="photoUpdateText">
                    <h3>
                        Carregar uma foto de perfil
                    </h3>

                    <p>
                        Adicione uma foto para que seus amigos possam te achar mais facilmente
                    </p>

                </div>

                <div className="photoUpdateButtonContainer">

                    <a href="/" >Adicionar foto</a>
                </div>

            </div>

            <div className="photoUpdateUserPictureContainer">

                <div className="photoUpdateUserPicture">
                    <UserProfileImg classe="photoUpdateProfilePic"/> 
                </div>
            </div>

        </div>
    )
}

export default PhotoUpdateContainer;