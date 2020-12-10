import React from 'react';
import './style.css';

// Icons
    import SearchIcon from '@material-ui/icons/Search';

// Components
import SearchBox from './components/SearchResultBox';

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