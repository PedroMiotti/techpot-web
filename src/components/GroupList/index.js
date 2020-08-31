import React from 'react';
import './index.css';
import GroupBox from '../GroupBox/index';

const GroupList = ({tituloBoxList}) => {
    return(
        <div class="containerGroup">
            {/*Titulo do container*/}
            
            <h1 id="containerHeader" class="font-techpot">{tituloBoxList}</h1>
            
            {/*A linhazinha que separa o titulo das boxes*/}
            <div className="separator"></div>
            
            <div className="div-group-box">
                {/*Box dos grupos em que o usuario pertence*/}
                <GroupBox data="31/08/2020"/>
                <GroupBox data="07/09/2020"/>
                <GroupBox data="11/09/2020"/>
                <GroupBox data="15/09/2020"/>
                <GroupBox data="31/09/2020"/>
                <GroupBox data="08/10/2020"/>
                <GroupBox data="21/10/2020"/>
            </div>
        </div>
    )

};

export default GroupList;