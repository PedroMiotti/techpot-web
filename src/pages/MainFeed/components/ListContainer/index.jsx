import React from 'react';
import './style.css';


const ContainerList = ({ tituloBoxList, children, open }) => {

    return (
        <div className="containerList">
            {/*Titulo do container*/}
            <div id="ContainerList-div-header">
                <h1 id="containerHeader" className="font-techpot">{tituloBoxList}</h1>
                <a onClick={open} className="OpenModalBtt">Criar</a>
            </div>

            {/*Linha que separa o titulo das boxes*/}
            <div className="separator"></div>

            <div className="div-groupOrEvent-box">
                {/*Box dos grupos em que o usuario pertence*/}
                {children}
            </div>
        </div>
    )

};

export default ContainerList;