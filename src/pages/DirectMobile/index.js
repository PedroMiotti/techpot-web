import React, {useState} from 'react';
import './index.css';

//components
import DirectBox from '../../components/DirectBox/index';

//Icon
import { ArrowBackIos, Search} from '@material-ui/icons';

const DirectMobile = () =>{
    
    return(
        <div id="main-div-directToogle">
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

export default DirectMobile;