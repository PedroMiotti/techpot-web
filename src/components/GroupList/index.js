import React from 'react';
import './index.css';
import Separator from '../Separator/index';
import GroupBox from '../GroupBox/index';

const GroupList = ({titulo}) => {
    return(
        <div class="containerGroup">
            {/*Titulo do container*/}
            <h1>{titulo}</h1>

            {/*A linhazinha que separa o titulo das boxes*/}
            <Separator />
            
            {/*Box dos grupos em que o usuario pertence*/}
            <GroupBox/>
            <GroupBox/>
            <GroupBox/>
        </div>
    )




};

export default GroupList;