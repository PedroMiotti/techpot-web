import React from 'react';
import './style.css'

// Components
import GroupListContainer from './components/GroupListContainer/index'
import UserProfileImg from '../../../shared/UserProfileImg/index';

// Icons
import { Close } from '@material-ui/icons'

// Helpers
import { firstLetterUppercase } from '../../../helpers/UpperFirstLetter';

// Redux
import { useSelector } from 'react-redux';

const Sidebar = ({ onClose }) => {

    const usuarioPerfil = useSelector(state => state.entitie.user.profile);

    return (
        <div className="sidebarContainer font-techpot">
            <div className="sidebarUserInfoContainer">
                <div className="sidebarCloseContainer" onClick={onClose}>
                    <Close style={{ color: '#fff', fontSize: '30px' }} />
                </div>
                <div className="sidebarProfilePictureContainer">
                    <UserProfileImg />
                </div>

                <div className="sidebarUserDescContainer">
                    <h3>{usuarioPerfil.u ? firstLetterUppercase(usuarioPerfil.u.name) : "Usuario"}</h3>

                    {usuarioPerfil.u ?
                        usuarioPerfil.u.occupation ?
                            <p> {firstLetterUppercase(usuarioPerfil.u.occupation)}</p>
                            :
                            null
                        :
                        null
                    }
                </div>

            </div>
            <div className="sidebarGroupsContainer">
                <h2>Grupos</h2>

                <div className="sidebarGroupsList">
                    <GroupListContainer />
                    <GroupListContainer />
                    <GroupListContainer />
                    <GroupListContainer />
                    <GroupListContainer />
                    <GroupListContainer />
                </div>
            </div>
        </div>
    )
}


export default Sidebar;
