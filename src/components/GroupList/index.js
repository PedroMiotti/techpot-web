import React from 'react';
import './index.css';
<<<<<<< HEAD
import Separator from '../Separator/index';
=======
>>>>>>> 3c9098d7c44cdb5c0381e72a507cff94844a9362
import GroupBox from '../GroupBox/index';

const GroupList = ({titulo}) => {
    return(
        <div class="containerGroup">
            {/*Titulo do container*/}
<<<<<<< HEAD
            <h1>{titulo}</h1>

            {/*A linhazinha que separa o titulo das boxes*/}
            <Separator />
=======
            <h1 id="containerHeader">{titulo}</h1>

            {/*A linhazinha que separa o titulo das boxes*/}
            <div className="separator"></div>
>>>>>>> 3c9098d7c44cdb5c0381e72a507cff94844a9362
            
            {/*Box dos grupos em que o usuario pertence*/}
            <GroupBox/>
            <GroupBox/>
            <GroupBox/>
        </div>
    )

<<<<<<< HEAD



=======
>>>>>>> 3c9098d7c44cdb5c0381e72a507cff94844a9362
};

export default GroupList;