import React from 'react';
import './index.css';

import SearchImg from '../../assets/Flavio.jpg';

const SearchBox = () => {
    return(
        <div id="div-container-SearchBox" class="font-techpot">
            <div id="searchBox-div-img">
                <img src={SearchImg} id="searchBox-img" alt="searchImage"/>
            </div>
            <div id="searchBox-div-details" >
                <h1 id="searchBox-nickname">FlavinhoGameplays</h1>
                <p id="searchBox-sub">@flavioMarques</p>
            </div>
            <div id="searchBox-div-typeSearch">
                <p id="searchBox-typeSearch">user</p>
            </div>
        </div>
    );
}

export default SearchBox;