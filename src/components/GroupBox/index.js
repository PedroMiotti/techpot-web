import React from 'react';
import './index.css';



const GroupBox = ({data}) =>{
    return(
    <div id="container-groupBox">
        {data ? <h1 id="groupBox-dataHeader"class="font-techpot">{data}</h1> : null}
        <button className="button"></button>
    </div>    
        
    )
};

export default GroupBox;