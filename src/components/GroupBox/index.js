import React from 'react';
import './index.css'

//Assets
import groupImage from '../../assets/unnamed.png';

const GroupBox = ({groupTitle, groupMembersNum}) =>{
    return(
        <div id="container-groupBox">
            <div id="groupBox-image-div">
                <img src={groupImage} alt="GroupImage" className="groupBox-image"/>
            </div>
            <div id="groupBox-details">
                <h1 id="groupBox-tituloGrupo">{groupTitle}</h1>
                <p id="groupBox-members">{groupMembersNum} membros</p>
            </div>
        </div>
    )
}

export default GroupBox;