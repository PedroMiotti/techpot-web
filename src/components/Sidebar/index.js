import React from 'react';
import './index.css'

// Assets
import sidebarUserTestPicture from '../../assets/Rafa.jpg';

// Components
import GroupListContainer from '../../shared/GroupListContainer/index'

// React Awesome
import { Slide } from "react-awesome-reveal";

// Icons
import { Close } from '@material-ui/icons'

const Sidebar = ({ onClose }) => {
    return (
        <Slide >
            <div className="sidebarContainer font-techpot">
                <div className="sidebarUserInfoContainer">
                    <div className="sidebarCloseContainer" onClick={onClose}>
                        <Close style={{ color: '#fff', fontSize: '30px' }} />
                    </div>
                    <div className="sidebarProfilePictureContainer">
                        <img src={sidebarUserTestPicture} alt="sidebarUserTestPicture" className="sidebarUserPicture" />
                    </div>

                    <div className="sidebarUserDescContainer">
                        <h3>Carlos Rafael</h3>
                        <p>Professor</p>
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
        </Slide>
    )
}


export default Sidebar;