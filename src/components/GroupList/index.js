import React from 'react';
import './index.css';
import GroupBox from '../GroupBox/index';

const GroupList = ({titulo}) => {
    return(
        <div class="containerGroup">
            {/*Titulo do container*/}
            <h1 id="containerHeader">{titulo}</h1>

            {/*A linhazinha que separa o titulo das boxes*/}
            <div className="separator"></div>
            
            <div className="div-group-box">
                {/*Box dos grupos em que o usuario pertence*/}
                <GroupBox/>
                <GroupBox/>
                <GroupBox/>
                <GroupBox/>
                <GroupBox/>
                <GroupBox/>
                <GroupBox/>
            </div>
        </div>
    )

};

export default GroupList;