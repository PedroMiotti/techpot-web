import React, {useState} from 'react';
import './index.css';

//components
import DirectBox from '../DirectBox/index';

//Icon
import { Close, Search} from '@material-ui/icons';

const DirectToogle = () =>{
    
    return(
        <div id="main-div-directToogle">
            <div id="div-header-direct">
                <Close style={{color: '#fff', fontSize: '30px'}}/>
                <h1 class="font-techpot">Mensagens</h1>
            </div>
            <div id="div-search-direct">
                <input type="text" placeholder="Buscar contato..."/>
                <a href='/' > <Search style={{color: '#fff', fontSize: '30px'}}/></a>
            </div>
            <div id="div-directBox-direct">
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
                <DirectBox/>
            </div>
        </div>
    )
}

export default DirectToogle;