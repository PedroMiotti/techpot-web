import React from 'react';
import './index.css';

// Icons
    import SearchIcon from '@material-ui/icons/Search';

// Components
import SearchBox from '../../../components/SearchBox/index';

const Search = () => {
    return(
        <div id="div-search-page">
            
            <div id="search-page-div-searchbar">
                <input type ="text" placeholder="procurar..."/>
                <a href='/' > <SearchIcon /></a>
            </div>
            <div id="search-page-most-searched">
                <SearchBox/>
                <SearchBox/>
                <SearchBox/>
                <SearchBox/>
                <SearchBox/>
                <SearchBox/>
                
            </div>
            
        </div>
        
    );
}

export default Search;