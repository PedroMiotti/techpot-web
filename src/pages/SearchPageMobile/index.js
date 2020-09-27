import React from 'react';
import './index.css';
import '../../components/SearchBox/index';

// Icons
    import { Search } from '@material-ui/icons';

// Components
import SearchBox from '../../components/SearchBox/index';

const SearchPageMobile = () => {
    return(
        <div id="div-search-page">
            
            <div id="search-page-div-searchbar">
                <input type ="text" placeholder="procurar..."/>
                <a href='/' > <Search /></a>
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

export default SearchPageMobile;