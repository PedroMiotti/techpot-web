import React from 'react';
import './index.css'

import { Link } from 'react-router-dom';

//Assets
import groupImage from '../../../../assets/unnamed.png';

const GroupBox = ({ groupTitle, groupMembersNum, groupId }) =>{
    return(

        <Link to={`/grupo/feed/${groupId}`} className="container-groupBox">
            <div id="groupBox-image-div">
                <img src={groupImage} alt="GroupImage" className="groupBox-image"/>
            </div>
            <div id="groupBox-details">
                <h1 id="groupBox-tituloGrupo">{groupTitle}</h1>
                <p id="groupBox-members">{groupMembersNum} {parseInt(groupMembersNum) == 1 ?  'membro' :  'membros'} </p>
            </div>
        </Link>
        
        
    )
}

export default GroupBox;