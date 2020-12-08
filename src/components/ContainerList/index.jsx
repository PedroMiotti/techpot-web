import React from 'react';
import './index.css';

// React Router
import { Link } from 'react-router-dom';

// Icons
    import { Add } from '@material-ui/icons';
    const icon = {
        color: "#fff",
        fontSize: 26,
      };

const ContainerList = ({tituloBoxList, children, open}) => {

    var addBtn;
    if(tituloBoxList == "Grupos"){
        addBtn = <a onClick={open}>< Add id="criar-componente" style={icon}/></a>
    } else{
        addBtn = <a onClick={open}>< Add id="criar-componente" style={icon}/></a>
    }

    return(
        <div class="containerList">
            {/*Titulo do container*/}
            <div id="ContainerList-div-header">
                <h1 id="containerHeader" class="font-techpot">{tituloBoxList}</h1>
                {addBtn}
            </div>
            
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