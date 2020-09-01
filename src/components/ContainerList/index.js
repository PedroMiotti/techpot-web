import React from 'react';
import './index.css';
import EventBox from '../EventBox/index';

const ContainerList = ({tituloBoxList, children}) => {
    return(
        <div class="containerList">
            {/*Titulo do container*/}
            
            <h1 id="containerHeader" class="font-techpot">{tituloBoxList}</h1>
            
            {/*A linhazinha que separa o titulo das boxes*/}
            <div className="separator"></div>
            
            <div className="div-groupOrEvent-box">
                {/*Box dos grupos em que o usuario pertence*/}
                {children}
            </div>
        </div>
    )

};

export default ContainerList;